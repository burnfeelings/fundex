import React from 'react';
import { LineChart, BookOpen, Users2, Trophy, Target, Clock } from 'lucide-react';
import { Container } from './ui/Container';
import { FeatureCard } from './ui/FeatureCard';

const features = [
  {
    icon: <LineChart className="h-8 w-8" />,
    title: "Análisis Técnico Avanzado",
    description: "Aprende a leer gráficos y patrones de mercado como un profesional"
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Material Actualizado",
    description: "Contenido actualizado constantemente según las tendencias del mercado"
  },
  {
    icon: <Users2 className="h-8 w-8" />,
    title: "Comunidad Activa",
    description: "Únete a una comunidad de traders que comparten conocimientos"
  },
  {
    icon: <Trophy className="h-8 w-8" />,
    title: "Casos de Éxito",
    description: "Historias reales de estudiantes que ahora son traders rentables"
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Objetivos Claros",
    description: "Plan de estudio estructurado para alcanzar tus metas"
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Soporte 24/7",
    description: "Asistencia continua para resolver todas tus dudas"
  }
];

export function Features() {
  return (
    <div className="py-20 bg-white" id="servicios">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir FundeX?
          </h2>
          <p className="text-xl text-gray-600">
            Ofrecemos una experiencia completa de aprendizaje en trading
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </Container>
    </div>
  );
}