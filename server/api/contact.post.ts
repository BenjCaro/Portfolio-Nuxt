import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

// On définit le même schéma (tu pourrais même l'exporter depuis un fichier partagé)
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10).max(2000)
});

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

 
  const result = contactSchema.safeParse(body);

  if (!result.success) {
  
    throw createError({
      statusCode: 400,
      statusMessage: 'Données de formulaire invalides',
    });
  }

  
  const { name, email, message } = result.data;

  try {
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['ton-email@gmail.com'],
      subject: `Nouveau message de ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Nom:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`
    });

    return { status: 'success' };
  } catch (error) {
    throw createError({ statusCode: 500, statusMessage: 'Erreur Resend' });
  }
});