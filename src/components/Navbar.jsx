import { NavLink, Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/certificates', label: 'Certificates' },
        { path: '/services', label: 'Services' },
        { path: '/contact', label: 'Contact' },
    ];

    // Close menu on outside click
    useEffect(() => {
        function handleClickOutside(e) {
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target) &&
                !buttonRef.current.contains(e.target)
            ) {
                setMenuOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="fixed top-0 z-50 w-full flex justify-center">
            <div className="mt-2 rounded-xl w-[98%] bg-gradient-to-r from-black via-red-900 to-black border-b border-white/10 shadow-[0_4px_10px_rgba(255,255,255,0.15)] backdrop-blur-md">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

                    {/* Logo + Brand (Home Link) */}
                    <Link to="/" className="flex items-center space-x-3 overflow-hidden">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="h-10 w-auto drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"
                        />
                        <div className="leading-tight whitespace-nowrap">
                            <div className="text-white text-sm sm:text-base md:text-lg font-bold tracking-wider drop-shadow-[0_0_3px_white]">
                                Dark Fire
                            </div>
                            <div className="text-white text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest opacity-90 drop-shadow-[0_0_2px_white]">
                                Software Solutions
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center space-x-2 text-white text-sm md:text-base">
                        {navLinks.map(({ path, label }, i) => (
                            <div key={i} className="flex items-center">
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        `relative px-3 py-1 rounded-md transition duration-200 ease-in-out
                                        ${isActive ? 'underline underline-offset-4 text-red-500' : ''}
                                        hover:text-red-400 hover:scale-105 hover:bg-white/5 hover:shadow-[0_0_8px_rgba(255,255,255,0.3)]`
                                    }
                                >
                                    {label}
                                </NavLink>
                                {i < navLinks.length - 1 && (
                                    <span className="h-5 w-[2px] mx-1 bg-white/50 rounded-full shadow-[0_0_4px_rgba(255,255,255,0.6)]" />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden relative z-50">
                        <button
                            ref={buttonRef}
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-white focus:outline-none"
                        >
                            {menuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>

                        {/* Mobile Dropdown Menu */}
                        <div
                            ref={menuRef}
                            className={`absolute right-0 mt-2 w-48 bg-black bg-opacity-90 rounded-lg border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.5)] py-2 px-4 text-white flex flex-col space-y-1 transform transition-all duration-300 ease-in-out origin-top-right
                                ${menuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}
                        >
                            {navLinks.map(({ path, label }, i) => (
                                <NavLink
                                    key={i}
                                    to={path}
                                    onClick={() => setMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `block px-2 py-1 rounded-md transition-all transform
                                        ${isActive ? 'text-red-500 underline' : ''}
                                        hover:bg-white/10 hover:text-red-500
                                        ${menuOpen ? `opacity-100 translate-y-0 delay-${i * 100}` : 'opacity-0 -translate-y-1'}
                                        `
                                    }
                                    style={{ transitionDelay: `${i * 80}ms` }}
                                >
                                    {label}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
