import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

interface EmailData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  service?: string;
  recaptchaToken: string;
}

export async function sendEmail(data: EmailData): Promise<void> {
  if (!import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 
      !import.meta.env.VITE_EMAILJS_SERVICE_ID || 
      !import.meta.env.VITE_EMAILJS_TEMPLATE_ID) {
    toast.error('La configuración del servicio de email no está completa');
    return;
  }

  try {
    const templateParams = {
      to_email: 'fernando@grupomanzanares.com',
      from_name: data.name,
      from_email: data.email,
      phone: data.phone || 'No proporcionado',
      message: data.message,
      service: data.service || 'Contacto General',
      'g-recaptcha-response': data.recaptchaToken
    };

    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams
    );

    toast.success('Mensaje enviado correctamente');
  } catch (error) {
    console.error('Error sending email:', error);
    toast.error('Error al enviar el mensaje. Por favor, inténtelo de nuevo.');
  }
}