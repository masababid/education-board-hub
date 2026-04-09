import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="hero-gradient text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">BBISE Quetta</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Balochistan Board of Intermediate and Secondary Education, Quetta is responsible for conducting examinations and granting certificates/diplomas.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Check Results", path: "/results" },
                { label: "Roll Number Slip", path: "/roll-no-slip" },
                { label: "Date Sheet", path: "/date-sheet" },
                { label: "Admissions", path: "/admissions" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="opacity-90 hover:opacity-100 hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span className="opacity-90">Joint Road, Quetta, Balochistan, Pakistan</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <span className="opacity-90">+92-81-9202491</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <span className="opacity-90">info@bbise.edu.pk</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm opacity-75">
          © {new Date().getFullYear()} Balochistan Board of Intermediate & Secondary Education. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
