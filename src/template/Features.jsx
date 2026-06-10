import {
  FaLink,
  FaPalette,
  FaMobileAlt,
  FaChartLine,
  FaBolt,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLink />,
    title: "Unlimited Links",
    description:
      "Add all your social media, portfolio, store, and important links in one place.",
  },
  {
    icon: <FaPalette />,
    title: "Custom Themes",
    description:
      "Personalize your page with beautiful themes, colors, and layouts.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Friendly",
    description: "Your profile looks amazing on phones, tablets, and desktops.",
  },
  {
    icon: <FaChartLine />,
    title: "Analytics",
    description: "Track clicks and understand which links perform best.",
  },
  {
    icon: <FaBolt />,
    title: "Lightning Fast",
    description:
      "Built for speed with instant loading and optimized performance.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure & Reliable",
    description: "Your data is protected with modern security practices.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            Features
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Everything You Need To
            <span className="text-violet-400"> Grow Online</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Powerful tools designed for creators, freelancers, businesses, and
            influencers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/50"
            >
              <div className="mb-6 inline-flex rounded-2xl bg-violet-500/10 p-4 text-3xl text-violet-400 transition group-hover:scale-110">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-white">{feature.title}</h3>

              <p className="mt-3 leading-relaxed text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl border border-slate-800 bg-gradient-to-r from-violet-900/30 to-cyan-900/30 p-10 text-center">
          <h3 className="text-3xl font-bold text-white">
            Ready to Create Your Link Page?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Join thousands of creators and businesses who use LinkBio to share
            everything with one powerful link.
          </p>

          <button className="mt-8 rounded-xl bg-violet-600 px-8 py-4 font-semibold text-white transition hover:bg-violet-700">
            Get Started Free
          </button>
        </div>
      </div>
    </section>
  );
}
