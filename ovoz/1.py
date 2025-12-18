import sqlite3
import time
import asyncio
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import (
    Application, CommandHandler, CallbackQueryHandler,
    MessageHandler, ContextTypes, filters
)

# ===== SOZLAMALAR =====
TOKEN = "8465974698:AAEnimm9Pj6cKMfw-IQggCkNGM5UCUJ3RSE"
CHANNEL_USERNAME = "@Yoshlartisu"
SUPER_ADMIN_ID = 1490046977

CANDIDATES = [
    "Babamuradov Bekzod",
    "Bazarov Sobirjon",
    "Yarmatov Sharofiddin"
]

# ===== DATABASE =====
conn = sqlite3.connect("data.db", check_same_thread=False)
cur = conn.cursor()

cur.execute("CREATE TABLE IF NOT EXISTS votes (user_id INTEGER PRIMARY KEY, candidate TEXT)")
cur.execute("CREATE TABLE IF NOT EXISTS admins (user_id INTEGER PRIMARY KEY)")
cur.execute("CREATE TABLE IF NOT EXISTS chats (chat_id INTEGER PRIMARY KEY)")
cur.execute("CREATE TABLE IF NOT EXISTS settings (id INTEGER PRIMARY KEY, vote_end INTEGER)")

cur.execute("INSERT OR IGNORE INTO admins VALUES (?)", (SUPER_ADMIN_ID,))
cur.execute("INSERT OR IGNORE INTO settings VALUES (1, 0)")
conn.commit()

# ===== YORDAMCHI =====
def save_chat(chat_id):
    cur.execute("INSERT OR IGNORE INTO chats VALUES (?)", (chat_id,))
    conn.commit()


def is_admin(uid):
    cur.execute("SELECT 1 FROM admins WHERE user_id=?", (uid,))
    return cur.fetchone() is not None


async def is_subscribed(bot, uid):
    try:
        m = await bot.get_chat_member(CHANNEL_USERNAME, uid)
        return m.status in ("member", "administrator", "creator")
    except:
        return False


def vote_open():
    cur.execute("SELECT vote_end FROM settings WHERE id=1")
    end = cur.fetchone()[0]
    return end == 0 or time.time() < end


def poll_keyboard():
    cur.execute("SELECT COUNT(*) FROM votes")
    total = cur.fetchone()[0]

    kb = []
    for c in CANDIDATES:
        cur.execute("SELECT COUNT(*) FROM votes WHERE candidate=?", (c,))
        count = cur.fetchone()[0]
        percent = int((count / total) * 100) if total else 0
        kb.append([
            InlineKeyboardButton(
                f"{percent}% ({count}) — {c}",
                callback_data=c if vote_open() else "closed"
            )
        ])
    return InlineKeyboardMarkup(kb)


def subscribe_keyboard():
    return InlineKeyboardMarkup([
        [InlineKeyboardButton("1 Tisu.Yoshlar ", url="https://t.me/Yoshlartisu")],
        [InlineKeyboardButton("2 NEWS ", url="https://t.me/news_ilm")],
        [InlineKeyboardButton("Tekshirish ✅", callback_data="check_sub")]
    ])

# ===== START =====
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    save_chat(update.effective_chat.id)
    uid = update.effective_user.id

    if not await is_subscribed(context.bot, uid):
        await update.message.reply_text(
            "⚠️ *Botdan foydalanish uchun!*\n\n"
            "❗ Iltimos quyidagi kanallarga obuna bo‘ling !!",
            parse_mode="Markdown",
            reply_markup=subscribe_keyboard()
        )
        return

    await send_poll(update, context)


async def send_poll(update: Update, context: ContextTypes.DEFAULT_TYPE):
    uid = update.effective_user.id

    msg = await context.bot.send_photo(
        chat_id=update.effective_chat.id,
        photo=open("dekanlar.png", "rb"),
        caption="🏆 *Yilning eng faol dekani*\n\n👇 Ovoz bering \n @TISUNING_eng_faol_dekani_bot ",
        parse_mode="Markdown",
        reply_markup=poll_keyboard()
    )

    if is_admin(uid):
        try:
            await context.bot.pin_chat_message(update.effective_chat.id, msg.message_id)
        except:
            pass

# ===== TEKSHIRISH =====
async def check_sub(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    uid = query.from_user.id

    if await is_subscribed(context.bot, uid):
        await query.message.delete()
        await send_poll(update, context)
    else:
        await query.answer("❌ Siz hali kanalga obuna emassiz", show_alert=True)

# ===== OVOZ =====
async def vote(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    uid = query.from_user.id

    if query.data == "closed":
        await query.answer("⛔ Ovoz berish yakunlangan", show_alert=True)
        return

    if not vote_open():
        await query.answer("⛔ Ovoz yopilgan", show_alert=True)
        return

    if not await is_subscribed(context.bot, uid):
        await query.answer("❌ Kanalga obuna emassiz", show_alert=True)
        return

    cur.execute("SELECT 1 FROM votes WHERE user_id=?", (uid,))
    if cur.fetchone():
        await query.answer("❌ Siz allaqachon ovoz bergansiz", show_alert=True)
        return

    cur.execute("INSERT INTO votes VALUES (?, ?)", (uid, query.data))
    conn.commit()

    await query.edit_message_reply_markup(reply_markup=poll_keyboard())
    await query.answer("✅ Ovoz qabul qilindi")

# ===== ADMIN PANEL =====
async def admin_panel(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if not is_admin(update.effective_user.id):
        return

    kb = InlineKeyboardMarkup([
        [InlineKeyboardButton("📊 Statistika", callback_data="admin_stats")],
        [InlineKeyboardButton("⛔ Ovoz yopish", callback_data="admin_close")],
        [InlineKeyboardButton("▶️ Ovoz ochish", callback_data="admin_open")],
        [InlineKeyboardButton("🧹 Reset", callback_data="admin_reset")],
        [InlineKeyboardButton("📢 Hammaga yuborish", callback_data="admin_broadcast")]
    ])

    await update.message.reply_text("👮 *Admin panel*", parse_mode="Markdown", reply_markup=kb)

# ===== ADMIN ACTIONS =====
async def admin_actions(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    if not is_admin(query.from_user.id):
        return

    if query.data == "admin_close":
        cur.execute("UPDATE settings SET vote_end=? WHERE id=1", (int(time.time()) - 1,))
        conn.commit()
        await query.answer("⛔ Ovoz yopildi", show_alert=True)

    elif query.data == "admin_open":
        cur.execute("UPDATE settings SET vote_end=0 WHERE id=1")
        conn.commit()
        await query.answer("▶️ Ovoz ochildi", show_alert=True)

    elif query.data == "admin_reset":
        cur.execute("DELETE FROM votes")
        conn.commit()
        await query.answer("🧹 Ovozlar tozalandi", show_alert=True)

    elif query.data == "admin_broadcast":
        context.user_data["broadcast"] = True
        await query.message.reply_text("📢 Yuboriladigan xabarni jo‘nating")

# ===== BROADCAST =====
async def broadcast(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if not is_admin(update.effective_user.id):
        return
    if not context.user_data.get("broadcast"):
        return

    cur.execute("SELECT chat_id FROM chats")
    for (cid,) in cur.fetchall():
        try:
            await context.bot.send_message(cid, update.message.text)
            await asyncio.sleep(0.05)
        except:
            pass

    context.user_data.pop("broadcast")
    await update.message.reply_text("✅ Barcha chatlarga yuborildi")

# ===== MAIN =====
def main():
    app = Application.builder().token(TOKEN).build()

    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("admin", admin_panel))
    app.add_handler(CallbackQueryHandler(check_sub, pattern="^check_sub$"))
    app.add_handler(CallbackQueryHandler(admin_actions, pattern="^admin_"))
    app.add_handler(CallbackQueryHandler(vote))
    app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, broadcast))

    app.run_polling()

if __name__ == "__main__":
    main()
