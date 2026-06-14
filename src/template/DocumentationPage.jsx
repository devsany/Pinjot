import Navbar from "../component/Navbar";
import SEO from "../SEO/SEO";

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <SEO name="PinJot - Documentation. Learn how to create your profile, add links, customize your page, and share it with the world. Get step-by-step guides and answers to frequently asked questions about using PinJot effectively." content="Learn how to create your profile, add links, customize your page, and share it with the world." />
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Header */}
        <div className="mb-16">
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            Documentation
          </span>

          <h1 className="mt-6 text-5xl font-bold">
            Getting Started with
            <span className="text-violet-400"> LinkBio</span>
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-slate-400">
            Learn how to create your profile, add links, customize your page,
            and share it with the world.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          {/* Sidebar */}
          <aside className="h-fit rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="mb-4 font-semibold text-white">Contents</h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#overview" className="hover:text-violet-400">
                  Overview
                </a>
              </li>

              <li>
                <a href="#create-profile" className="hover:text-violet-400">
                  Create Profile
                </a>
              </li>

              <li>
                <a href="#add-links" className="hover:text-violet-400">
                  Add Links
                </a>
              </li>

              <li>
                <a href="#customize" className="hover:text-violet-400">
                  Customize Page
                </a>
              </li>

              <li>
                <a href="#share" className="hover:text-violet-400">
                  Share Profile
                </a>
              </li>

              <li>
                <a href="#faq" className="hover:text-violet-400">
                  FAQ
                </a>
              </li>
            </ul>
          </aside>

          {/* Content */}
          <main className="space-y-12">
            <section
              id="overview"
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8"
            >
              <h2 className="mb-4 text-3xl font-bold">Overview</h2>

              <p className="text-slate-400">
                LinkBio allows you to combine all your important links into one
                beautiful page. Share your Instagram, YouTube, Portfolio,
                GitHub, and more with a single URL.
              </p>
            </section>

            <section
              id="create-profile"
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8"
            >
              <h2 className="mb-4 text-3xl font-bold">Create Your Profile</h2>

              <ol className="list-decimal space-y-3 pl-5 text-slate-400">
                <li>Create an account.</li>
                <li>Upload your profile image.</li>
                <li>Add your name and bio.</li>
                <li>Choose a unique username.</li>
              </ol>
            </section>

            <section
              id="add-links"
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8"
            >
              <h2 className="mb-4 text-3xl font-bold">Add Links</h2>

              <p className="mb-4 text-slate-400">
                Add unlimited links to your profile.
              </p>

              <div className="rounded-xl bg-slate-950 p-4 font-mono text-sm text-violet-300">
                Instagram → https://instagram.com/yourname
                <br />
                GitHub → https://github.com/yourname
                <br />
                Portfolio → https://yourportfolio.com
              </div>
            </section>

            <section
              id="customize"
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8"
            >
              <h2 className="mb-4 text-3xl font-bold">Customize Your Page</h2>

              <ul className="list-disc space-y-2 pl-5 text-slate-400">
                <li>Change profile picture</li>
                <li>Edit bio and username</li>
                <li>Choose colors and themes</li>
                <li>Reorder links with drag & drop</li>
              </ul>
            </section>

            <section
              id="share"
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8"
            >
              <h2 className="mb-4 text-3xl font-bold">Share Your Profile</h2>

              <p className="text-slate-400">
                Once published, your page gets a unique URL that you can share
                on social media, email signatures, YouTube descriptions, and
                anywhere else.
              </p>
            </section>

            <section
              id="faq"
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8"
            >
              <h2 className="mb-4 text-3xl font-bold">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Is LinkBio free?</h4>
                  <p className="text-slate-400">
                    Yes, basic features are free to use.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Can I update my links later?
                  </h4>
                  <p className="text-slate-400">
                    Yes, you can edit your profile anytime.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Is there a limit on links?</h4>
                  <p className="text-slate-400">
                    No, you can add as many links as you need.
                  </p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
