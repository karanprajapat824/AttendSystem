import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';




const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    password: ''
  });

  const navigateTo = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      navigateTo('/dashboard');
      // Handle success or display error message to the user
    } catch (error) {
      console.error('Error:', error);
      // Handle error or display error message to the user
    }
  };



  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-[#f0f9ff] px-4 py-12 dark:bg-[#0c2b4a]">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-[#0c2b4a] dark:text-[#f0f9ff]">
            Register your institute
          </h2>
          <p className="mt-2 text-center text-sm text-[#4b5563] dark:text-[#94a3b8]">
            Secure your institute with a unique ID and password.
          </p>
        </div>
        <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="institute-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Institute Name
            </label>
            <input
              type="text"
              id="institute-name"
              autoComplete="institute-name"
              required
              name="institute-name"
              className="h-10 border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1 block w-full rounded-md border-[#d1d5db] shadow-sm focus:border-[#3b82f6] focus:ring-[#3b82f6] dark:border-[#475569] dark:bg-[#0c2b4a] dark:text-[#f0f9ff] dark:focus:border-[#3b82f6]"
            />
          </div>
          <div>
            <label htmlFor="institute-address" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Institute Address
            </label>
            <textarea
              id="institute-address"
              name="institute-address"
              rows="3"
              required
              className="min-h-[80px] border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1 block w-full rounded-md border-[#d1d5db] shadow-sm focus:border-[#3b82f6] focus:ring-[#3b82f6] dark:border-[#475569] dark:bg-[#0c2b4a] dark:text-[#f0f9ff] dark:focus:border-[#3b82f6]"
            ></textarea>
          </div>
          <div>
            <label htmlFor="institute-id" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Institute ID
            </label>
            <input
              type="text"
              id="institute-id"
              autoComplete="institute-id"
              required
              name="institute-id"
              className="h-10 border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1 block w-full rounded-md border-[#d1d5db] shadow-sm focus:border-[#3b82f6] focus:ring-[#3b82f6] dark:border-[#475569] dark:bg-[#0c2b4a] dark:text-[#f0f9ff] dark:focus:border-[#3b82f6]"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Password
            </label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              required
              name="password"
              className="h-10 border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1 block w-full rounded-md border-[#d1d5db] shadow-sm focus:border-[#3b82f6] focus:ring-[#3b82f6] dark:border-[#475569] dark:bg-[#0c2b4a] dark:text-[#f0f9ff] dark:focus:border-[#3b82f6]"
            />
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full bg-[#3b82f6] hover:bg-[#2563eb] text-[#f0f9ff]"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register
