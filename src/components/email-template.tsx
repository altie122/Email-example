import * as React from 'react';

interface EmailTemplateProps {
  username: string;
  email: string;
  password: string;
  age: string;
  securityQuestion: string;
  securityAnswer: string;
  bio: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  username,
  email,
  password,
  age,
  securityQuestion,
  securityAnswer,
  bio
}) => (
  <div>
    <h1>Welcome, {username}!</h1>
    <p>Your email is: {email}.</p>
    <p>Your password is: {password}.</p>
    <p>Your age is: {age}.</p>
    <p>Your security question is: {securityQuestion}.</p>
    <p>Your security answer is: {securityAnswer}.</p>
    <p>Your bio is: {bio}.</p>
  </div>
);
