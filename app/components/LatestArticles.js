import Image from "next/image"

export default function LatestArticles() {
  return (
    <section className="container py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
          <div className="grid gap-6">
            {[1, 2, 3, 4].map((i) => (
              <article
                key={i}
                className="flex flex-col md:flex-row gap-6 border rounded-lg p-4 hover:shadow-lg transition-shadow"
              >
                <Image
                  src={`/placeholder.svg?height=200&width=300&text=Article${i}`}
                  alt={`Article ${i}`}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover md:w-48 md:h-32"
                />
                <div className="flex-1">
                  <span className="text-sm text-primary">Technology</span>
                  <h3 className="text-xl font-bold mb-2">The Rise of Sustainable Technology</h3>
                  <p className="text-muted-foreground mb-4">
                    How green technology is revolutionizing the tech industry and helping combat climate change.
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <span>Jane Smith</span>
                    <span>Jan {10 + i}, 2024</span>
                    <span>4 min read</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}