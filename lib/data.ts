// Barcha viloyatlar va ularning qadimiy joylari

export interface AncientPlace {
  id: string
  name: string
  image: string
  year: string
  shortDescription: string
  fullDescription: string
}

export interface Region {
  id: string
  name: string
  image: string
  places: AncientPlace[]
}

export const regions: Region[] = [
  {
    id: "surxondaryo",
    name: "Surxondaryo viloyati",
    image: "/images/surxondaryo-region.jpg",
    places: [
      {
        id: "fayoztepa",
        name: "Fayoztepa",
        image: "/images/fayoztepa.jpg",
        year: "I-III asr",
        shortDescription: "Qadimiy buddist monastiri va O'zbekistondagi eng qadimiy shaharlardan biri",
        fullDescription: `Fayoztepa - O'zbekistonning Surxondaryo viloyatidagi qadimiy buddist monastiri. Bu joy I-III asrlarga oid bo'lib, Kushon davri madaniyatining muhim yodgorligi hisoblanadi.

Monastir uch qismdan iborat: ibodatxona, yotoqxona va xo'jalik binolari. Arxeologik qazishmalar natijasida ko'plab buddist haykalchalari, freskalari va qo'lyozmalar topilgan.

Fayoztepa UNESCO jahon merosi ro'yxatiga kiritish uchun nomzod sifatida taqdim etilgan. Bu joy nafaqat O'zbekiston, balki butun Markaziy Osiyo buddizm tarixini o'rganishda muhim ahamiyatga ega.`,
      },
      {
        id: "at-termiziy",
        name: "At-Termiziy maqbarasi",
        image: "/images/at-termiziy.jpg",
        year: "IX-XV asr",
        shortDescription: "Buyuk mutasavvuf olim Al-Hakim at-Termiziy maqbarasi",
        fullDescription: `Al-Hakim at-Termiziy maqbarasi - IX asrda yashagan buyuk mutasavvuf olim Abu Abdulloh Muhammad ibn Ali at-Termiziy sharafiga qurilgan muqaddas ziyoratgoh.

At-Termiziy tasavvuf ilmining asoschilari va eng yirik namoyandalaridan biri bo'lgan. U 300 dan ortiq asar yozgan va "Xatm ul-avliyo" (Avliyolar xotimasi) asari bilan mashhur.

Maqbara XV asrda qayta qurilgan va hozirgi ko'rinishini olgan. Bu joy musulmon ziyoratchilarning muqaddas maskani hisoblanadi va har yili minglab ziyoratchilarni o'ziga jalb qiladi.`,
      },
      {
        id: "qoratepa",
        name: "Qoratepa",
        image: "/images/qoratepa.jpg",
        year: "II-IV asr",
        shortDescription: "Amudaryo bo'yidagi qadimiy buddist tog' monastiri",
        fullDescription: `Qoratepa - Amudaryo qirg'og'ida joylashgan noyob buddist tog' monastiri. Bu arxeologik yodgorlik II-IV asrlarga oid bo'lib, Kushon imperiyasi davrida qurilgan.

Monastir tog' qoyalariga o'yib yasalgan g'orlar va inshootlar majmuasidan iborat. Bu yerda buddist rohiblari yashagan va ibodat qilgan. Qazishmalar natijasida ko'plab buddist san'ati namunalari, yozuvlar va kundalik turmush buyumlari topilgan.

Qoratepa O'rta Osiyodagi eng muhim buddist arxeologik yodgorliklaridan biri hisoblanadi va mintaqada buddizm tarqalishi tarixini o'rganishda muhim manba bo'lib xizmat qiladi.`,
      },
    ],
  },
  {
    id: "samarqand",
    name: "Samarqand viloyati",
    image: "/images/samarqand-region.jpg",
    places: [
      {
        id: "registon",
        name: "Registon maydoni",
        image: "/images/registon.jpg",
        year: "XV-XVII asr",
        shortDescription: "Markaziy Osiyo me'morchiligining eng yorqin namunasi",
        fullDescription: `Registon maydoni - Samarqandning yuragi va Markaziy Osiyo me'morchiligining durdonasi. Bu maydon XV-XVII asrlarda qurilgan uchta ulug'vor madrasadan iborat: Ulug'bek madrasasi (1417-1420), Sherdor madrasasi (1619-1636) va Tillakori madrasasi (1646-1660).

Maydon nomi forscha "qumli joy" degan ma'noni anglatadi. Qadim zamonlarda bu yerda savdo-sotiq va ommaviy tadbirlar o'tkazilgan.

Registon 2001-yilda UNESCO jahon merosi ro'yxatiga kiritilgan. Uning noyob mozaikalari, kashtakor gumbazdari va muhtasham minaralari butun dunyodan sayyohlarni o'ziga jalb qiladi.`,
      },
      {
        id: "shohizinda",
        name: "Shohizinda",
        image: "/images/shohizinda.jpg",
        year: "XI-XV asr",
        shortDescription: "Tiriklar shohi - muqaddas maqbaralar majmuasi",
        fullDescription: `Shohizinda - "Tirik shoh" degan ma'noni anglatuvchi muqaddas maqbaralar majmuasi. Bu joy Samarqandning shimoli-sharqiy qismida joylashgan va XI-XV asrlarga oid 11 dan ortiq maqbarani o'z ichiga oladi.

Rivoyatlarga ko'ra, bu yerda Payg'ambarimiz Muhammad (s.a.v.)ning amakivachchasi Qusam ibn Abbas dafn etilgan. Shu sababli bu joy musulmonlar uchun muqaddas ziyoratgoh hisoblanadi.

Shohizinda o'zining noyob ko'k kafel mozaikalari, murakkab naqshlari va nafis me'morchiligi bilan mashhur. Bu joy O'zbekistondagi eng go'zal tarixiy majmualardan biri sifatida tan olingan.`,
      },
      {
        id: "ulugbek-rasadxonasi",
        name: "Ulug'bek rasadxonasi",
        image: "/images/ulugbek-rasadxonasi.jpg",
        year: "XV asr",
        shortDescription: "O'rta asrlarning eng buyuk astronomik observatoriyasi",
        fullDescription: `Ulug'bek rasadxonasi - 1424-1429 yillarda Temuriylar sulolasining buyuk olimi va hukmdori Mirzo Ulug'bek tomonidan qurilgan astronomik observatoriya.

Bu rasadxona o'z davrining eng katta va eng aniq astronomik asboblariga ega bo'lgan. Asosiy asbob - radiusi 40 metr bo'lgan ulkan sektant orqali osmon jismlarini kuzatish amalga oshirilgan.

Ulug'bek va uning shogirdlari bu yerda 1018 yulduzni o'z ichiga olgan "Ziji jadidi Ko'ragoniy" (Yangi Ko'ragon jadvallari) asarini yaratdilar. Bu asar asrlar davomida astronomiya fanining eng aniq manbasi bo'lib kelgan.`,
      },
    ],
  },
  {
    id: "buxoro",
    name: "Buxoro viloyati",
    image: "/images/buxoro-region.jpg",
    places: [
      {
        id: "ark",
        name: "Ark qal'asi",
        image: "/images/ark-qalasi.jpg",
        year: "V asr",
        shortDescription: "Qadimiy Buxoro amirlari qarorgohi",
        fullDescription: `Ark qal'asi - Buxoroning eng qadimiy va muhim me'moriy yodgorligi. Bu qal'a miloddan avvalgi V asrda qurilgan va 2000 yildan ortiq vaqt davomida Buxoro hukmdorlarining qarorgohi bo'lib kelgan.

Qal'a 4 gektar maydonda joylashgan va atrofida baland mudofaa devorlari mavjud. Ichkarida amir saroyi, masjid, xazina, zindon va boshqa inshootlar joylashgan.

1920-yilgacha Ark Buxoro amirligining siyosiy markazi bo'lgan. Hozirda qal'a muzey sifatida faoliyat yuritadi va Buxoroning boy tarixini namoyish etadi.`,
      },
      {
        id: "kalon",
        name: "Kalon minorasi",
        image: "/images/kalon-minorasi.jpg",
        year: "XII asr",
        shortDescription: "Sharqning eng baland va go'zal minorasilaridan biri",
        fullDescription: `Kalon minorasi - 1127-yilda Qoraxoniylar sulolasi davrida qurilgan ulug'vor minora. Balandligi 46.5 metr bo'lib, o'z davrida Markaziy Osiyodagi eng baland inshoot bo'lgan.

Minora g'ishtdan qurilgan va 14 ta turli naqsh bilan bezatilgan. Uning mustahkamligi shunchalik yuqori bo'lganki, hatto Chingizxon lashkarlari ham uni buzishga jur'at etmagan.

Kalon minorasi Buxoroning ramzi sifatida tanilgan va "Buyuk minora" degan nomga loyiq. U atrofida joylashgan Kalon masjidi va Mir Arab madrasasi bilan birga noyob me'moriy ansamblni tashkil etadi.`,
      },
      {
        id: "ismoil-somoniy",
        name: "Ismoil Somoniy maqbarasi",
        image: "/images/ismoil-somoniy.jpg",
        year: "IX-X asr",
        shortDescription: "Markaziy Osiyodagi eng qadimiy g'isht me'morchiligi namunasi",
        fullDescription: `Ismoil Somoniy maqbarasi - IX-X asrlarga oid bo'lib, Markaziy Osiyoda saqlanib qolgan eng qadimiy islom me'morchiligi namunalaridan biri. Bu maqbara Somoniylar sulolasining asoschisi Ismoil Somoniy sharafiga qurilgan.

Maqbara butunlay g'ishtdan qurilgan va uning noyob jihati - turli usullarda terilgan g'ishtlar kunning turli vaqtlarida har xil soyalar hosil qiladi, bu esa binoga tirik ko'rinish beradi.

Maqbara kub shaklidagi bo'lib, ustida yarim sharsimon gumbaz joylashgan. Uning sodda, ammo mukammal proportsiyalari uni o'rta asrlar me'morchiligining durdonasiga aylantiradi.`,
      },
    ],
  },
  {
    id: "xorazm",
    name: "Xorazm viloyati",
    image: "/images/xorazm-region.jpg",
    places: [
      {
        id: "ichanqala",
        name: "Ichan Qal'a",
        image: "/images/ichan-qala.jpg",
        year: "X asr",
        shortDescription: "UNESCO jahon merosi ro'yxatidagi ichki shahar",
        fullDescription: `Ichan Qal'a - Xiva shahrining qadimiy ichki qismi bo'lib, atrofida baland devorlar bilan o'ralgan. Bu joy X asrdan boshlab shakllana boshlagan va XVIII-XIX asrlarda hozirgi ko'rinishini olgan.

Ichan Qal'a 26 gektar maydonda joylashgan va 60 dan ortiq me'moriy yodgorlikni o'z ichiga oladi. Bu yerda saroylar, masjidlar, madrasalar, maqbaralar va an'anaviy uy-joylar saqlanib qolgan.

1990-yilda Ichan Qal'a UNESCO jahon merosi ro'yxatiga kiritilgan birinchi O'zbekiston yodgorligi bo'ldi. Bu joy "ochiq osmon ostidagi muzey" deb ataladi.`,
      },
      {
        id: "kaltaminor",
        name: "Kalta Minor",
        image: "/images/kalta-minor.jpg",
        year: "XIX asr",
        shortDescription: "Tugallanmagan ko'k minora - Xiva ramzi",
        fullDescription: `Kalta Minor - "Kalta" so'zi "kalta" yoki "qisqa" degan ma'noni anglatadi. Bu minora 1851-1855 yillarda Muhammad Aminxon tomonidan qurdirila boshlagan, ammo uning o'limi tufayli tugallanmay qolgan.

Agar minora tugallanganda, uning balandligi 80 metrga yetishi va Markaziy Osiyodagi eng baland minora bo'lishi rejalashtirilgan edi. Hozirgi balandligi 29 metr.

Minora butunlay ko'k va yashil rangli kafel bilan qoplangan bo'lib, bu uni Xivadagi boshqa minoralradan ajratib turadi. Kalta Minor Xivaning eng taniqli ramzi hisoblanadi.`,
      },
    ],
  },
  {
    id: "qashqadaryo",
    name: "Qashqadaryo viloyati",
    image: "/images/qashqadaryo-region.jpg",
    places: [
      {
        id: "oqsaroy",
        name: "Oq Saroy",
        image: "/images/oq-saroy.jpg",
        year: "XIV asr",
        shortDescription: "Amir Temur saroyining ulug'vor xarobasi",
        fullDescription: `Oq Saroy - Shahrisabz shahrida joylashgan Amir Temurning yozgi saroyi. Bu saroy 1380-1404 yillarda qurilgan va o'z davrining eng ulug'vor inshootlaridan biri bo'lgan.

Saroy darvozasining balandligi 38 metr bo'lib, ustida "Agar kuchimizga shubha qilsangiz, binolarimizga qarang" degan yozuv bitilgan. Hozirda faqat darvoza va devor qoldiqlari saqlanib qolgan.

Oq Saroy Temuriylar me'morchiligining eng yorqin namunalaridan biri sifatida 2000-yilda UNESCO jahon merosi ro'yxatiga kiritilgan.`,
      },
      {
        id: "dorussaodat",
        name: "Dorus Saodat",
        image: "/images/dorut-saodat.jpg",
        year: "XIV asr",
        shortDescription: "Amir Temur farzandlari maqbarasi",
        fullDescription: `Dorus Saodat - "Hokimiyat uyi" degan ma'noni anglatuvchi me'moriy majmua. Bu joy 1380-yillarda Amir Temur tomonidan o'z farzandlari uchun maqbara sifatida qurilgan.

Majmuada Temurning sevimli o'g'li Jahongir Mirzo va boshqa oila a'zolari dafn etilgan. Aslida bu yerga Temurning o'zi ham dafn etilishi rejalashtirilgan edi.

Dorus Saodat o'zining nafis kashtakorligi va noyob me'moriy yechimi bilan ajralib turadi. Majmua Shahrisabzning muhim ziyoratgohlaridan biri hisoblanadi.`,
      },
    ],
  },
  {
    id: "toshkent",
    name: "Toshkent shahri",
    image: "/images/toshkent-region.jpg",
    places: [
      {
        id: "xastimom",
        name: "Xast Imom majmuasi",
        image: "/images/xast-imom.jpg",
        year: "XVI asr",
        shortDescription: "Toshkentning diniy markazi va Usmon Qur'oni saqlangan joy",
        fullDescription: `Xast Imom majmuasi - Toshkentning eng muhim diniy va tarixiy markazi. Bu joy XVI asrda shakllana boshlagan va bir nechta masjid, madrasa va maqbaralarni o'z ichiga oladi.

Majmuaning eng muhim boylig - bu yerda saqlanayotgan "Usmon Qur'oni". Bu VII asrga oid qadimiy Qur'on nusxasi bo'lib, xalifa Usmon davrida yozilgan deb hisoblanadi.

Xast Imom majmuasi hozirda O'zbekiston Musulmonlar idorasi bosh qarorgohi sifatida faoliyat yuritadi va minglab ziyoratchilarni o'ziga jalb qiladi.`,
      },
      {
        id: "kukaldosh",
        name: "Ko'kaldosh madrasasi",
        image: "/images/kukaldosh.jpg",
        year: "XVI asr",
        shortDescription: "Markaziy Osiyodagi eng katta madrasalardan biri",
        fullDescription: `Ko'kaldosh madrasasi - 1570-yillarda Shayboniylar sulolasi davrida qurilgan ulkan ta'lim muassasasi. Bu madrasa Markaziy Osiyodagi eng katta madrasalardan biri bo'lib, 38 ta hujraga ega.

Madrasa nomi "sut aka" degan ma'noni anglatadi, chunki uni Toshkent hokimi Ko'kaldosh devonbegi qurdirgan. U o'z davrida ilm-fan markazi sifatida faoliyat yuritgan.

XX asrda madrasa turli maqsadlarda ishlatilgan, ammo hozirda ta'mirlanib, o'zining asl ko'rinishiga qaytarilgan va diniy ta'lim markazi sifatida faoliyat yuritmoqda.`,
      },
    ],
  },
  {
    id: "fargona",
    name: "Farg'ona viloyati",
    image: "/images/fargona-region.jpg",
    places: [
      {
        id: "quva",
        name: "Quva shahri xarobasi",
        image: "/images/quva.jpg",
        year: "III-VIII asr",
        shortDescription: "Qadimiy Farg'ona poytaxti va buddist ma'badi",
        fullDescription: `Quva - qadimiy Farg'ona vodiysi poytaxtlaridan biri. Bu shahar III-VIII asrlarda gullab-yashnagan va Buyuk Ipak yo'lining muhim nuqtasi bo'lgan.

Arxeologik qazishmalarda bu yerdan yirik buddist ma'badi va 12 metr balandlikdagi Budda haykali qoldiqlari topilgan. Bu Markaziy Osiyodagi eng katta buddist yodgorliklaridan biri.

Quva shuningdek, buyuk matematik va astronom al-Farg'oniyning tug'ilgan shahri sifatida ham mashhur. Uning nomi bilan bog'liq tarixiy joylar hamon saqlanib qolgan.`,
      },
      {
        id: "axsikent",
        name: "Axsikent",
        image: "/images/axsikent.jpg",
        year: "III-XIII asr",
        shortDescription: "Qadimiy Farg'ona davlati poytaxti",
        fullDescription: `Axsikent - III-XIII asrlarda mavjud bo'lgan qadimiy shahar va Farg'ona davlatining bir necha asr davomida poytaxti. Bu joy hozirgi Namangan viloyatining Poytug' tumanida joylashgan.

Shahar o'z davrida hunarmandchilik markazi sifatida mashhur bo'lgan, ayniqsa temirchilik va qurolsozlik rivojlangan. Arxeologik qazishmalar natijasida ko'plab qimmatbaho topilmalar aniqlangan.

1219-1220 yillarda mo'g'ullar bosqini natijasida Axsikent vayronaga aylangan. Hozirda bu yerda arxeologik tadqiqotlar davom etmoqda.`,
      },
    ],
  },
  {
    id: "namangan",
    name: "Namangan viloyati",
    image: "/images/namangan-region.jpg",
    places: [
      {
        id: "mulla-kirgiz",
        name: "Mulla Qirg'iz madrasasi",
        image: "/images/mulla-kirgiz.jpg",
        year: "XVIII asr",
        shortDescription: "Namangandagi eng qadimiy me'moriy yodgorlik",
        fullDescription: `Mulla Qirg'iz madrasasi - 1912-1914 yillarda mahalliy savdogar Mulla Qirg'iz tomonidan qurilgan ta'lim maskani. Bu Namangan shahridagi eng mashhur tarixiy yodgorliklardan biri.

Madrasa an'anaviy O'rta Osiyo me'morchiligi uslubida qurilgan, ammo ba'zi yevropa ta'sirlari ham seziladi. Bino g'ishtdan qurilgan va chiroyli kashtakorlik bilan bezatilgan.

Hozirda madrasa faol diniy ta'lim maskani sifatida faoliyat yuritmoqda va Namangan shahrining muhim me'moriy boyliklaridan biri hisoblanadi.`,
      },
    ],
  },
  {
    id: "andijon",
    name: "Andijon viloyati",
    image: "/images/andijon-region.jpg",
    places: [
      {
        id: "jome-masjidi",
        name: "Jome masjidi",
        image: "/images/jome-masjidi.jpg",
        year: "XIX asr",
        shortDescription: "Andijon shahrining bosh masjidi",
        fullDescription: `Andijon Jome masjidi - XIX asrning ikkinchi yarmida qurilgan Andijon shahrining bosh masjidi. Bu masjid Farg'ona vodiysidagi eng katta masjidlardan biri hisoblanadi.

Masjid an'anaviy O'rta Osiyo me'morchiligi uslubida qurilgan va keng hovlisi, minarasi hamda namazgoh zallariga ega. Bino bir necha marta ta'mirlanib, kengaytirilgan.

Masjid hozirda ham faol bo'lib, juma namozlarida minglab musulmonlarni jamlaydi. U Andijon shahrining muhim diniy va me'moriy yodgorligi sifatida qadrlanadi.`,
      },
      {
        id: "bobur-bog",
        name: "Bobur bog'i",
        image: "/images/bobur-bogi.jpg",
        year: "XV asr",
        shortDescription: "Zahiriddin Muhammad Boburning tug'ilgan joyi",
        fullDescription: `Bobur bog'i - buyuk shoir, davlat arbobi va Mo'g'ullar imperiyasining asoschisi Zahiriddin Muhammad Bobur sharafiga yaratilgan memorial majmua.

Bobur 1483-yilda Andijonda tug'ilgan va bu yerda bolalik yillarini o'tkazgan. Uning "Boburnoma" asarida Andijon va uning atrofidagi joylar haqida ko'plab ma'lumotlar keltirilgan.

Hozirgi bog' 1993-yilda Bobur tavalludining 510 yilligi munosabati bilan qayta tiklanib, memorial muzey, haykallar va bog'-park majmuasini o'z ichiga oladi.`,
      },
    ],
  },
  {
    id: "jizzax",
    name: "Jizzax viloyati",
    image: "/images/jizzax-region.jpg",
    places: [
      {
        id: "zominqalasi",
        name: "Zomin qal'asi",
        image: "/images/zomin-qalasi.jpg",
        year: "VI-VII asr",
        shortDescription: "Qadimiy mudofaa qal'asi",
        fullDescription: `Zomin qal'asi - Jizzax viloyatining Zomin tumanida joylashgan qadimiy mudofaa istehkomi. Bu qal'a VI-VII asrlarga oid bo'lib, o'z davrida muhim strategik ahamiyatga ega bo'lgan.

Qal'a tog' etagida qurilgan va tabiat bilan uyg'un holda joylashgan. Uning mustahkam devorlari va minoralari ko'p asrlar davomida turli bosqinchilardan himoya qilgan.

Hozirda qal'aning ayrim qismlari saqlanib qolgan va arxeologik tadqiqotlar davom etmoqda. Bu joy Jizzax viloyatining muhim tarixiy yodgorliklaridan biri hisoblanadi.`,
      },
    ],
  },
  {
    id: "sirdaryo",
    name: "Sirdaryo viloyati",
    image: "/images/sirdaryo-region.jpg",
    places: [
      {
        id: "oqtoshtepa",
        name: "Oqtosh tepa",
        image: "/images/oqtosh-tepa.jpg",
        year: "I-VII asr",
        shortDescription: "Qadimiy shahar xarobalari",
        fullDescription: `Oqtosh tepa - Sirdaryo viloyatida joylashgan qadimiy shahar xarobalari. Bu arxeologik yodgorlik I-VII asrlarga oid bo'lib, Buyuk Ipak yo'lining muhim punkti bo'lgan.

Qazishmalar natijasida shahar qoldiqlari, hunarmandchilik ustaxonalari, turar-joy binolari va turli xil buyumlar topilgan. Bu topilmalar mintaqaning qadimiy tarixini yoritishda muhim ahamiyatga ega.

Hozirda Oqtosh tepa arxeologik tadqiqot olib borilayotgan joy bo'lib, ko'plab olimlar bu yerda ilmiy izlanishlar olib bormoqda.`,
      },
    ],
  },
  {
    id: "qoraqalpogiston",
    name: "Qoraqalpog'iston Respublikasi",
    image: "/images/qoraqalpogiston-region.jpg",
    places: [
      {
        id: "mizdahon",
        name: "Mizdahon",
        image: "/images/mizdahon.jpg",
        year: "IV asr m.a. - XIV asr",
        shortDescription: "Qadimiy nekropolis va ziyoratgoh",
        fullDescription: `Mizdahon - Nukus shahridan 40 km uzoqlikda joylashgan qadimiy nekropolis (qabristoni). Bu joy miloddan avvalgi IV asrdan to XIV asrgacha turli davrlar maqbaralarini o'z ichiga oladi.

Nekropolisning eng mashhur joyi - "Mozor slaym" yoki "Eramiz slaym" deb ataluvchi mozor. Rivoyatlarga ko'ra, bu yerda qiyomat kuni birinchi bo'lib tiriluvchi kishi yotadi.

Mizdahon nafaqat musulmonlar, balki zardushtiylar, xristianlar va boshqa dinlar vakillari uchun ham muqaddas joy bo'lgan. Hozirda bu joy ommabop ziyoratgoh hisoblanadi.`,
      },
      {
        id: "topiroqqala",
        name: "Topiroq qal'a",
        image: "/images/topiroq-qala.jpg",
        year: "I-VI asr",
        shortDescription: "Qadimiy Xorazm qal'a-shahri",
        fullDescription: `Topiroq qal'a - I-VI asrlarga oid qadimiy Xorazm qal'a-shahri. Bu yodgorlik o'z davrida Xorazm hukmdorlarining qarorgohi va muhim mudofaa istehkomi bo'lgan.

Qal'a to'rtburchak shakilda bo'lib, balandligi 25 metrgacha yetgan. Ichkarida saroy, ma'bad, zal va boshqa inshootlar joylashgan. Arxeologik qazishmalar natijasida ko'plab qimmatbaho san'at asarlari topilgan.

Topiroq qal'adan topilgan devoriy suratlar va haykallar Xorazm san'atining noyob namunalari bo'lib, hozirda Toshkent va Moskva muzeylarida saqlanmoqda.`,
      },
      {
        id: "ayazkala",
        name: "Ayoz qal'a",
        image: "/images/ayoz-qala.jpg",
        year: "IV-VII asr",
        shortDescription: "Cho'l qoyasidagi qal'alar majmuasi",
        fullDescription: `Ayoz qal'a - Qizilqum cho'lidagi qoya tepasida joylashgan uchta qal'adan iborat majmua. Bu qal'alar IV-VII asrlarga oid bo'lib, qadimiy Xorazm mudofaa tizimining bir qismi bo'lgan.

Eng qadimiy va katta qal'a tepalik ustida joylashgan va butun atrofni kuzatish imkonini bergan. Pastda ikkinchi va uchinchi qal'alar joylashgan.

Ayoz qal'a hozirda ekoturizm markazi sifatida ham rivojlanmoqda. Bu yerda an'anaviy o'tovlar o'rnatilib, sayyohlarga qadimiy Xorazm hayotini his qilish imkoniyati beriladi.`,
      },
    ],
  },
]

export function getRegionById(id: string): Region | undefined {
  return regions.find((region) => region.id === id)
}

export function getPlaceById(regionId: string, placeId: string): AncientPlace | undefined {
  const region = getRegionById(regionId)
  return region?.places.find((place) => place.id === placeId)
}
