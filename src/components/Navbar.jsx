import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [pyroOpen, setPyroOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);
    const pyroRef = useRef(null);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/services', label: 'Services' },
        { path: '/contact', label: 'Contact' },
    ];

    useEffect(() => {
        function handleClickOutside(e) {
            if (menuRef.current && !menuRef.current.contains(e.target) && !buttonRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
            if (pyroRef.current && !pyroRef.current.contains(e.target)) {
                setPyroOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="fixed top-0 z-50 w-full flex justify-center">
            <div className="rounded-xl w-[100%] bg-gradient-to-r from-black via-red-900 to-black shadow-[0_0_15px_rgba(255,0,0,0.7)] backdrop-blur-md">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                    <a href="/" className="flex items-center space-x-3 overflow-hidden">
                        <img src="/logo.png" alt="Logo" 
                        className="h-10 w-auto rounded-full drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]" />
                        <div className="leading-tight whitespace-nowrap text-left">
                            <div className="text-white text-sm sm:text-base md:text-lg font-bold tracking-wider">Dark Fire</div>
                            <div className="text-white text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest opacity-90">Software Solutions</div>
                        </div>
                    </a>
                    
                    <div className="hidden md:flex items-center h-16 text-white text-sm md:text-base">
                        {navLinks.map(({ path, label }, i) => (
                            <a key={i} href={path} 
                               className="relative px-8 h-16 flex items-center transition-all duration-200 
                               hover:scale-105 hover:text-red-400 active:translate-y-[2px] 
                               after:absolute after:right-0 after:top-4 after:bottom-4 after:w-[1px] after:bg-white/30 after:shadow-[0_0_8px_white]">
                                {label}
                            </a>
                        ))}
                        
                        <div className="relative h-16" ref={pyroRef}>
                            <button 
                                onClick={() => setPyroOpen(!pyroOpen)} 
                                className="px-8 h-16 flex items-center transition-all duration-200 
                                hover:scale-105 hover:text-red-400 active:translate-y-[2px] font-bold"
                            >
                                PyroSuite ▾
                            </button>
                            
                            <div className={`absolute right-0 top-16 w-full min-w-[150px] bg-black border border-red-900 shadow-[0_0_15px_rgba(255,0,0,0.7)] z-50 transition-all duration-300 ease-in-out ${pyroOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                <a href="/login" className="block px-6 py-3 border-b border-red-900 shadow-[0_2px_4px_rgba(255,0,0,0.3)] hover:bg-red-900/50 hover:scale-[1.02] transition-all">Login</a>
                                <a href="/register" className="block px-6 py-3 hover:bg-red-900/50 hover:scale-[1.02] transition-all">Register</a>
                            </div>
                        </div>
                    </div>

                    <div className="md:hidden relative z-50">
                        <button ref={buttonRef} onClick={() => setMenuOpen(!menuOpen)} className="text-white">
                            {menuOpen ? "✕" : "☰"}
                        </button>
                        <div ref={menuRef} className={`absolute right-0 mt-3 w-52 bg-black border border-red-900 rounded-xl p-2 text-white shadow-[0_0_15px_rgba(255,0,0,0.7)] ${menuOpen ? 'block' : 'hidden'}`}>
                            {navLinks.map(({ path, label }, i) => (
                                <a key={i} href={path} onClick={() => setMenuOpen(false)} className="block px-4 py-2 hover:bg-red-900/50 transition-all">{label}</a>
                            ))}
                            <div className="border-t border-red-900 my-2"></div>
                            <a href="/login" className="block px-4 py-2 hover:bg-red-900/50 transition-all">Login</a>
                            <a href="/register" className="block px-4 py-2 hover:bg-red-900/50 transition-all">Register</a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}