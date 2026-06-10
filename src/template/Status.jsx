import React from "react";

const Status = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-6 rounded-3xl shadow-2xl border border-slate-100 bg-pink-50 p-8 backdrop-blur-sm sm:grid-cols-3">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-slate-950 md:text-5xl">10K+</h3>
            <p className="mt-2 text-sm font-medium uppercase tracking-wider text-slate-400">
              Active Users
            </p>
          </div>

          <div className="border-y border-slate-800 py-6 text-center sm:border-x sm:border-y-0 sm:py-0">
            <h3 className="text-4xl font-bold text-slate-950 md:text-5xl">50K+</h3>
            <p className="mt-2 text-sm font-medium uppercase tracking-wider text-slate-400">
              Links Created
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-slate-950 md:text-5xl">99.9%</h3>
            <p className="mt-2 text-sm font-medium uppercase tracking-wider text-slate-400">
              Uptime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Status;
