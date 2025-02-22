import Image from "next/image"

export default function Sidebar() {
  return (
    <aside className="md:w-1/3">
      <div className="sticky top-20">
        {/* Newsletter */}
        <div className="border rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold mb-4">Subscribe to Newsletter</h3>
          <p className="text-muted-foreground mb-4">Get the latest news and articles directly in your inbox.</p>
          <form className="space-y-4">
            <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border rounded-lg" />
            <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90">
              Subscribe
            </button>
          </form>
        </div>

        {/* Popular Posts */}
        <div>
          <h3 className="text-xl font-bold mb-4">Popular Posts</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <article key={i} className="flex gap-4">
                <Image
                  src={`/placeholder.svg?height=80&width=80&text=P${i}`}
                  alt={`Popular ${i}`}
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                />
                <div>
                  <h4 className="font-medium mb-1">Top Tech Trends to Watch in 2024</h4>
                  <p className="text-sm text-muted-foreground">Jan {5 + i}, 2024</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}