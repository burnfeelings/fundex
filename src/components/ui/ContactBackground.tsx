import React from 'react';

export function ContactBackground() {
  return (
    <div className="absolute inset-0 opacity-[0.02] pointer-events-none overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Trading chart patterns */}
        {[...Array(5)].map((_, i) => (
          <g key={`pattern-${i}`} className={`animate-trend-${i + 1}`}>
            <path
              d={`M${i * 20},${40 + i * 5} L${20 + i * 20},${60 - i * 3} L${40 + i * 20},${45 + i * 4} L${60 + i * 20},${55 - i * 2}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-blue-600"
            />
            {/* Support/Resistance lines */}
            <line
              x1="0"
              y1={30 + i * 10}
              x2="100"
              y2={30 + i * 10}
              stroke="currentColor"
              strokeWidth="0.2"
              strokeDasharray="1,1"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}