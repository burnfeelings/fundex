import React from 'react';
import { ArrowRight, BookOpen, Users, BarChart2 } from 'lucide-react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { Video } from './ui/Video';
import { CandlestickBackground } from './ui/CandlestickBackground';
import { AnimatedTitle } from './ui/AnimatedTitle';

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
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedTitle />
            <p className="text-xl text-gray-600 mb-8 animate-fade-in animation-delay-200">
              Descubre las estrategias que utilizan los traders más exitosos del mercado
              y únete a una comunidad de traders profesionales.
            </p>
          </div>

          <div className="flex gap-4 mb-12 animate-fade-in animation-delay-400">
            <Button className="group px-8 py-3 flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
              Empieza a Ganar
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" className="px-8 py-3 border-2">
              Ver Resultados
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
                className="flex flex-col items-center text-center p-6 rounded-lg bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <div className="text-blue-600 mb-3 transform transition-transform group-hover:scale-110">
                  {feature.icon}
                </div>
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