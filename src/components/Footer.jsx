import { NavLink } from 'react-router-dom'
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

const socialLinks = [
  { icon: FaGithub, href: '#', label: 'GitHub' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaXTwitter, href: '#', label: 'X / Twitter' },
]

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

function scrollToSection(e, href) {
  e.preventDefault()
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-16 lg:py-20">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8">
          {/* Brand */}
          <div className="text-center lg:text-left">
            <NavLink
              to="/"
              className="text-2xl font-display font-bold text-white"
            >
              Portfolio<span className="text-text-muted">.</span>
            </NavLink>
            <p className="mt-3 text-sm text-text-muted max-w-xs leading-relaxed">
              Crafting digital experiences with clean code and thoughtful design.
            </p>
          </div>

          {/* Footer Nav Links */}
          <div className="flex flex-wrap justify-center gap-8">
            {footerLinks.map((link) => (
              <NavLink
                key={link.name}
                to={`/${link.href}`}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm text-text-secondary hover:text-white transition-colors"
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 text-text-secondary hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-center text-sm text-text-muted">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
