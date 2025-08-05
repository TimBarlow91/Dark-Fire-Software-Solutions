import { motion } from 'framer-motion';
import { useState } from 'react';

const steps = [
    { title: 'Plan', desc: 'Understand requirements and create roadmap.' },
    { title: 'Design', desc: 'Create wireframes and prototypes.' },
    { title: 'Build', desc: 'Develop the product with best practices.' },
    { title: 'Launch', desc: 'Deploy and monitor the product.' },
    { title: 'Maintain', desc: 'Ongoing support and improvements.' },
];

export default function OurProcess() {
    // Track which card is "touched" to trigger animation on touch devices
    const [touchedIndex, setTouchedIndex] = useState(null);

    return (
        <section className="bg-black text-white py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-10 drop-shadow-[0_0_6px_red]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Our Process
                </motion.h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            className="bg-gradient-to-br from-red-900/30 to-black border border-white/10 rounded-2xl p-6 shadow-[0_0_20px_rgba(255,0,0,0.1)] cursor-pointer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 0, 0, 0.6)' }}
                            animate={touchedIndex === index ? { scale: 1.05, boxShadow: '0 0 30px rgba(255, 0, 0, 0.6)' } : { scale: 1, boxShadow: '0 0 20px rgba(255, 0, 0, 0.1)' }}
                            onTouchStart={() => setTouchedIndex(index)}
                            onTouchEnd={() => setTouchedIndex(null)}
                        >
                            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red-700 shadow-[0_0_15px_rgba(255,0,0,0.7)] text-white font-bold text-lg mb-4 select-none">
                                {index + 1}
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-red-400 drop-shadow-[0_0_6px_red]">
                                {step.title}
                            </h3>
                            <p className="text-gray-300 text-sm md:text-base">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}