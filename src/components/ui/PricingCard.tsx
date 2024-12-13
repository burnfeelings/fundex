import React from 'react';
import { cn } from '../../utils/cn';

interface PricingFeature {
  icon: React.ReactNode;
  text: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  originalPrice?: string;
  period?: string;
  description: string;
  features: PricingFeature[];
  ctaText: string;
  highlight?: boolean;
  badge?: string;
  discount?: string;
}

export function PricingCard({
  title,
  price,
  originalPrice,
  period = '',
  description,
  features,
  ctaText,
  highlight = false,
  badge,
  discount
}: PricingCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl p-8 transition-all relative overflow-hidden transform hover:scale-105 duration-300',
        highlight
          ? 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white animate-pricing-gradient animate-pricing-glow'
          : 'bg-white text-gray-900 border-2 border-gray-100 hover:border-blue-200'
      )}
    >
      {/* Animated background elements for highlighted card */}
      {highlight && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent animate-pulse opacity-75"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-blue-300/10 to-transparent animate-[gradient_2s_ease-in-out_infinite] blur"></div>
        </>
      )}

      {discount && (
        <div className="absolute -right-12 top-8 rotate-45 bg-red-500 text-white px-12 py-1 text-sm font-bold shadow-lg">
          {discount}
        </div>
      )}
      
      {badge && (
        <span className="px-3 py-1 text-sm font-medium bg-blue-500 text-white rounded-full">
          {badge}
        </span>
      )}
      
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mt-4">{title}</h3>
        <div className="mt-4 flex items-baseline gap-3">
          <span className="text-4xl font-bold">${price}</span>
          {originalPrice && (
            <span className={cn(
              'text-xl line-through',
              highlight ? 'text-blue-200' : 'text-gray-400'
            )}>
              ${originalPrice}
            </span>
          )}
          {period && <span className="text-xl">{period}</span>}
        </div>
        <p className={cn('mt-4', highlight ? 'text-blue-100' : 'text-gray-600')}>
          {description}
        </p>
        <ul className="mt-8 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <span className={highlight ? 'text-blue-200' : 'text-blue-600'}>
                {feature.icon}
              </span>
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
        <button
          className={cn(
            'w-full mt-8 px-6 py-3 rounded-full font-semibold tracking-wide uppercase transition-all duration-300',
            highlight
              ? 'bg-white text-blue-600 hover:bg-red-600 hover:text-white transform hover:scale-105'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          )}
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
}