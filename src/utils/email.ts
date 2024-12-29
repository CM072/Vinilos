import toast from 'react-hot-toast';

export function sendEmail(data: Record<string, string>) {
  try {
    const subject = encodeURIComponent(`Nueva solicitud: ${data.service || 'Contacto General'}`);
    const body = encodeURIComponent(`
Nombre: ${data.name}
Email: ${data.email}
Teléfono: ${data.phone || 'No proporcionado'}
Mensaje: ${data.message}
${data.service ? `Servicio: ${data.service}` : ''}
    `.trim());

    window.location.href = `mailto:fernando@grupomanzanares.com?subject=${subject}&body=${body}`;
    toast.success('Abriendo su cliente de correo...');
  } catch (error) {
    console.error('Error al abrir el cliente de correo:', error);
    toast.error('Error al abrir el cliente de correo. Por favor, inténtelo de nuevo.');
  }
}