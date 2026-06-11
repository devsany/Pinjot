import { FaSearch, FaQuestionCircle } from "react-icons/fa";
import Navbar from "../component/Navbar";

export default function HelpCenter() {
  const categories = [
    {
      title: "Getting Started",
      description: "Learn how to create and set up your profile.",
    },
    {
      title: "Account & Profile",
      description: "Manage your account settings and profile information.",
    },
    {
      title: "Links & Customization",
      description: "Add, edit, and customize your links.",
    },
    {
      title: "Security",
      description: "Keep your account safe and secure.",
    },
    {
      title: "Troubleshooting",
      description: "Fix common issues quickly.",
    },
    {
      title: "Billing",
      description: "Information about plans and payments.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <Navbar />
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h1 className="text-5xl font-bold">
            Help <span className="text-violet-400">Center</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Find answers, guides, and support resources to help you get the most
            out of LinkBio.
          </p>

          <div className="mx-auto mt-10 flex max-w-2xl items-center rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4">
            <FaSearch className="mr-3 text-slate-500" />
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full bg-transparent outline-none placeholder:text-slate-500"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-10 text-3xl font-bold">Browse by Category</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <div
              key={index}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:border-violet-500"
            >
              <FaQuestionCircle className="mb-4 text-3xl text-violet-400" />

              <h3 className="text-xl font-semibold">{category.title}</h3>

              <p className="mt-2 text-slate-400">{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Articles */}
      <section className="border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="mb-10 text-3xl font-bold">Popular Articles</h2>

          <div className="space-y-4">
            {[
              "How to create your first profile",
              "How to upload a profile picture",
              "How to add social media links",
              "How to customize your page",
              "How to reset your password",
            ].map((article, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:border-violet-500"
              >
                <a
                  href="#"
                  className="font-medium text-slate-200 hover:text-violet-400"
                >
                  {article}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="border-t border-slate-800">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-4xl font-bold">Still Need Help?</h2>

          <p className="mt-4 text-slate-400">
            Can't find what you're looking for? Our support team is here to
            help.
          </p>

          <button className="mt-8 rounded-xl bg-violet-600 px-8 py-4 font-semibold transition hover:bg-violet-700">
            Contact Support
          </button>
        </div>
      </section>
    </div>
  );
}
