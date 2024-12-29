import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import { ArrowLeft, Check } from 'lucide-react';
import ContactForm from './ContactForm';

export default function ServiceForm() {
  const { service } = useParams();
  const serviceData = services.find(s => s.id === service);

  if (!serviceData) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <p className="text-center text-xl">Servicio no encontrado</p>
          <Link to="/" className="text-blue-600 hover:text-blue-800 flex items-center justify-center mt-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al inicio
        </Link>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-3xl font-bold mb-4">{serviceData.title}</h1>
            <p className="text-gray-600 mb-6">{serviceData.description}</p>
            
            <div className="bg-white rounded-lg p-6 shadow-md mb-6">
              <h2 className="text-xl font-semibold mb-4">Características</h2>
              <ul className="space-y-3">
                {serviceData.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <p className="text-lg font-semibold text-blue-800">Precio orientativo:</p>
              <p className="text-3xl font-bold text-blue-600">{serviceData.price}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold mb-6">Solicitar Información</h2>
            <ContactForm service={serviceData.title} />
          </div>
        </div>
      </div>
    </div>
  );
}