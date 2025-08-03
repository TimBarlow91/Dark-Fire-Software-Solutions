import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-black via-red-900 to-black text-gray-300 pt-12 pb-6 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 text-center md:text-left">

                {/* Branding */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Dark Fire Software Solutions</h3>
                    <p className="text-sm max-w-xs text-gray-400">
                        Fueling innovation with fire — custom web and mobile apps tailored to your vision.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col gap-2 text-sm">
                    <a href="/" className="hover:text-white transition">Home</a>
                    <a href="/about" className="hover:text-white transition">About</a>
                    <a href="/services" className="hover:text-white transition">Services</a>
                    <a href="/contact" className="hover:text-white transition">Contact</a>
                </div>

                {/* Social Icons */}
                <div className="flex flex-col items-center md:items-end gap-4">
                    <p className="text-sm text-gray-400">Connect with us:</p>
                    <div className="flex gap-4 text-2xl">
                        <a
                            href="https://facebook.com/YourPage"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative"
                        >
                            <FaFacebookF className="text-gray-300 group-hover:text-white transition duration-200 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] active:scale-90" />
                            <span className="tooltip">Facebook</span>
                        </a>

                        <a
                            href="https://instagram.com/YourPage"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative"
                        >
                            <FaInstagram className="text-gray-300 group-hover:text-white transition duration-200 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] active:scale-90" />
                            <span className="tooltip">Instagram</span>
                        </a>

                        <a
                            href="https://wa.me/27831234567"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative"
                        >
                            <FaWhatsapp className="text-gray-300 group-hover:text-green-400 transition duration-200 group-hover:drop-shadow-[0_0_6px_rgba(0,255,0,0.4)] active:scale-90" />
                            <span className="tooltip">WhatsApp</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-red-800 my-6 mx-auto w-full max-w-6xl" />

            <div className="text-xs text-gray-500 text-center">
                © {new Date().getFullYear()} Dark Fire Software Solutions. All rights reserved. - Developed by Tim Barlow
            </div>
        </footer>
    );
}