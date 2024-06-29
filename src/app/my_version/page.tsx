"use client";
import "~/styles/globals.css";
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
    <div className="min-h-screen p-5 flex flex-col gap-5 justify-center items-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 justify-center items-center">
        <p>Welcome to this form!</p>

        <label htmlFor="Username">Username:</label>
        <input
          type="text"
          id="Username"
          name="username"
          required
          value={formData.username}
          onChange={handleChange}
          placeholder="JohnDoe"
          className="border-2 border-white rounded-lg bg-black"
        />
        
        <label htmlFor="Email">Email:</label>
        <input
          type="email"
          id="Email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="example@email.com"
          className="border-2 border-white rounded-lg bg-black"
        />
        
        
        <label htmlFor="Password">Password: <span className="font-bold align-super text-xs">(DO NOT USE A REAL PASSWORD)</span></label>
        <input
          type="password"
          id="Password"
          name="password"
          required
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="border-2 border-white rounded-lg bg-black"
        />
  
        <p>Select your age:</p>
        <div className="flex flex-row gap-2">
        <input
          type="radio"
          name="age"
          value="0-25"
          id="Option1"
          checked={formData.age === '0-25'}
          onChange={handleChange}
          className="border-2 border-white rounded-lg bg-black"
        />
        <label htmlFor="Option1" className="ml-2">0-25</label>
        <input
          type="radio"
          name="age"
          value="26-50"
          id="Option2"
          checked={formData.age === '26-50'}
          onChange={handleChange}
          className="border-2 border-white rounded-lg bg-black ml-5"
        />
        <label htmlFor="Option2" className="ml-2">26-50</label>
        <input
          type="radio"
          name="age"
          value="51+"
          id="Option3"
          checked={formData.age === '51+'}
          onChange={handleChange}
          className="border-2 border-white rounded-lg bg-black ml-5"
        />
        <label htmlFor="Option3" className="ml-2">51+</label>
        </div>
        
  
        <label htmlFor="Question">Security Question:</label>
        <select
          name="question"
          id="Question"
          value={formData.question}
          defaultValue="Q1"
          required
          onChange={handleChange}
          className="border-2 border-white rounded-lg bg-black p-2 hover:cursor-pointer"
        >
            <option value="Q1">What color are your favorite pair of socks?</option>
            <option value="Q2">If you could be a vegetable, what would it be?</option>
            <option value="Q3">What is the name of your third grade teacher?</option>
        </select>
  
        
  
        <label htmlFor="Answer">Security Question Answer:</label>
        <input
          type="text"
          id="Answer"
          name="answer"
          value={formData.answer}
          onChange={handleChange}
          required
          placeholder="Answer"
          className="border-2 border-white rounded-lg bg-black"
        />
  
        
  
        <label htmlFor="Bio">Your bio:</label>
        <textarea
          name="bio"
          id="Bio"
          cols={30}
          rows={10}
          placeholder="About you..."
          value={formData.bio}
          onChange={handleChange}
          required
          className="border-2 border-white rounded-lg bg-black"
        ></textarea>
  
        
        <input type="submit" value="Submit Form" className="bg-black text-white rounded-lg border-2 border-white p-2 hover:cursor-pointer hover:bg-white/15" />
      </form>
      
      We do not store any of this information. this is just as an example of using resend to send an email.
      <Link href="/" className=" text-gray-300 decoration-dashed decoration-current hover:decoration-solid hover:text-gray-400">Home</Link>
    </div>
  );
}

export default App;