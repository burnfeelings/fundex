import React from 'react';
import { ArrowRight, BookOpen, Users, BarChart2 } from 'lucide-react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { Video } from './ui/Video';
import { CandlestickBackground } from './ui/CandlestickBackground';

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
    <div className="min-h-screen pt-16 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      <CandlestickBackground />
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16">
          <div className="relative z-10">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Domina el Arte del Trading
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Aprende a operar en los mercados financieros con estrategias probadas y mentores expertos.
            </p>
            <div className="flex gap-4 mb-12">
              <Button className="group px-8 py-3 flex items-center">
                Comenzar Ahora
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="secondary" className="px-8 py-3">
                Ver Cursos
              </Button>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm"
                >
                  <div className="text-blue-600 mb-3">{feature.icon}</div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:pl-8 relative z-10">
            <Video 
              src="/videos/intro.mp4"
              title="FundeX Trading Academy Introduction"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}