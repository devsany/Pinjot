export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            Legal
          </span>

          <h1 className="mt-6 text-5xl font-bold md:text-6xl">
            Privacy <span className="text-violet-400">Policy</span>
          </h1>

          <p className="mt-6 text-slate-400">
            Last Updated: June 10, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="space-y-10 rounded-3xl border border-slate-800 bg-slate-900 p-8 md:p-12">
          
          <div>
            <h2 className="mb-4 text-2xl font-bold">
              1. Introduction
            </h2>

            <p className="leading-8 text-slate-400">
              Welcome to LinkBio. We value your privacy and are committed to
              protecting your personal information. This Privacy Policy explains
              how we collect, use, and safeguard your information when you use
              our platform.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold">
              2. Information We Collect
            </h2>

            <ul className="list-disc space-y-3 pl-5 text-slate-400">
              <li>Name and profile information.</li>
              <li>Email address used for account registration.</li>
              <li>Profile images and links you add to your page.</li>
              <li>Usage analytics and interaction data.</li>
              <li>Device and browser information.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold">
              3. How We Use Your Information
            </h2>

            <ul className="list-disc space-y-3 pl-5 text-slate-400">
              <li>To provide and maintain our service.</li>
              <li>To personalize your experience.</li>
              <li>To improve performance and security.</li>
              <li>To respond to support requests.</li>
              <li>To send important service updates.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold">
              4. Data Security
            </h2>

            <p className="leading-8 text-slate-400">
              We implement industry-standard security measures to protect your
              data. However, no internet-based service can guarantee absolute
              security.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold">
              5. Cookies
            </h2>

            <p className="leading-8 text-slate-400">
              We may use cookies and similar technologies to enhance user
              experience, remember preferences, and analyze platform usage.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold">
              6. Third-Party Services
            </h2>

            <p className="leading-8 text-slate-400">
              Our platform may integrate with third-party services such as
              analytics providers, authentication systems, and social media
              platforms. Their privacy practices are governed by their own
              policies.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold">
              7. User Rights
            </h2>

            <ul className="list-disc space-y-3 pl-5 text-slate-400">
              <li>Access your personal information.</li>
              <li>Update or correct inaccurate data.</li>
              <li>Request deletion of your account.</li>
              <li>Withdraw consent where applicable.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold">
              8. Children's Privacy
            </h2>

            <p className="leading-8 text-slate-400">
              Our services are not intended for children under the age of 13.
              We do not knowingly collect personal information from children.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold">
              9. Changes to This Policy
            </h2>

            <p className="leading-8 text-slate-400">
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page along with an updated revision date.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold">
              10. Contact Us
            </h2>

            <p className="leading-8 text-slate-400">
              If you have any questions regarding this Privacy Policy, please
              contact us at:
            </p>

            <div className="mt-4 rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-violet-400">
                support@linkbio.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}