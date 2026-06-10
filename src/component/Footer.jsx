import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Link<span className="text-violet-400">Bio</span>
            </h2>

            <p className="mt-4 text-slate-400">
              Create a beautiful page for all your important links and grow your
              online presence with ease.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="rounded-lg bg-slate-900 p-3 text-slate-400 transition hover:text-white"
              >
                <FaTwitter size={18} />
              </a>

              <a
                href="#"
                className="rounded-lg bg-slate-900 p-3 text-slate-400 transition hover:text-white"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="rounded-lg bg-slate-900 p-3 text-slate-400 transition hover:text-white"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="#"
                className="rounded-lg bg-slate-900 p-3 text-slate-400 transition hover:text-white"
              >
                <FaGithub size={18} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-white">Product</h3>

            <ul className="mt-4 space-y-3 text-slate-400">
              <li>
                <Link to="/features" className="hover:text-white">
                  Features
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white">Resources</h3>

            <ul className="mt-4 space-y-3 text-slate-400">
              <li>
                <Link to="/documentation" className="hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/help-center" className="hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white">Legal</h3>

            <ul className="mt-4 space-y-3 text-slate-400">
              <li>
                <Link to="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 md:flex-row">
          <p>© 2026 LinkBio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
