"use client";
import "../../../raw_html/style.css";
import { SendEmail } from '~/server/email/email';
import { useState } from 'react';
import Link from "next/link";

function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    age: '',
    question: '',
    answer: '',
    bio: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, email, password, age, question, answer, bio } = formData;
    await SendEmail(username, email, password, age, question, answer, bio);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Welcome to this form!</p>

        <label htmlFor="Username">Username:</label>
        <input
          type="text"
          id="Username"
          name="username"
          required
          value={formData.username}
          onChange={handleChange}
        />
        <br /><br />
        
        <label htmlFor="Email">Email:</label>
        <input
          type="email"
          id="Email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <br /><br />
        
        <label htmlFor="Password">Password: (DO NOT USE A REAL PASSWORD) </label>
        <input
          type="password"
          id="Password"
          name="password"
          required
          value={formData.password}
          onChange={handleChange}
        />
  
        <p>Select your age:</p>
  
        <input
          type="radio"
          name="age"
          value="0-25"
          id="Option1"
          checked={formData.age === '0-25'}
          onChange={handleChange}
        />
        <label htmlFor="Option1">0-25</label>
        <input
          type="radio"
          name="age"
          value="26-50"
          id="Option2"
          checked={formData.age === '26-50'}
          onChange={handleChange}
        />
        <label htmlFor="Option2">26-50</label>
        <input
          type="radio"
          name="age"
          value="51+"
          id="Option3"
          checked={formData.age === '51+'}
          onChange={handleChange}
        />
        <label htmlFor="Option3">51+</label>
  
        <br /><br />
  
        <label htmlFor="Question">Security Question:</label>
        <select
          name="question"
          id="Question"
          value={formData.question}
          onChange={handleChange}
        >
            <option value="Q1">What color are your favorite pair of socks?</option>
            <option value="Q2">If you could be a vegetable, what would it be?</option>
            <option value="Q3">What is the name of your third grade teacher?</option>
        </select>
  
        <br /><br />
  
        <label htmlFor="Answer">Security Question Answer:</label>
        <input
          type="text"
          id="Answer"
          name="answer"
          value={formData.answer}
          onChange={handleChange}
        />
  
        <br /><br />
  
        <label htmlFor="Bio">Your bio:</label><br />
        <textarea
          name="bio"
          id="Bio"
          cols={30}
          rows={10}
          placeholder="About you..."
          value={formData.bio}
          onChange={handleChange}
        ></textarea>
  
        <br /><br />
        <input type="submit" value="Submit Form" />
      </form>
      <br />
      We do not store any of this information. this is just as an example of using resend to send an email.
      <Link href="/" className=" text-gray-300 decoration-dashed decoration-current hover:decoration-solid hover:text-gray-400">Home</Link>
    </div>
  );
}

export default App;