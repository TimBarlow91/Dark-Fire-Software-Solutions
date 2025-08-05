import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const techStack = [
    { name: 'HTML5', src: '/tech/html.svg', tooltip: 'Markup Language' },
    { name: 'CSS3', src: '/tech/css.svg', tooltip: 'Styling Language' },
    { name: 'JavaScript', src: '/tech/javascript.svg', tooltip: 'Programming Language' },
    { name: 'React', src: '/tech/react.svg', tooltip: 'Frontend Library' },
    { name: 'Node.js', src: '/tech/nodejs.svg', tooltip: 'Backend Runtime' },
    { name: 'TailwindCSS', src: '/tech/tailwind.svg', tooltip: 'Utility-First CSS Framework' },
    { name: 'MongoDB', src: '/tech/mongodb.svg', tooltip: 'NoSQL Database' },
    { name: 'Express.js', src: '/tech/express.svg', tooltip: 'Backend Framework', glow: true },
    { name: 'Vercel', src: '/tech/vercel.svg', tooltip: 'Deployment Platform', glow: true },
];

export default function TechStack() {
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
                    Tech Stack & Tools We Use
                </motion.h2>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-10 justify-items-center">
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            data-tooltip-id={tech.name}
                            data-tooltip-content={tech.tooltip}
                            className="flex flex-col items-center"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={tech.src}
                                alt={tech.name}
                                className={`w-20 h-20 object-contain hover:scale-110 transition-transform duration-300 ${tech.glow ? 'drop-shadow-[0_0_6px_white]' : ''
                                    }`}
                            />
                            <p className="mt-2 text-sm text-white/80">{tech.name}</p>
                            <Tooltip id={tech.name} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}