import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import boardLogo from "@/assets/board-logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Results", path: "/results" },
  { label: "Roll No Slip", path: "/roll-no-slip" },
  { label: "Date Sheet", path: "/date-sheet" },
  { label: "Admissions", path: "/admissions" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      {/* Top bar */}
      <div className="hero-gradient text-primary-foreground text-sm py-1.5">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span>Balochistan Board of Intermediate & Secondary Education, Quetta</span>
          <Link to="/admin" className="hover:underline hidden sm:inline">Admin Portal</Link>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img src={boardLogo} alt="BBISE Quetta Logo" width={48} height={48} className="rounded" />
            <div className="hidden sm:block">
              <p className="font-bold text-primary leading-tight text-sm">BBISE Quetta</p>
              <p className="text-xs text-muted-foreground">Board of Intermediate & Secondary Education</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/admin"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary"
            >
              Admin Portal
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
