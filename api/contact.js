const { Resend } = require('resend');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed.' });
  }

  const body = request.body && typeof request.body === 'object' ? request.body : {};
  const name = String(body.name || '').trim();
  const email = String(body.email || '').trim();
  const message = String(body.message || '').trim();

  if (!name || !email || !emailPattern.test(email) || !message) {
    return response.status(400).json({ error: 'Please provide a name, valid email, and project description.' });
  }

  const fields = Object.entries(body).filter(([key, value]) => key !== 'consent' && value !== '' && value !== null && value !== undefined);
  const details = fields.map(([key, value]) => {
    const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, character => character.toUpperCase());
    const content = Array.isArray(value) ? value.join(', ') : String(value);
    return `<tr><td style="padding:8px 14px 8px 0;color:#666;font-weight:600;vertical-align:top">${label}</td><td style="padding:8px 0">${content.replace(/[&<>]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[character]))}</td></tr>`;
  }).join('');

  const resend = new Resend(process.env.RESEND_API_KEY);
  const projectType = Array.isArray(body.needs) ? body.needs.join(', ') : body.needs || 'General inquiry';
  const { data, error } = await resend.emails.send({
    from: 'SIGNATRIX <onboarding@resend.dev>',
    to: [process.env.CONTACT_EMAIL],
    replyTo: email,
    subject: `New SIGNATRIX Inquiry — ${projectType}`,
    html: `<div style="font-family:Arial,sans-serif;max-width:680px"><h1>New SIGNATRIX Inquiry</h1><table style="border-collapse:collapse;width:100%">${details}</table><h2 style="margin-top:28px">Message</h2><p style="white-space:pre-wrap;line-height:1.6">${message.replace(/[&<>]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[character]))}</p></div>`,
  }, { idempotencyKey: `contact-inquiry/${email}/${Date.now()}` });

  if (error) {
    console.error('[contact] Resend error:', error.message);
    return response.status(502).json({ error: 'We could not send your inquiry. Please try again.' });
  }

  return response.status(200).json({ id: data?.id });
}
