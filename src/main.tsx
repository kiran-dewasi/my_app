import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './button';
import { Input } from './input';
import { Card, CardContent } from './card';

export default function Home() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const bg = document.getElementById('space-bg');
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      if (bg) bg.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const flyVariants = {
    animate: {
      x: ['-10vw', '110vw'],
      y: ['0vh', '20vh'],
      transition: {
        x: {
          repeat: Infinity,
          duration: 30,
          ease: 'linear',
        },
        y: {
          repeat: Infinity,
          duration: 30,
          ease: 'easeInOut',
        },
      },
    },
  };

  return (
    <div className="relative min-h-screen text-white flex flex-col items-center px-6 overflow-hidden">
      {/* Space Background */}
      <div
        id="space-bg"
        className="absolute top-0 left-0 w-full h-full -z-10"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2020/02/11/11/17/galaxy-4830220_1280.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'transform 0.3s ease-out',
          filter: 'brightness(1.2) contrast(1.1)',
        }}
      />

      {/* Header */}
      <header className="w-full max-w-6xl py-10 flex justify-between items-center">
        <motion.h1
          className="text-3xl font-bold text-[#E31C25]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          K24.AI
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <Button className="bg-black text-[#E31C25] hover:bg-[#1C1C1C] transition-colors duration-300">
            Join Waitlist
          </Button>
        </motion.div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 max-w-3xl">
        <motion.h2
          className="text-5xl font-extrabold leading-tight mb-6 text-[#E31C25]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          The Future of Intelligent Orchestration
        </motion.h2>
        <motion.p
          className="text-lg text-black mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          K24.AI is building the next-gen agentic operating system — a modular
          AI that understands multimodal input, automates complex workflows, and
          brings true autonomy to your digital life.
        </motion.p>
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <Input placeholder="Enter your email" className="w-64 text-black" />
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button className="bg-black text-[#E31C25] hover:bg-[#1C1C1C] transition-colors duration-300">
              Join Waitlist
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-24 w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          {
            title: 'Multimodal AI',
            desc: 'Text, voice, images — K24.AI understands it all.',
          },
          {
            title: 'Autonomous Agents',
            desc: 'Modular agents that think, plan, and act for you.',
          },
          {
            title: 'Real-time Intelligence',
            desc: 'Web-connected, always up-to-date, always relevant.',
          },
          {
            title: 'OS-Level Integration',
            desc: 'Integrates seamlessly with apps, APIs, and systems.',
          },
          {
            title: 'Built for Developers',
            desc: 'Extend, customize, and embed your own flows.',
          },
          {
            title: 'Privacy-First',
            desc: 'Your data. Your control. No compromise.',
          },
        ].map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[#1C1F26]/80 backdrop-blur-sm text-white border border-[#1F4E79]">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#E31C25]">
                  {f.title}
                </h3>
                <p className="text-gray-100 text-sm">{f.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <motion.footer
        className="w-full text-center text-sm text-white bg-black py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="mb-4">
          <p className="text-[#E31C25] font-semibold">Follow Us:</p>
          <div className="flex justify-center gap-6 mt-2">
            <a
              href="https://twitter.com/k24ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1DA1F2] transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com/company/k24ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0077B5] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/k24ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#6e5494] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="mb-2">
          <p className="text-white">
            Contact us:{' '}
            <a
              href="mailto:team@k24.ai"
              className="text-blue-400 hover:text-blue-600 transition-colors"
            >
              team@k24.ai
            </a>
          </p>
        </div>
        <div className="text-white">
          © 2025 <span className="text-[#1F4E79] font-semibold">K24.AI</span>.
          All rights reserved.
        </div>
      </motion.footer>
    </div>
  );
}
