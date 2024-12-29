import { FormEvent, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { sendEmail } from '../utils/emailService';

interface ContactFormProps {
  service?: string;
  onSuccess?: () => void;
}

export default function ContactForm({ service, onSuccess }: ContactFormProps) {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const recaptchaValue = recaptchaRef.current?.getValue();
    if (!recaptchaValue) {
      alert('Por favor, complete el captcha');
      return;
    }

    const formData = new FormData(e.currentTarget);
    
    await sendEmail({
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
      service,
      recaptchaToken: recaptchaValue
    });

    e.currentTarget.reset();
    recaptchaRef.current?.reset();
    onSuccess?.();
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Nombre completo
        </label>
        <input
          name="name"
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          name="email"
          type="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Teléfono
        </label>
        <input
          name="phone"
          type="tel"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Mensaje
        </label>
        <textarea
          name="message"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Describe tu proyecto o necesidades..."
          required
        ></textarea>
      </div>

      <div className="flex justify-center">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          theme="light"
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
      >
        Enviar
      </button>
    </form>
  );
}