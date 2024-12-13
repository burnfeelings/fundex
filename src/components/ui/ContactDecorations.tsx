import React from 'react';

export function ContactDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Left side decorations */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-10">
        <svg className="h-96" viewBox="0 0 50 200" preserveAspectRatio="none">
          {[...Array(5)].map((_, i) => (
            <g key={i} className={`animate-candlestick-${i + 1}`}>
              <line
                x1={10 + i * 8}
                y1={40 + i * 30}
                x2={10 + i * 8}
                y2={80 + i * 30}
                stroke="currentColor"
                strokeWidth="2"
                className="text-blue-600"
              />
              <rect
                x={8 + i * 8}
                y={50 + i * 30}
                width="4"
                height="20"
                className={i % 2 === 0 ? 'fill-green-600' : 'fill-red-600'}
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Right side decorations */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10">
        <svg className="h-96" viewBox="0 0 50 200" preserveAspectRatio="none">
          {[...Array(5)].map((_, i) => (
            <g key={i} className={`animate-candlestick-${i + 1}`}>
              <line
                x1={40 - i * 8}
                y1={40 + i * 30}
                x2={40 - i * 8}
                y2={80 + i * 30}
                stroke="currentColor"
                strokeWidth="2"
                className="text-blue-600"
              />
              <rect
                x={38 - i * 8}
                y={50 + i * 30}
                width="4"
                height="20"
                className={i % 2 === 0 ? 'fill-red-600' : 'fill-green-600'}
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Top and bottom trend lines */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <path
          d="M0,20 C100,10 200,30 300,20"
          className="text-blue-600/10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="4,4"
        />
        <path
          d="M300,180 C200,190 100,170 0,180"
          className="text-blue-600/10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="4,4"
        />
      </svg>
    </div>
  );
}