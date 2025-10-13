//import nodemailer from 'nodemailer';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' })

/*
const resend = new Resend(process.env.EMAIL_API_KEY);

export async function purchaseMessage({ name, item, address }) {
  resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'totally.legal.brick.wall@gmail.com',
    subject: 'NEW PURCHASE',
    html: `FROM: ${name}. ITEM: ${item}. SUBMISSION: ${address}`,
  });
}
*/