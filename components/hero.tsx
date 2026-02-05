import Link from "next/link"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/ancient-samarkand-registan-silk-road-architecture-.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="text-background/80 text-sm uppercase tracking-[0.3em] mb-6">Tarixni kashf eting</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-background mb-6 tracking-tight text-balance">
          Qadimiy
          <br />
          Joylar
        </h1>
        <p className="text-background/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Dunyoning eng ajoyib tarixiy yodgorliklarini kashf eting. Samarqand, Buxoro, Xiva va boshqa qadimiy
          shaharlarning sirlarini oching.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/regions">
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90 px-8">
              Kashf qilish
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="border-background text-background hover:bg-background/10 px-8 bg-transparent"
          >
            Batafsil
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-background/70" size={28} />
      </div>
    </section>
  )
}
