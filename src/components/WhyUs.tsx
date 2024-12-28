export default function WhyUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">¿Por Qué Elegirnos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { title: "Precios Competitivos", description: "Calidad premium a precios accesibles" },
            { title: "Entrega Rápida", description: "Cumplimos con los plazos acordados" },
            { title: "Diseño Personalizado", description: "Adaptamos cada proyecto a tus necesidades" },
            { title: "Garantía de Calidad", description: "Materiales y acabados de primera" }
          ].map((item, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-gray-50">
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}