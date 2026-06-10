const Main = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-violet-600/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="max-w-3xl">
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-slate-700">
            🚀 Build Your Online Presence
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-700 md:text-7xl">
            Create Your
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              Link In Bio
            </span>
            <br />
            In Minutes
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-400">
            Showcase all your social profiles, projects, and content in one
            beautiful page. Simple, fast, and fully customizable.
          </p>

          {/* <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-xl bg-violet-600 px-8 py-4 font-semibold text-white transition hover:bg-violet-700">
              Get Started
            </button>

            <button className="rounded-xl border border-slate-700 px-8 py-4 font-semibold text-slate-300 transition hover:border-slate-500">
              View Demo
            </button>
          </div> */}
 
        </div>
      </div>
    </section>
  );
};

export default Main;
