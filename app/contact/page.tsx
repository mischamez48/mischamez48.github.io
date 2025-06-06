'use client';
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi';
import IconBar from '../../components/IconBar';
import { useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [website, setWebsite] = useState('');
  const [success, setSuccess] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Honeypot check
    if (website) {
      return;
    }
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`New message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:mischa.mez@epfl.ch?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setSuccess('Your email client should open now. If not, please email me directly at mischa.mez@epfl.ch');
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <main className="flex flex-col items-center min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-[#f8f5ee]">
      <section className="w-full max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3 sm:mb-4 text-neutral-900">Let&apos;s Talk</h1>
        <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
          I&apos;m actively seeking opportunities to apply my knowledge in neuroscience and robotics to real-world challenges. If you&apos;re looking for a motivated student for internships, thesis collaborations, or have exciting projects to discuss, I&apos;d love to hear from you.
        </p>
        <form className="bg-white rounded-xl shadow p-4 sm:p-6 lg:p-8 mb-8 sm:mb-10 flex flex-col gap-3 sm:gap-4" onSubmit={handleSubmit} autoComplete="off">
          <input
            type="text"
            name="website"
            value={website}
            onChange={e => setWebsite(e.target.value)}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="flex-1 border border-gray-300 rounded-md px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900 text-sm sm:text-base"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="flex-1 border border-gray-300 rounded-md px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900 text-sm sm:text-base"
              required
            />
          </div>
          <textarea
            placeholder="Message"
            rows={4}
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="border border-gray-300 rounded-md px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900 text-sm sm:text-base resize-none min-h-[100px] sm:min-h-[120px]"
            required
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-neutral-900 text-white font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base lg:text-lg shadow hover:bg-neutral-800 transition w-full sm:w-auto"
            >
              Send Email
            </button>
          </div>
          {success && <div className="text-green-600 font-medium mt-2 text-sm sm:text-base break-words">{success}</div>}
        </form>
      </section>
      <div className="mt-4 sm:mt-8">
        <IconBar />
      </div>
    </main>
  );
} 