import React from 'react';
import { TrendingUp } from 'lucide-react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#cursos', label: 'Cursos' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#contacto', label: 'Contacto' }
];

export function Navbar() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <Container>
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <TrendingUp className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">FundeX</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <Button>Empezar Ahora</Button>
        </div>
      </Container>
    </nav>
  );
}