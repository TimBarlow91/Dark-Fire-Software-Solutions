import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import GlowDivider from '../components/GlowDivider';
import webImg from '../assets/web-dev.png';
import appImg from '../assets/app-dev.png';
import uiuxImg from '../assets/ui-ux.png';

const services = [
    {
        title: 'Web Development',
        image: webImg,
        description:
            'We create high-performance, responsive websites tailored to your business needs. From single-page applications to full-stack platforms, we use modern technologies like React, Node.js, and MongoDB to deliver secure, scalable, and visually engaging websites.',
    },
    {
        title: 'App Development',
        image: appImg,
        description:
            'We design and develop custom mobile apps that run smoothly across Android and iOS. Built with responsive layouts and optimized performance, our apps integrate seamlessly with your existing systems and ensure an intuitive user experience.',
    },
    {
        title: 'UI/UX Design',
        image: uiuxImg,
        description:
            'We craft user experiences that are not only visually stunning but also strategically optimized for usability. From wireframes and prototypes to full UI kits, we ensure your product feels as good as it looks.',
    },
];

export default function Services() {
    const navigate = useNavigate();

    return (
        <>
            <section className="bg-black text-white py-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-12 drop-shadow-[0_0_6px_red]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Our Services
                    </motion.h2>

                    <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                className="flip-card w-72 h-96"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="flip-card-inner relative w-full h-full group perspective">
                                    {/* Front */}
                                    <div className="flip-card-front absolute w-full h-full rounded-2xl bg-zinc-800 border border-red-600 shadow-[0_0_25px_red] p-4 backface-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-40 object-contain"
                                        />
                                        <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
                                    </div>

                                    {/* Back */}
                                    <div className="flip-card-back absolute w-full h-full rounded-2xl bg-zinc-900 border border-red-600 shadow-[0_0_25px_red] p-6 flex items-center justify-center rotate-y-180 backface-hidden">
                                        <p className="text-sm text-white/90">{service.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <GlowDivider />

            <section
                className="bg-red-900 bg-gradient-to-r from-red-800 to-red-600 py-16 mt-20 rounded-xl max-w-4xl mx-auto text-center
    shadow-[0_0_40px_10px_rgba(128,128,128,0.4)] shadow-red-700/50"
            >
                <h3 className="text-3xl font-extrabold text-white mb-6 drop-shadow-[0_0_6px_black]">
                    Ready to bring your ideas to life?
                </h3>
                <button
                    onClick={() => navigate('/contact')}
                    className="px-8 py-3 bg-white text-red-700 font-semibold rounded-full shadow-md transition
        hover:bg-red-50 hover:scale-105 active:scale-95"
                >
                    Contact Us
                </button>
            </section>
        </>
    );
}