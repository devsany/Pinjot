const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Content Creator",
    image: "https://i.pravatar.cc/150?img=1",
    review:
      "This platform helped me organize all my social links in one place. The setup took less than 5 minutes!",
  },
  {
    name: "Priya Singh",
    role: "Freelancer",
    image: "https://i.pravatar.cc/150?img=5",
    review:
      "Beautiful UI and super easy to customize. My clients can now find everything from a single link.",
  },
  {
    name: "Amit Kumar",
    role: "YouTuber",
    image: "https://i.pravatar.cc/150?img=8",
    review:
      "I tried many bio tools, but this one is by far the fastest and most user-friendly.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-pink-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-950 md:text-5xl">
            Loved by Creators Worldwide
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Thousands of creators, freelancers, and businesses use our platform
            to showcase their online presence.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group rounded-3xl border shadow-2xl border-pink-100 bg-pink-100 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40"
            >
              <div className="mb-6 flex text-yellow-400">⭐⭐⭐⭐⭐</div>

              <p className="leading-relaxed text-slate-950">"{item.review}"</p>

              <div className="mt-8 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 rounded-full border-2 border-violet-500 object-cover"
                />

                <div>
                  <h4 className="font-semibold text-slate-950">{item.name}</h4>
                  <p className="text-sm text-slate-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
