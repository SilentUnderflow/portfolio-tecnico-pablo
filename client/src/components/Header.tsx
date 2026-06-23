import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  logoUrl: string;
}

export default function Header({ logoUrl }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Início', href: '#hero' },
    { label: 'Sobre', href: '#about' },
    { label: 'Trajetória', href: '#timeline' },
    { label: 'Competências', href: '#skills' },
    { label: 'Laboratórios', href: '#labs' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-500/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 transition-transform hover:scale-105">
          <img src={logoUrl} alt="Logo" className="h-8 w-8" />
          <span className="font-display text-lg font-bold gradient-text">Pablo</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-cyan-400" />
          ) : (
            <Menu className="h-6 w-6 text-cyan-400" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="border-t border-cyan-500/10 bg-slate-900/50 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
