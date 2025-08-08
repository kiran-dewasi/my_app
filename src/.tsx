'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Card, CardContent } from './components/ui/card';

export default function Home() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const bg = document.getElementById('space-bg');
      if (bg) {
        const { clientX: x, clientY: y } = e;
        bg.style.backgroundPosition = `${x / 50}px ${y / 50}px`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div id="space-bg" className="min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold text-center pt-10">K24.AI</h1>
      <Card className="max-w-md mx-auto mt-10 p-4">
        <CardContent>
          <Input placeholder="Type something..." className="mb-4" />
          <Button>Click Me</Button>
        </CardContent>
      </Card>
    </div>
  );
}
