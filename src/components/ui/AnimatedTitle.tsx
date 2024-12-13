import React from 'react';

export function AnimatedTitle() {
  return (
    <div className="relative">
      {/* Accent line */}
      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-16 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full animate-pulse" />
      
      <h1 className="text-6xl font-bold text-gray-900 mb-6 animate-fade-in relative">
        <span className="block mb-2">
          <span className="text-blue-600">Trading</span> Profesional
        </span>
        <span className="block text-4xl text-gray-800">
          Tu Camino al{' '}
          <span className="relative inline-block">
            Éxito
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path
                d="M0,5 Q25,0 50,5 T100,5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-blue-400"
              />
            </svg>
          </span>
        </span>
      </h1>
    </div>
  );
}