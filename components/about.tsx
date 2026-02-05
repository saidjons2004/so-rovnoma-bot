import { Compass, BookOpen, Camera, Users } from "lucide-react"

const features = [
  {
    icon: Compass,
    title: "Sayohat yo'nalishlari",
    description: "Maxsus tanlangan marshrutlar orqali qadimiy joylarni kashf eting",
  },
  {
    icon: BookOpen,
    title: "Tarixiy ma'lumotlar",
    description: "Har bir joy haqida batafsil tarixiy va madaniy ma'lumotlar",
  },
  {
    icon: Camera,
    title: "Virtual turlar",
    description: "360° virtual turlar orqali joylarni uyingizdan tomosha qiling",
  },
  {
    icon: Users,
    title: "Gid xizmatlari",
    description: "Professional gidlar bilan unutilmas sayohat tajribasi",
  },
]

export function About() {
  return (
    <section id="haqida" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">Biz haqimizda</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6 text-balance">
              Tarixga Sayohat - Kelajakka Ilhom
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Biz O'zbekiston va butun dunyo bo'ylab qadimiy joylarni kashf qilish uchun eng yaxshi platformani taqdim
              etamiz. Har bir tosh, har bir minora, har bir ibodatxona o'z tarixini so'zlaydi.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Bizning maqsadimiz - ajdodlarimiz qoldirgan bebaho merosni keng ommaga tanishtirib, kelajak avlodlarga
              yetkazish.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <feature.icon className="text-primary mb-4" size={32} />
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "50+", label: "Qadimiy joylar" },
            { value: "1000+", label: "Sayohatchilar" },
            { value: "15+", label: "Viloyatlar" },
            { value: "4.9", label: "Reyting" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-muted-foreground text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
