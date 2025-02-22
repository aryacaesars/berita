import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="container py-8 md:py-12">
      <div className="relative overflow-hidden rounded-lg">
        <div className="relative aspect-[2/1] md:aspect-[3/1]">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Featured article"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
          <span className="mb-2 inline-block rounded bg-primary px-2 py-1 text-sm">Featured</span>
          <h1 className="mb-2 text-2xl font-bold md:text-4xl">The Future of Artificial Intelligence in 2024</h1>
          <p className="mb-4 max-w-[600px] text-sm md:text-base">
            Explore how AI is transforming industries and shaping our future in unprecedented ways.
          </p>
          <div className="flex items-center gap-4">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Author"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-medium">John Doe</p>
              <p className="text-sm opacity-90">Jan 15, 2024 · 5 min read</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}