"use client"

import Link from "next/link"
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants"

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">CHEEK</h2>
            <p className="text-sm leading-relaxed">
              Handmade chaps for the bold, the playful, 
              and the unapologetically queer. 🍑
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigate
            </h3>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-pink-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex gap-4 mb-6">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-pink-400 transition-colors"
              >
                Instagram
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-pink-400 transition-colors"
              >
                TikTok
              </a>
              <a
                href={SOCIAL_LINKS.etsy}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-pink-400 transition-colors"
              >
                Etsy
              </a>
            </div>

            {/* Newsletter Signup */}
            <div>
              <p className="text-sm mb-2">Join the CHEEK community</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm text-white placeholder-gray-500 focus:outline-none focus:border-pink-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-pink-600 text-white text-sm font-medium rounded-md hover:bg-pink-700 transition-colors"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} CHEEK. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
