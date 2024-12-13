import React from 'react';

export function CandlestickBackground() {
  return (
    <div className="absolute inset-0 opacity-[0.1] pointer-events-none overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Candlestick patterns */}
        {[...Array(12)].map((_, i) => (
          <g key={`candle-${i}`} className={`animate-candlestick-${(i % 8) + 1}`}>
            {/* Wick */}
            <line 
              x1={8 + i * 7} 
              y1={20 + (Math.sin(i) * 15)} 
              x2={8 + i * 7} 
              y2={40 + (Math.sin(i) * 15)} 
              stroke="currentColor" 
              strokeWidth="0.5"
              className="text-blue-600"
            />
            {/* Body */}
            <rect 
              x={7 + i * 7} 
              y={25 + (Math.sin(i) * 15)} 
              width="2" 
              height={10} 
              className={i % 2 === 0 ? 'fill-green-600' : 'fill-red-600'}
              opacity="0.5"
            />
          </g>
        ))}
        
        {/* Moving average lines */}
        {[...Array(3)].map((_, i) => (
          <path
            key={`ma-${i}`}
            d={`M0,${30 + i * 10} C25,${35 + i * 8} 50,${25 + i * 12} 100,${35 + i * 6}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.3"
            className={`animate-trend-${i + 1} text-blue-600`}
            opacity="0.3"
          />
        ))}
      </svg>
    </div>
  );
}