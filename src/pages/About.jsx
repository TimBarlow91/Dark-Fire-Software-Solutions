import { motion } from 'framer-motion';
import GlowDivider from '../components/GlowDivider';
import TechStack from '../components/TechStack';
import OurProcess from '../components/OurProcesses';

export default function About() {
    return (
        <>
            <section className="bg-black py-16 text-white px-4">
                <div className="max-w-5xl mx-auto rounded-xl border-3 border-gray-700 shadow-lg shadow-gray-600/100 backdrop-blur-sm bg-black/70 p-8">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-center mb-8 drop-shadow-[0_0_6px_red]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        About Dark Fire Software Solutions
                    </motion.h2>

                    <div className="max-w-4xl mx-auto space-y-6">
                        <motion.p
                            className="text-lg md:text-xl text-gray-300"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            At Dark Fire Software Solutions, we believe in transforming your vision into robust digital solutions. With a blend of modern web technologies and creative strategy, we ensure your projects remain both cutting‑edge and reliable.
                        </motion.p>
                        <motion.p
                            className="text-lg md:text-xl text-gray-300"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            We firmly believe collaboration is key. We work closely with you to understand your goals and craft solutions that not only meet your needs but set new industry standards. We don't just create and leave you in the dark, no, we include you in every step of the process from planning to production. Letting you make informed decisions and necessary changes in how your final project will match your vision.
                        </motion.p>
                        <motion.p
                            className="text-lg md:text-xl text-gray-300"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Let us ignite your digital transformation and bring your visionary ideas to life.
                        </motion.p>
                        <motion.p
                            className="text-lg md:text-xl text-gray-300"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            viewport={{ once: true }}
                        >
                            —— Your vision, our fire! ——
                        </motion.p>
                    </div>
                </div>
            </section>

            <GlowDivider />

            <section>
                <TechStack />
            </section>

            <GlowDivider />

            <section>
                <OurProcess />
            </section>
        </>
    );
}