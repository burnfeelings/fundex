import React from 'react';
import { cn } from '../../utils/cn';
import { Button } from './Button';

interface PricingFeature {
  icon: React.ReactNode;
  text: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  description: string;
  features: PricingFeature[];
  ctaText: string;
  highlight?: boolean;
  badge?: string;
}

export function PricingCard({
  title,
  price,
  period = '',
  description,
  features,
  ctaText,
  highlight = false,
  badge
}: PricingCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl p-8 transition-all',
        highlight
          ? 'bg-blue-600 text-white shadow-xl scale-105'
          : 'bg-white text-gray-900 border-2 border-gray-100'
      )}
    >
      {badge && (
        <span className="px-3 py-1 text-sm font-medium bg-blue-500 text-white rounded-full">
          {badge}
        </span>
      )}
      <h3 className="text-2xl font-bold mt-4">{title}</h3>
      <div className="mt-4 flex items-baseline">
        <span className="text-4xl font-bold">${price}</span>
        {period && <span className="ml-1 text-xl">{period}</span>}
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
      <Button
        className={cn(
          'w-full mt-8',
          highlight
            ? 'bg-white text-blue-600 hover:bg-blue-50'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        )}
      >
        {ctaText}
      </Button>
    </div>
  );
}