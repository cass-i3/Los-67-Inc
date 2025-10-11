//import nodemailer from 'nodemailer';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' })

console.log(process.env.EMAIL_API_KEY)

const resend = new Resend('re_GK6KpERn_Nbzb9PGTEwyZxuDw2hknWVdR');

export async function purchaseMessage({ name, item, address }) {
  resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'totally.legal.brick.wall@gmail.com',
    subject: 'NEW PURCHASE',
    html: `FROM: ${name}. ITEM: ${item}. SUBMISSION: ${address}`,
  });
}