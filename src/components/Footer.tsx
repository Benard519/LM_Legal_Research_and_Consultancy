import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">LM</span>
              <span className="text-emerald-400"> Legal</span>
            </h3>
            <p className="text-sm text-gray-300">
              High-end Legal Research and Consultancy Firm
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-emerald-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-sm hover:text-emerald-400 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-sm hover:text-emerald-400 transition-colors">
                  Our Process
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/legal-research" className="text-sm hover:text-emerald-400 transition-colors">
                  Legal Research
                </Link>
              </li>
              <li>
                <Link to="/consultancy" className="text-sm hover:text-emerald-400 transition-colors">
                  Consultancy Services
                </Link>
              </li>
              <li>
                <span className="text-sm text-gray-300">Training & Workshops</span>
              </li>
              <li>
                <span className="text-sm text-gray-300">NGO Support</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-emerald-400 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p>+254 794 769 749</p>
                  <p>+254 707 097 617</p>
                  <p>+254 701 486 835</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-emerald-400 mt-1 flex-shrink-0" />
                <a
                  href="mailto:lmlegalconsult@gmail.com"
                  className="text-sm hover:text-emerald-400 transition-colors"
                >
                  lmlegalconsult@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} LM Legal Research and Consultancy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
