import { NavLink, Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
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
            <div className="rounded-xl w-[100%] bg-gradient-to-r from-black via-red-900 to-black shadow-[0_0_15px_rgba(255,0,0,0.7)] backdrop-blur-md">
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
                            className="text-white focus:outline-none transition-transform duration-200 active:scale-90"
                        >
                            {menuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>

                        {/* Mobile Dropdown Menu */}
                        <div
                        ref={menuRef}
                            className={`absolute right-0 mt-3 w-52 bg-gradient-to-b from-neutral-950 to-black rounded-xl border border-red-500/30 p-2 text-white flex flex-col transform-gpu transition-all duration-300 ease-out origin-top-right
                                ${menuOpen 
                                ? 'opacity-100 [transform:perspective(800px)_rotateX(0deg)_scale(1)] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9),0_0_20px_rgba(239,68,68,0.55),0_0_50px_rgba(239,68,68,0.3)]' 
                                : 'opacity-0 [transform:perspective(800px)_rotateX(-25deg)_scale(0.93)] pointer-events-none shadow-none'
                            }`}
                        >
                            {navLinks.map(({ path, label }, i) => (
                                <div key={i} className="w-full flex flex-col">
                                    <NavLink
                                        to={path}
                                        onClick={() => setMenuOpen(false)}
                                        className={({ isActive }) =>
                                            `block w-full px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 transform-gpu origin-center
                                            ${isActive 
                                                ? 'text-red-500 bg-red-950/20 border-l-2 border-red-500 font-semibold' 
                                                : 'text-zinc-300'
                                            }
                                            hover:text-white hover:bg-gradient-to-r hover:from-neutral-900 hover:to-neutral-800
                                            hover:scale-[1.04] hover:[transform:perspective(300px)_translateZ(12px)_rotateY(-6deg)]
                                            hover:shadow-[-5px_5px_15px_rgba(239,68,68,0.2)]`
                                        }
                                        style={{ 
                                            transitionDelay: menuOpen ? `${i * 60}ms` : '0ms',
                                            transformStyle: 'preserve-3d'
                                        }}
                                    >
                                        {label}
                                    </NavLink>
                                    
                                    {/* Visual Separators */}
                                    {i < navLinks.length - 1 && (
                                        <div className="border-b border-white/5 my-1 mx-2" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}