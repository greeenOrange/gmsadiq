
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { name, mail, subject, message } = await request.json();

        const email = process.env.EMAIL;
        const pass = process.env.EMAIL_PASS;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: email,
                pass: pass,
            }
        });

        const mailOptions = {
            from: email,
            to: 'mhsadiq.alom@gmail.com',
            subject: "Send Email Tutorial",
            html: `
                <h3>Hello,</h3>
                <p>You have received a new message:</p>
                <ul>
                <li>Name: ${name}</li>
                    <li>mail: ${mail}</li>
                    <li>Subject: ${subject}</li>
                    <li>Message:</li> 
                </ul>
                <p>${message}</p>
            `
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 });
    }
}
