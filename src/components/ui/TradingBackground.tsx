import React from 'react';

export function TradingBackground() {
  return (
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Candlestick patterns */}
        {[...Array(8)].map((_, i) => (
          <g key={`candle-${i}`} className={`animate-candlestick-${i + 1}`}>
            <line 
              x1={10 + i * 10} 
              y1={30 + (i % 3) * 10} 
              x2={10 + i * 10} 
              y2={60 + (i % 4) * 10} 
              stroke="currentColor" 
              strokeWidth="0.5"
            />
            <rect 
              x={9 + i * 10} 
              y={35 + (i % 3) * 10} 
              width="2" 
              height={20 + (i % 3) * 5} 
              className="fill-current"
            />
          </g>
        ))}
        
        {/* Trend lines */}
        {[...Array(3)].map((_, i) => (
          <path
            key={`trend-${i}`}
            d={`M0,${50 + i * 15} C20,${45 + i * 10} 40,${55 + i * 5} 100,${45 + i * 12}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className={`animate-trend-${i + 1}`}
          />
        ))}
      </svg>
    </div>
  );
}