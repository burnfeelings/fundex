import React from 'react';

export function PricingBackground() {
  return (
    <div className="absolute inset-0 opacity-10 overflow-hidden pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Bollinger Bands */}
        <path
          d="M0,30 C25,28 50,35 100,30"
          className="text-blue-600 animate-band-top"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.2"
          strokeDasharray="1,1"
        />
        <path
          d="M0,50 C25,48 50,55 100,50"
          className="text-blue-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.3"
        />
        <path
          d="M0,70 C25,68 50,75 100,70"
          className="text-blue-600 animate-band-bottom"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.2"
          strokeDasharray="1,1"
        />
        
        {/* Candlesticks */}
        {[...Array(8)].map((_, i) => (
          <g key={i} className={`animate-candlestick-${i + 1}`}>
            {/* Wick */}
            <line
              x1={10 + i * 10}
              y1={40 + (Math.sin(i) * 10)}
              x2={10 + i * 10}
              y2={60 + (Math.sin(i) * 10)}
              stroke="currentColor"
              strokeWidth="0.3"
              className="text-blue-600"
            />
            {/* Body */}
            <rect
              x={9 + i * 10}
              y={45 + (Math.sin(i) * 10)}
              width="2"
              height="10"
              className={i % 2 === 0 ? 'fill-green-600/50' : 'fill-red-600/50'}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}