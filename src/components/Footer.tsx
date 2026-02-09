import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import { siteConfig, footerContent } from '@/content';

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="text-xl font-bold mb-4">
              <span className="text-indigo-400">Site</span>Round
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              {footerContent.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Links
            </h4>
            <ul className="space-y-2">
              {footerContent.quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {footerContent.services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-indigo-400" />
                  <span className="break-all">{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-indigo-400" />
                  +{siteConfig.whatsappNumber}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">{footerContent.copyright}</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors text-sm">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
