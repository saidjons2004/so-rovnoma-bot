"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Calendar, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const places = [
  {
    id: 1,
    name: "Registon Maydoni",
    location: "Samarqand, O'zbekiston",
    year: "XV-XVII asr",
    image: "/registan-square-samarkand-ancient-islamic-architec.jpg",
    description: "Markaziy Osiyo me'morchiligining eng yorqin namunasi",
  },
  {
    id: 2,
    name: "Ark Qal'asi",
    location: "Buxoro, O'zbekiston",
    year: "V asr",
    image: "/ark-fortress-bukhara-ancient-citadel-walls-sunset.jpg",
    description: "Qadimiy Buxoro amirlari qarorgohi",
  },
  {
    id: 3,
    name: "Ichan Qal'a",
    location: "Xiva, O'zbekiston",
    year: "X asr",
    image: "/itchan-kala-khiva-ancient-walled-inner-town-unesco.jpg",
    description: "UNESCO jahon merosi ro'yxatidagi ichki shahar",
  },
  {
    id: 4,
    name: "Shohizinda",
    location: "Samarqand, O'zbekiston",
    year: "XI-XV asr",
    image: "/shah-i-zinda-necropolis-samarkand-blue-domes-mauso.jpg",
    description: "Tiriklar shohi - muqaddas maqbaralar majmuasi",
  },
  {
    id: 5,
    name: "Fayoztepa",
    location: "Termiz, O'zbekiston",
    year: "I-III asr",
    image: "/ancient-buddhist-monastery-fayaztepa-termez-uzbeki.jpg",
    description: "Qadimiy buddist monastiri va O'zbekistondagi eng qadimiy shaharlardan biri",
  },
]

export function FeaturedPlaces() {
  const [activePlace, setActivePlace] = useState(places[0])

  return (
    <section id="joylar" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">Mashhur joylar</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">Tarixiy Yodgorliklar</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image Display */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src={activePlace.image || "/placeholder.svg"}
              alt={activePlace.name}
              fill
              className="object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl md:text-3xl font-bold text-background mb-2">{activePlace.name}</h3>
              <p className="text-background/80">{activePlace.description}</p>
            </div>
          </div>

          {/* Place List */}
          <div className="space-y-4">
            {places.map((place) => (
              <button
                key={place.id}
                onClick={() => setActivePlace(place)}
                className={cn(
                  "w-full text-left p-6 rounded-lg border transition-all duration-300",
                  activePlace.id === place.id
                    ? "bg-card border-primary shadow-lg"
                    : "bg-transparent border-border hover:border-primary/50",
                )}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">{place.name}</h4>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {place.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {place.year}
                      </span>
                    </div>
                  </div>
                  <ArrowRight
                    className={cn(
                      "text-primary transition-transform",
                      activePlace.id === place.id ? "translate-x-1" : "",
                    )}
                    size={20}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
