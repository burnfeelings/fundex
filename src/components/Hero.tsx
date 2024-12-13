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
        <div className="flex flex-col items-center py-16 relative z-10">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in text-center">
            Domina el Arte del Trading
          </h1>
          <p className="text-xl text-gray-600 mb-8 text-center max-w-2xl">
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
          
          <div className="relative mb-12 w-full max-w-3xl mx-auto group">
            <div className="absolute inset-0 animate-pulse-ring bg-blue-500/20 rounded-xl"></div>
            <div className="absolute inset-0 animate-pulse-ring animation-delay-200 bg-blue-500/20 rounded-xl"></div>
            <div className="absolute inset-0 animate-pulse-ring animation-delay-400 bg-blue-500/20 rounded-xl"></div>
            <Video 
              src="/videos/intro.mp4"
              title="FundeX Trading Academy Introduction"
            />
          </div>

          <div className="grid sm:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all shadow-lg"
              >
                <div className="text-blue-600 mb-3">{feature.icon}</div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}