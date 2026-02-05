import Image from "next/image"

const galleryImages = [
  {
    src: "/ancient-bibi-khanym-mosque-samarkand-architectural.jpg",
    alt: "Bibi Xonim masjidi",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/kalyan-minaret-bukhara-ancient-tower.jpg",
    alt: "Kalon minorasi",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/ancient-lyabi-hauz-bukhara-pool-plaza.jpg",
    alt: "Labi Hovuz",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/gur-e-amir-mausoleum-samarkand-tamerlane-tomb.jpg",
    alt: "Go'ri Amir maqbarasi",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/ancient-chor-minor-bukhara-four-minarets.jpg",
    alt: "Chor Minor",
    span: "col-span-1 row-span-1",
  },
]

export function Gallery() {
  return (
    <section id="galereya" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">Galereya</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">Tarixiy Tasvirlar</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <div key={index} className={`${image.span} relative rounded-lg overflow-hidden group cursor-pointer`}>
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-background font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
