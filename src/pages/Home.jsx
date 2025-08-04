import { motion } from 'framer-motion';
import GlowDivider from '../components/GlowDivider';
import SmokeBackground from '../components/SmokeBackground';

const featureVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: window.innerWidth < 768 ? 0.3 : 0.6,
            ease: 'easeOut',
        },
    }),
};

export default function Home() {
    return (
        <div className="relative min-h-screen bg-black text-white overflow-hidden">
            {/* Animated Dots Background (motion-safe only) */}
            <div className="absolute inset-0 z-0 pointer-events-none motion-safe:block motion-reduce:hidden">
                {[...Array(300)].map((_, i) => {
                    const translateStyle = {
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 12}s`,
                        animationDuration: `${12 + Math.random() * 10}s`,
                        willChange: 'transform',
                    };

                    const scaleStyle = {
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: '3s',
                        willChange: 'transform, opacity',
                    };

                    return (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full opacity-10 motion-safe:animate-float"
                            style={translateStyle}
                        >
                            <div
                                className="w-full h-full bg-white rounded-full motion-safe:animate-pulse"
                                style={scaleStyle}
                            ></div>
                        </div>
                    );
                })}
            </div>

            {/* Static dots fallback (motion-reduce only) */}
            <div className="absolute inset-0 z-0 pointer-events-none hidden motion-reduce:block">
                {[...Array(80)].map((_, i) => {
                    const style = {
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    };
                    return (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full opacity-10"
                            style={style}
                        ></div>
                    );
                })}
            </div>

            {/* Smoke effect overlay */}
            <SmokeBackground />

            {/* Page content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-32 text-center sm:pt-40">
                <motion.h1
                    className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl motion-safe:opacity-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    custom={0}
                    variants={featureVariants}
                >
                    Dark Fire Software Solutions
                </motion.h1>

                <motion.p
                    className="mt-6 max-w-2xl text-lg text-gray-300 sm:text-xl motion-safe:opacity-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    custom={1}
                    variants={featureVariants}
                >
                    Igniting ideas into blazing reality. We build high-performance, visually captivating web apps tailored to your brand.
                </motion.p>

                <GlowDivider />

                <motion.div
                    className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 motion-safe:opacity-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    custom={2}
                    variants={featureVariants}
                >
                    {['Custom Web Apps', 'Mobile-Friendly Design', 'E-Commerce Builds'].map((feature, i) => (
                        <motion.div
                            key={feature}
                            className="bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/10"
                            custom={i + 3}
                            variants={featureVariants}
                        >
                            <h3 className="text-xl font-semibold text-white">{feature}</h3>
                            <p className="mt-2 text-sm text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, rerum.
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}