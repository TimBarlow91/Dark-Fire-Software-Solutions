import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GlowDivider from '../components/GlowDivider';
import SmokeBackground from '../components/SmokeBackground';

const processSteps = [
    { title: "Discovery & Planning", desc: "We dive deep to understand your vision and goals to create a clear project roadmap." },
    { title: "Design & Prototype", desc: "Crafting sleek, user-friendly designs and prototypes for your feedback and approval." },
    { title: "Development & Testing", desc: "Building robust solutions with clean code, thorough testing, and continuous iteration." },
    { title: "Deployment & Support", desc: "Launching your product smoothly and providing ongoing support and updates." },
];

export default function Home() {
    const features = [
        { title: "Cutting-Edge Tech", desc: "We stay ahead using modern frameworks and performant architecture." },
        { title: "Tailored Solutions", desc: "Your vision, our mission — we build precisely what you need." },
        { title: "Reliable Delivery", desc: "We deliver on time, with transparent communication throughout." }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-black">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="hero-bg relative text-center py-24 text-white overflow-hidden">
                    <SmokeBackground />
                    <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-red-600 drop-shadow-[0_0_8px_rgba(255,0,0,0.8)] text-stroke-grey">
                        Dark Fire Software Solutions
                    </h1>
                    <p className="relative z-10 mt-4 text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
                        Ready to bring your vision to life? Let us help you build innovative web and app solutions tailored to your needs. - Your vision, our FIRE!
                    </p>
                    <button 
                        onClick={() => window.location.href = '/contact'}
                        className="soft-pulse relative z-10 inline-block mt-8 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl border-2 border-blue-700 hover:border-red-500 transition duration-300 shadow-[0_0_10px_rgba(255,0,0,0.7)]"
                    >
                        Bring your vision to life!
                    </button>
                    <p className="relative z-10 mt-4 text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
                        Want to first browse around? Feel free to explore and contact us when you're ready!
                    </p>
                </section>

                <GlowDivider />

                {/* Why Choose Us Section */}
                <section className="relative bg-black py-16 text-white text-center px-4 overflow-hidden">
                    <div className="absolute inset-0 z-0 pointer-events-none floating-dots">
                        {[...Array(80)].map((_, i) => (
                            <div key={i} className="dot-wrapper" style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 12}s`, animationDuration: `${10 + Math.random() * 8}s` }}>
                                <div className="dot" style={{ animationDelay: `${Math.random() * 2}s`, animationDuration: `2s` }}></div>
                            </div>
                        ))}
                    </div>

                    <motion.h2
                        className="relative z-10 text-3xl md:text-4xl font-bold mb-12 drop-shadow-[0_0_6px_red]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        Why Choose Dark Fire?
                    </motion.h2>

                    <div className="relative z-10 max-w-3xl mx-auto flex flex-col gap-10">
                        {features.map((item, i) => (
                            <motion.div
                                key={i}
                                className="bg-gradient-to-br from-red-900/30 to-black border border-white/10 rounded-2xl px-8 py-6 shadow-[0_0_20px_rgba(255,0,0,0.1)] hover:shadow-[0_0_30px_rgba(255,0,0,0.4)] transition transform hover:scale-[1.03]"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.3, duration: 0.6, ease: 'easeOut' }}
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <h3 className="text-2xl font-semibold mb-2 text-red-400 drop-shadow-[0_0_3px_red]">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300 text-base">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Our Process Section */}
                <section className="relative bg-gradient-to-br from-black via-red-900 to-black text-white py-16 px-6 md:px-12 max-w-7xl mx-auto">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-12 text-center drop-shadow-[0_0_8px_red]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        Our Process
                    </motion.h2>
                    <div className="flex flex-col md:flex-row md:justify-between gap-12 max-w-5xl mx-auto">
                        {processSteps.map((step, i) => (
                            <motion.div
                                key={i}
                                className="flex flex-col items-center md:items-start text-center md:text-left max-w-xs"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.3, duration: 0.6, ease: 'easeOut' }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red-700 shadow-[0_0_15px_rgba(255,0,0,0.7)] text-white font-bold text-lg mb-4 select-none">
                                    {i + 1}
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-red-400 drop-shadow-[0_0_6px_red]">
                                    {step.title}
                                </h3>
                                <p className="text-gray-300 text-sm md:text-base">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Call to Action Section */}
                <section className="bg-black text-white py-20 px-6 md:px-12 text-center max-w-5xl mx-auto rounded-xl shadow-[0_0_20px_rgba(255,0,0,0.6)] mt-20 mb-16">
                    <motion.h2
                        className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        Ready to Ignite Your Project?
                    </motion.h2>
                    <button 
                        onClick={() => window.location.href = '/contact'}
                        className="inline-block bg-red-700 hover:bg-red-800 text-white font-semibold py-4 px-12 rounded-lg border border-red-700 shadow-md transition duration-300 hover:shadow-[0_0_15px_rgba(255,0,0,0.8)]"
                    >
                        Contact Us
                    </button>
                </section>
            </main>

            <Footer />
        </div>
    );
}