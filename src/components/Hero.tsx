import { sendEmail } from '../utils/email';

export default function Hero() {
  const handleContactClick = () => {
    sendEmail({
      service: 'Solicitud de Presupuesto General',
      name: '',
      email: '',
      message: 'Me gustaría recibir información sobre sus servicios.'
    });
  };

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">Vinilos y Rótulos de Alta Calidad a Precios Increíbles</h1>
            <p className="text-xl mb-8 text-gray-600">Transformamos tus espacios con diseños personalizados y materiales premium. Servicio rápido y profesional garantizado.</p>
            <button 
              onClick={handleContactClick}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Solicitar Presupuesto
            </button>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?auto=format&fit=crop&q=80" 
              alt="Instalación de vinilos" 
              className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}