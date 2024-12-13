import React from 'react';

export function PhoneInput() {
  return (
    <input
      type="tel"
      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      placeholder="Número de teléfono"
    />
  );
}