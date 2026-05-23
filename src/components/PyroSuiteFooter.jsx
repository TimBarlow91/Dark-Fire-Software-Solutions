import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function PyroSuiteFooter({ isLoggedIn }) {
    const links = isLoggedIn 
        ? [
            { path: '/dashboard', label: 'Dashboard' },
            { path: '/tools', label: 'Tools' },
            { path: '/analytics', label: 'Analytics' },
            { path: '/settings', label: 'Settings' },
          ]
        : [];

    return (
        <footer className="bg-gradient-to-b from-black via-red-900 to-black text-gray-300 pt-12 pb-6 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2">PyroSuite</h3>
                    <p className="text-sm max-w-xs text-gray-400">Secure, efficient, and powerful software access.</p>
                </div>

                <div className="flex flex-col gap-2 text-sm text-center">
                    {links.map(link => (
                        <a key={link.path} href={link.path} className="hover:text-white transition">{link.label}</a>
                    ))}
                </div>

                <div className="flex gap-6 text-2xl">
                    <a href="https://www.facebook.com/profile.php?id=61575693601428" target="_blank" rel="noopener noreferrer"><FaFacebookF className="text-[#1877F2]" /></a>
                    <a href="https://www.instagram.com/darkfiresoftware/" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-[#E4405F]" /></a>
                    <a href="https://wa.me/27645145714" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="text-[#25D366]" /></a>
                </div>
            </div>
            <div className="border-t border-red-800 my-6 mx-auto w-full max-w-6xl" />
            <div className="text-xs text-gray-500 text-center">© {new Date().getFullYear()} PyroSuite. Developed by Tim Barlow</div>
        </footer>
    );
}