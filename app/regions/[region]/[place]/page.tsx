import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Home, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getRegionById, getPlaceById } from "@/lib/data"

interface PlacePageProps {
  params: Promise<{ region: string; place: string }>
}

export default async function PlacePage({ params }: PlacePageProps) {
  const { region: regionId, place: placeId } = await params
  const region = getRegionById(regionId)
  const place = getPlaceById(regionId, placeId)

  if (!region || !place) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href={`/regions/${regionId}`}>
              <Button variant="ghost" className="gap-2">
                <ArrowLeft size={18} />
                Orqaga qaytish
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="gap-2 bg-transparent">
                <Home size={18} />
                Bosh sahifa
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <section className="relative h-[400px] md:h-[500px]">
        <Image src={place.image || "/placeholder.svg"} alt={place.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="flex items-center gap-2 text-background/80 bg-primary/80 px-3 py-1 rounded-full text-sm">
                <MapPin size={14} />
                {region.name}
              </span>
              <span className="flex items-center gap-2 text-background/80 bg-foreground/50 px-3 py-1 rounded-full text-sm">
                <Calendar size={14} />
                {place.year}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background">{place.name}</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Short Description */}
            <div className="bg-primary/10 rounded-xl p-6 mb-8">
              <p className="text-xl text-foreground font-medium">{place.shortDescription}</p>
            </div>

            {/* Full Description */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-foreground mb-6">Batafsil ma'lumot</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {place.fullDescription.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link href={`/regions/${regionId}`} className="flex-1">
                <Button variant="outline" size="lg" className="w-full gap-2 bg-transparent">
                  <ArrowLeft size={18} />
                  {region.name}ga qaytish
                </Button>
              </Link>
              <Link href="/regions" className="flex-1">
                <Button size="lg" className="w-full gap-2">
                  <MapPin size={18} />
                  Boshqa viloyatlarni ko'rish
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
