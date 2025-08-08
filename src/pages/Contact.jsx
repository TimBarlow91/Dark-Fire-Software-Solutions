import { useState, useEffect } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (submitted) {
            const timer = setTimeout(() => setSubmitted(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [submitted]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(false);
        setError(null);
        setLoading(true);

        try {
            const response = await fetch('https://formspree.io/f/mnnzovpl', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormData({ name: '', email: '', subject: '', message: '' });
                setSubmitted(true);
            } else {
                const data = await response.json();
                setError(data?.error || 'Something went wrong.');
            }
        } catch (err) {
            setError('Failed to send. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative bg-black text-white px-4 py-12">
            {/* Floating success message */}
            {submitted && (
                <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-3 rounded shadow-lg animate-bounce">
                    ✅ Message sent successfully! We'll be in touch shortly!
                </div>
            )}

            {/* Error message */}
            {error && (
                <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-red-600 text-white px-6 py-3 rounded shadow-lg">
                    ❌ {error}
                </div>
            )}

            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold">Get In Touch</h1>
                <p className="text-red-500 mt-2">Are you ready to bring your ideas to life? We're just a message away.</p>
                <div className="w-32 h-1 bg-red-600 mx-auto mt-4 shadow-[0_0_12px_red]" />
            </div>

            {/* Contact Section */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
                {/* Form */}
                <div className="flex-1 bg-zinc-900 p-8 rounded-xl shadow-xl border border-red-800">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your Name"
                            className="bg-black border border-red-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Your Email"
                            className="bg-black border border-red-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            placeholder="Subject"
                            className="bg-black border border-red-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Your Message"
                            rows="5"
                            className="bg-black border border-red-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                        ></textarea>

                        <button
                            type="submit"
                            className={`mt-4 flex justify-center items-center gap-2 bg-red-600 hover:bg-red-700 transition-all duration-200 rounded px-6 py-2 font-semibold shadow-[0_0_10px_rgba(255,0,0,0.6)] hover:shadow-[0_0_15px_rgba(255,0,0,0.8)] ${loading ? 'opacity-70 cursor-not-allowed' : ''
                                }`}
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <svg
                                        className="animate-spin h-5 w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8v8z"
                                        ></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                'Send Message'
                            )}
                        </button>
                    </form>
                </div>

                {/* Contact Info */}
                <div className="flex-1 flex flex-col gap-6 justify-center">
                    <div className="bg-zinc-900 p-6 rounded-xl shadow-md border border-red-800">
                        <h3 className="text-lg font-bold mb-1">Email</h3>
                        <a href="mailto:darkfiresoftwaresolutions@gmail.com" className="text-red-400 hover:text-white">
                            darkfiresoftwaresolutions@gmail.com
                        </a>
                    </div>
                    <div className="bg-zinc-900 p-6 rounded-xl shadow-md border border-red-800">
                        <h3 className="text-lg font-bold mb-1">Phone</h3>
                        <a href="tel:+27645145714" className="text-red-400 hover:text-white">
                            +27 64 514 5714
                        </a>
                    </div>
                    <div className="bg-zinc-900 p-6 rounded-xl shadow-md border border-red-800">
                        <h3 className="text-lg font-bold mb-1">Location</h3>
                        <p className="text-gray-400">Cape Town, South Africa — Remote-friendly</p>
                    </div>
                </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="text-center mt-16">
                <p className="text-lg mb-4">
                    Prefer a WhatsApp message to chat in your own time at your own convenience?
                </p>
                <a
                    href="https://wa.me/27645145714"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-[0_0_10px_rgba(0,255,0,0.5)] hover:shadow-[0_0_15px_rgba(0,255,0,0.8)] transition"
                >
                    Chat Instantly
                </a>
            </div>

            {/* Map */}
            <div className="mt-16">
                <h2 className="text-center text-xl font-semibold mb-4">We are based in Cape Town, but we work remotely.</h2>
                <div className="w-full h-80 overflow-hidden rounded-xl shadow-xl border border-red-800">
                    <iframe
                        title="Cape Town Map"
                        className="w-full h-full"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.9703673698233!2d18.423300315253886!3d-33.9188619806464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc676b48b57f4d%3A0x8e7fa4646cbda1ec!2sCape%20Town!5e0!3m2!1sen!2sza!4v1625087009026!5m2!1sen!2sza"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}