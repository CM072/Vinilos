export function sendEmail(data: Record<string, string>) {
  const subject = encodeURIComponent(`Nueva solicitud: ${data.service || 'Contacto General'}`);
  const body = encodeURIComponent(`
Nombre: ${data.name}
Email: ${data.email}
Teléfono: ${data.phone || 'No proporcionado'}
Mensaje: ${data.message}
${data.service ? `Servicio: ${data.service}` : ''}
  `.trim());

  window.location.href = `mailto:fernando@grupomanzanares.com?subject=${subject}&body=${body}`;
}