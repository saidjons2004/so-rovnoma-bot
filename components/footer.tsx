import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              Qadimiy<span className="text-accent">.</span>
            </Link>
            <p className="mt-4 text-background/70 leading-relaxed max-w-md">
              O'zbekiston va butun dunyo bo'ylab qadimiy joylarni kashf qilish uchun eng yaxshi platforma.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Sahifalar</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <Link href="#joylar" className="hover:text-background transition-colors">
                  Joylar
                </Link>
              </li>
              <li>
                <Link href="#haqida" className="hover:text-background transition-colors">
                  Haqida
                </Link>
              </li>
              <li>
                <Link href="#galereya" className="hover:text-background transition-colors">
                  Galereya
                </Link>
              </li>
              <li>
                <Link href="#aloqa" className="hover:text-background transition-colors">
                  Aloqa
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Ijtimoiy tarmoqlar</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  Telegram
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  YouTube
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition-colors">
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-background/20 text-center text-background/50 text-sm">
          <p>© 2025 Qadimiy Joylar. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  )
}
