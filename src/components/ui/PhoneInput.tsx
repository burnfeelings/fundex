import React from 'react';

interface CountryCode {
  code: string;
  dial_code: string;
  name: string;
}

const countryCodes: CountryCode[] = [
  { code: "ES", dial_code: "+34", name: "España" },
  { code: "US", dial_code: "+1", name: "Estados Unidos" },
  { code: "MX", dial_code: "+52", name: "México" },
  { code: "AR", dial_code: "+54", name: "Argentina" },
  { code: "CO", dial_code: "+57", name: "Colombia" },
  { code: "PE", dial_code: "+51", name: "Perú" },
  { code: "CL", dial_code: "+56", name: "Chile" },
  { code: "EC", dial_code: "+593", name: "Ecuador" },
  { code: "VE", dial_code: "+58", name: "Venezuela" },
  { code: "BO", dial_code: "+591", name: "Bolivia" },
];

export function PhoneInput() {
  return (
    <div className="flex gap-2">
      <select
        className="w-32 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
      >
        {countryCodes.map((country) => (
          <option key={country.code} value={country.dial_code}>
            {country.name} ({country.dial_code})
          </option>
        ))}
      </select>
      <input
        type="tel"
        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Número de teléfono"
      />
    </div>
  );
}