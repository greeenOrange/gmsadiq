import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sadiqsrx@gmail.com',
      pass: 'bvayqfnsoiemmsdm',
    },
  });

  try {
    await transporter.sendMail({
      from: 'gmsadiq <sadiqsrx@gmail.com>',
      to: 'gm1sadiq@gmail.com', // Admin email address
      subject: 'Sending Email using Node.js',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'An error occurred while sending the email' });
  }
}
