import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Home, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getRegionById } from "@/lib/data"

interface RegionPageProps {
  params: Promise<{ region: string }>
}

export async function generateMetadata({ params }: RegionPageProps) {
  const { region: regionId } = await params
  const region = getRegionById(regionId)

  if (!region) {
    return {}
  }

  return {
    title: `${region.name} - Qadimiy joylar`,
    description: `${region.name}dagi qadimiy joylar va tarixiy yodgorliklar`,
  }
}

export default async function RegionPage({ params }: RegionPageProps) {
  const { region: regionId } = await params
  const region = getRegionById(regionId)

  if (!region) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/regions">
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

      {/* Hero */}
      <section className="relative h-[300px]">
        <Image src={region.image || "/placeholder.svg"} alt={region.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="mx-auto mb-4 text-background" size={40} />
            <h1 className="text-4xl md:text-5xl font-bold text-background">{region.name}</h1>
            <p className="text-background/80 mt-2">{region.places.length} ta qadimiy joy</p>
          </div>
        </div>
      </section>

      {/* Title */}
      <section className="bg-primary/10 py-8">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">{region.name}dagi qadimiy joylarni tanlang</h2>
        </div>
      </section>

      {/* Places Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {region.places.map((place) => (
              <div
                key={place.id}
                className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-xl group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={place.image || "/placeholder.svg"}
                    alt={place.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-background/80 text-sm mb-2">
                      <Calendar size={14} />
                      {place.year}
                    </div>
                    <h3 className="text-xl font-bold text-background">{place.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 line-clamp-2">{place.shortDescription}</p>
                  <Link href={`/regions/${regionId}/${place.id}`}>
                    <Button className="w-full">Batafsil ma'lumot</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
