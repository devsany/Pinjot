import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            Contact Us
          </span>

          <h1 className="mt-6 text-5xl font-bold md:text-6xl">
            We'd Love To
            <span className="text-violet-400"> Hear From You</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Have questions, feedback, or need support? Reach out to us and we'll
            get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left Side */}
          <div>
            <h2 className="text-3xl font-bold">Get In Touch</h2>

            <p className="mt-4 text-slate-400">
              Whether you have a question about features, pricing, partnerships,
              or anything else, our team is ready to answer all your questions.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-5">
                <div className="rounded-xl bg-violet-500/20 p-3 text-violet-400">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-slate-400">support@linkbio.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-5">
                <div className="rounded-xl bg-violet-500/20 p-3 text-violet-400">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-slate-400">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-5">
                <div className="rounded-xl bg-violet-500/20 p-3 text-violet-400">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-slate-400">Ranchi, Jharkhand, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="mb-6 text-2xl font-bold">Send a Message</h2>

            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-violet-500"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-4 font-semibold transition hover:bg-violet-700"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-slate-800">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-4xl font-bold">Need Immediate Help?</h2>

          <p className="mt-4 text-slate-400">
            Visit our Help Center or Documentation for quick answers and guides.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="rounded-xl bg-violet-600 px-6 py-3 font-semibold hover:bg-violet-700">
              Help Center
            </button>

            <button className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-violet-500">
              Documentation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
