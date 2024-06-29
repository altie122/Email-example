"use server";
import { EmailTemplate } from '~/components/email-template';
import { Resend } from 'resend';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function SendEmail(username: string, email: string, password: string, age: string, securityQuestion: string, securityAnswer: string, bio: string) {
  await resend.emails.send({
    from: 'Altie122 Example <altie122.email.example@email.drigon.xyz>',
    to: [email],
    subject: 'Example email',
    react: EmailTemplate({ username: username, email: email, password: password, age: age, securityQuestion: securityQuestion, securityAnswer: securityAnswer, bio: bio }) as React.ReactElement,
  });
}
