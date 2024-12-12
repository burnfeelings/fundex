import React from 'react';
import { Check, MessageCircle, Zap, Users, Video, BookOpen } from 'lucide-react';
import { Container } from './ui/Container';
import { PricingCard } from './ui/PricingCard';

const premiumFeatures = [
  { icon: <Video className="w-5 h-5" />, text: "Acceso completo a todos los cursos" },
  { icon: <MessageCircle className="w-5 h-5" />, text: "Mentoría 1 a 1 con traders expertos" },
  { icon: <Users className="w-5 h-5" />, text: "Acceso a comunidad Discord" },
  { icon: <BookOpen className="w-5 h-5" />, text: "Material de estudio exclusivo" },
  { icon: <Zap className="w-5 h-5" />, text: "1 mes de señales gratuitas" },
  { icon: <MessageCircle className="w-5 h-5" />, text: "Grupo privado de WhatsApp" }
];

const signalsFeatures = [
  { icon: <Zap className="w-5 h-5" />, text: "Señales de trading en tiempo real" },
  { icon: <Users className="w-5 h-5" />, text: "Acceso al canal de señales" },
  { icon: <MessageCircle className="w-5 h-5" />, text: "Soporte técnico prioritario" }
];

export function Pricing() {
  return (
    <div className="py-20 bg-gray-50" id="cursos">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Planes y Precios
          </h2>
          <p className="text-xl text-gray-600">
            Elige el plan que mejor se adapte a tus objetivos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <PricingCard
            title="Curso Premium"
            price="150"
            description="Acceso completo a nuestra academia con mentorías personalizadas"
            features={premiumFeatures}
            ctaText="Comenzar Ahora"
            highlight={true}
            badge="Pago Único"
          />

          <PricingCard
            title="Señales Premium"
            price="50"
            description="Recibe señales de trading precisas y actualizadas"
            features={signalsFeatures}
            ctaText="Suscribirse"
            period="/mes"
          />
        </div>
      </Container>
    </div>
  );
}