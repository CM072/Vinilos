import { services } from '../data/services';
import ServiceCard from './ServiceCard';

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Nuestros Servicios</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Ofrecemos soluciones integrales en rotulación y vinilos para empresas y particulares
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}