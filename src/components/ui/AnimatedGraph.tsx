import React from 'react';

export function AnimatedGraph() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        {/* Generate multiple animated lines */}
        {[...Array(5)].map((_, i) => (
          <g key={i} className={`animate-graph-${i + 1}`}>
            <path
              d={`M-100,${500 + i * 100} C${200 + i * 100},${400 + i * 50} ${400 + i * 100},${600 + i * 30} ${1100},${500 + i * 80}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-blue-600"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}