import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { regions } from "@/lib/data"

export default function RegionsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-6 py-6">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft size={18} />
              Bosh sahifa
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-6 text-center">
          <MapPin className="mx-auto mb-4 text-primary" size={48} />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Viloyatni tanlang</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            O'zbekistonning barcha viloyatlari va Qoraqalpog'iston Respublikasidagi qadimiy joylarni kashf eting
          </p>
        </div>
      </section>

      {/* Regions Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {regions.map((region) => {
              const imagePath =
                region.image && region.image.startsWith("/") ? region.image : `/images/${region.id}-region.jpg`

              return (
                <Link key={region.id} href={`/regions/${region.id}`} className="group">
                  <div className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-lg cursor-pointer">
                    <div className="relative aspect-video overflow-hidden bg-muted">
                      <Image
                        src={imagePath || "/placeholder.svg"}
                        alt={region.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg"
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="text-xs text-background/80 bg-primary/80 px-2 py-1 rounded">
                          {region.places?.length || 0} ta joy
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {region.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
