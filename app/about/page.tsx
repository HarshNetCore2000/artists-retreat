'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-white mb-8"
      >
        About Artists Retreat
      </motion.h1>

      <motion.div
        className="space-y-6 text-lg text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <p>
          Welcome to <span className="font-semibold text-white">Artists Retreat</span> — a creative wedding studio dedicated to capturing the beauty, emotion, and magic of life’s most precious moments.
        </p>
        <p>
          Our team of passionate photographers and visual storytellers specializes in wedding and event photography. Whether it's a grand celebration or an intimate gathering, we focus on real emotions, candid smiles, and timeless love.
        </p>
        <p>
          Based in <span className="font-medium">Jaipur, Rajasthan</span>, we’ve had the honor of covering countless weddings and cultural events, turning fleeting moments into lifelong memories.
        </p>
        <p>
          From traditional rituals to modern ceremonies — we don’t just take photos; we create art that speaks.
        </p>
      </motion.div>

      <motion.div
        className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.img
          src="/images/about1.jpg"
          alt="Our Team at Work"
          className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
        />
        <motion.img
          src="/images/about2.jpg"
          alt="Captured Moments"
          className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>
    </section>
  )
}
