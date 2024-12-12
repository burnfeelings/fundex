import React from 'react';
import { Container } from './ui/Container';

export function Footer() {
  return (
    <footer className="py-6 bg-gray-50 border-t border-gray-200">
      <Container>
        <div className="text-center text-gray-600 text-sm">
          <p>FundeX Trading Academy © {new Date().getFullYear()}</p>
          <p className="mt-1 text-gray-500">Formando traders exitosos</p>
        </div>
      </Container>
    </footer>
  );
}