import React from 'react';
import { ArrowRight, BarChart2, BookOpen, Users } from 'lucide-react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { FeatureCard } from './ui/FeatureCard';
import { AnimatedGraph } from './ui/AnimatedGraph';

const features = [
  {
    icon: <BookOpen className="h-12 w-12" />,
    title: "Cursos Completos",
    description: "Desde principiantes hasta estrategias avanzadas de trading."
  },
  {
    icon: <Users className="h-12 w-12" />,
    title: "Mentores Expertos",
    description: "Aprende de traders profesionales con años de experiencia."
  },
  {
    icon: <BarChart2 className="h-12 w-12" />,
    title: "Análisis en Vivo",
    description: "Sesiones de trading en vivo y análisis de mercado diario."
  }
];

export function Hero() {
  return (
    <div className="relative pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      <AnimatedGraph />
      <Container className="relative">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Domina el Arte del Trading
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Aprende a operar en los mercados financieros con estrategias probadas y mentores expertos.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="group px-8 py-3 flex items-center">
              Comenzar Ahora
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" className="px-8 py-3">
              Ver Cursos
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </Container>
    </div>
  );
}