import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-4xl font-bold text-center mb-8">Contacta con Nosotros</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}