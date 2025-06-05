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
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, website }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess('Your message has been sent!');
        setName('');
        setEmail('');
        setMessage('');
        setWebsite('');
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex flex-col items-center min-h-screen px-4 py-12 bg-[#f8f5ee]">
      <section className="w-full max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4">Let's Talk</h1>
        <p className="text-lg text-gray-600 mb-8">
          I'm actively seeking opportunities to apply my knowledge in neuroscience and robotics to real-world challenges. If you're looking for a motivated student for internships, thesis collaborations, or have exciting projects to discuss, I'd love to hear from you.
        </p>
        <form className="bg-white rounded-xl shadow p-8 mb-10 flex flex-col gap-4" onSubmit={handleSubmit} autoComplete="off">
          <input
            type="text"
            name="website"
            value={website}
            onChange={e => setWebsite(e.target.value)}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="flex-1 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900 text-base"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="flex-1 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900 text-base"
              required
            />
          </div>
          <textarea
            placeholder="Message"
            rows={5}
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900 text-base resize-none"
            required
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-neutral-900 text-white font-bold px-8 py-3 rounded-full text-lg shadow hover:bg-neutral-800 transition disabled:opacity-60"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </div>
          {success && <div className="text-green-600 font-medium mt-2">{success}</div>}
          {error && <div className="text-red-600 font-medium mt-2">{error}</div>}
        </form>
      </section>
      <IconBar />
    </main>
  );
} 