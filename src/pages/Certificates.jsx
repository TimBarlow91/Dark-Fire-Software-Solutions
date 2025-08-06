import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import academyCert from '../assets/AcademyCert.png';
// import more certs as needed

export default function Certificates() {
    const shineRefs = useRef([]);
    const certRefs = useRef([]);

    // Auto-rotation logic
    useEffect(() => {
        const intervals = certRefs.current.map((ref, i) => {
            let angle = 0;
            return setInterval(() => {
                if (ref) {
                    angle += 0.2;
                    ref.style.transform = `rotateY(${angle}deg) rotateX(${Math.sin(angle / 10) * 2}deg)`;
                }
            }, 30);
        });

        return () => intervals.forEach(clearInterval);
    }, []);

    // Mouse move for shine effect
    const handleMouseMove = (e, index) => {
        const card = shineRefs.current[index];
        if (!card) return;
        const { left, top } = card.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    };

    const certificates = [
        {
            src: academyCert,
            alt: 'FNB App Academy Certificate',
        },
        // Add more certificates here
    ];

    return (
        <section className="bg-black text-white py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-8 drop-shadow-[0_0_6px_red]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Certificates
                </motion.h2>

                <motion.p
                    className="text-white/90 mb-12 text-lg leading-relaxed max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    I consider it a great privilege to have participated in the prestigious FNB App Academy, as well as passing with flying colours to receive the certificate of completion. Stay tuned for more certificates to come!
                </motion.p>

                <div className="overflow-x-auto flex gap-10 px-2 scroll-smooth scroll-snap-x mandatory">
                    {certificates.map((cert, i) => (
                        <div
                            key={i}
                            className="relative min-w-[280px] md:min-w-[500px] scroll-snap-align-center perspective-[1200px] mx-auto"
                            onMouseMove={(e) => handleMouseMove(e, i)}
                            ref={(el) => (shineRefs.current[i] = el)}
                        >
                            <div
                                ref={(el) => (certRefs.current[i] = el)}
                                className="transition-transform duration-300 ease-out relative"
                            >
                                {/* Certificate Image */}
                                <img
                                    src={cert.src}
                                    alt={cert.alt}
                                    className="w-full rounded-xl border-[2px] border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.3)] z-10 relative"
                                />

                                {/* Shine layer */}
                                <div
                                    className="absolute top-0 left-0 w-full h-full rounded-xl z-20 pointer-events-none"
                                    style={{
                                        background: `radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.15), transparent 60%)`,
                                        mixBlendMode: 'screen',
                                        transition: 'background 0.2s ease',
                                    }}
                                />

                                {/* Reflection */}
                                {/* <img
                                    src={cert.src}
                                    alt={`${cert.alt} reflection`}
                                    className="rounded-xl opacity-20 blur-sm mt-2 transform scale-y-[-1]"
                                    style={{
                                        width: '100%',
                                        maxHeight: '150px',
                                        margin: '0 auto',
                                        display: 'block',
                                        objectFit: 'contain',
                                        maskImage: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)',
                                        WebkitMaskImage: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)',
                                    }}
                                /> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}