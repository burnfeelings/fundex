import React from 'react';
import { Container } from './ui/Container';
import { MessageSquare, Users, Clock, CheckCircle } from 'lucide-react';
import { PhoneInput } from './ui/PhoneInput';
import { ContactBackground } from './ui/ContactBackground';

const benefits = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Mentoría Personalizada",
    description: "Comunicación directa con nuestros profesores expertos"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Comunidad Activa",
    description: "Aprende y comparte con otros traders"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Soporte 24/7",
    description: "Estamos aquí para ayudarte en todo momento"
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Garantía de Calidad",
    description: "Satisfacción garantizada o te devolvemos tu dinero"
  }
];

export function Contact() {
  return (
    <div className="py-20 bg-white relative" id="contacto">
      <ContactBackground />
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contacta con Nosotros
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Estamos aquí para ayudarte en tu viaje hacia el éxito en trading
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="grid gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-blue-600">{benefit.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono
                </label>
                <PhoneInput />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}