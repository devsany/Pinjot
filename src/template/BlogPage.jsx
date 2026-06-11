import Navbar from "../component/Navbar";

const blogs = [
  {
    id: 1,
    title: "How to Build a Strong Online Presence",
    description:
      "Learn the essential steps to grow your audience and build your personal brand online.",
    category: "Marketing",
    date: "June 10, 2026",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
  },
  {
    id: 2,
    title: "5 Tips to Optimize Your Link-in-Bio Page",
    description:
      "Simple improvements that can significantly increase clicks and engagement.",
    category: "Growth",
    date: "June 8, 2026",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",
  },
  {
    id: 3,
    title: "Why Every Creator Needs a Personal Landing Page",
    description:
      "Discover how a dedicated landing page helps creators convert visitors into followers.",
    category: "Creator Economy",
    date: "June 5, 2026",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <Navbar />
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            Blog
          </span>

          <h1 className="mt-6 text-5xl font-bold md:text-6xl">
            Insights, Tips &
            <span className="text-violet-400"> Resources</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Stay updated with the latest trends, strategies, and best practices
            for creators, freelancers, and businesses.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
          <img
            src={blogs[0].image}
            alt={blogs[0].title}
            className="h-80 w-full object-cover"
          />

          <div className="p-8">
            <span className="rounded-full bg-violet-500/20 px-3 py-1 text-sm text-violet-300">
              Featured Post
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              {blogs[0].title}
            </h2>

            <p className="mt-4 text-slate-400">
              {blogs[0].description}
            </p>

            <button className="mt-6 rounded-xl bg-violet-600 px-6 py-3 font-medium transition hover:bg-violet-700">
              Read Article
            </button>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="mb-10 text-3xl font-bold">
          Latest Articles
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition hover:-translate-y-2 hover:border-violet-500"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs text-violet-300">
                    {blog.category}
                  </span>

                  <span className="text-sm text-slate-500">
                    {blog.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold">
                  {blog.title}
                </h3>

                <p className="mt-3 text-slate-400">
                  {blog.description}
                </p>

                <button className="mt-5 text-violet-400 hover:text-violet-300">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-slate-800">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="text-4xl font-bold">
            Subscribe to Our Newsletter
          </h2>

          <p className="mt-4 text-slate-400">
            Get the latest articles, updates, and growth tips delivered to your
            inbox.
          </p>

          <div className="mx-auto mt-8 flex max-w-xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 outline-none focus:border-violet-500"
            />

            <button className="rounded-xl bg-violet-600 px-6 py-3 font-semibold transition hover:bg-violet-700">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}