import { useEffect, useRef, useState } from 'react';

export default function PyroSuiteNavbar({ isLoggedIn }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [pyroOpen, setPyroOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);
    const pyroRef = useRef(null);

    const navLinks = isLoggedIn 
        ? [
            { path: '/dashboard', label: 'Dashboard' },
            { path: '/tools', label: 'Tools' },
            { path: '/analytics', label: 'Analytics' },
            { path: '/settings', label: 'Settings' },
          ]
        : [
            { path: '/', label: 'DarkFire Home' },
            { path: '/pyrosuite', label: 'About PyroSuite' },
          ];

    useEffect(() => {
        function handleClickOutside(e) {
            if (menuRef.current && !menuRef.current.contains(e.target) && !buttonRef.current.contains(e.target)) setMenuOpen(false);
            if (pyroRef.current && !pyroRef.current.contains(e.target)) setPyroOpen(false);
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="fixed top-0 z-50 w-full flex justify-center">
            <div className="rounded-xl w-[100%] bg-gradient-to-r from-black via-red-900 to-black shadow-[0_0_15px_rgba(255,0,0,0.7)] backdrop-blur-md">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                    <a href="/" className="flex items-center space-x-3">
                        <img src="/PyroSuite.png" alt="PyroSuite Logo" className="h-10 w-auto rounded-full drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]" />
                        <div className="leading-tight text-white">
                            <div className="font-bold tracking-wider">PyroSuite</div>
                            <div className="text-[10px] font-semibold tracking-widest opacity-90">Secure Access</div>
                        </div>
                    </a>
                    
                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center h-16 text-white text-sm">
                        {navLinks.map(({ path, label }, i) => (
                            <a key={i} href={path} className="px-8 h-16 flex items-center hover:text-red-400">{label}</a>
                        ))}
                        
                        {isLoggedIn && (
                            <div className="relative h-16" ref={pyroRef}>
                                <button onClick={() => setPyroOpen(!pyroOpen)} className="px-8 h-16 font-bold hover:text-red-400">Account ▾</button>
                                <div className={`absolute right-0 top-16 w-full min-w-[150px] bg-black border border-red-900 ${pyroOpen ? 'block' : 'hidden'}`}>
                                    <a href="/profile" className="block px-6 py-3 hover:bg-red-900/50">Profile</a>
                                    <a href="/logout" className="block px-6 py-3 hover:bg-red-900/50">Logout</a>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden relative z-50">
                        <button ref={buttonRef} onClick={() => setMenuOpen(!menuOpen)} className="text-white">
                            {menuOpen ? "✕" : "☰"}
                        </button>
                        <div ref={menuRef} className={`absolute right-0 mt-3 w-52 bg-black border border-red-900 rounded-xl p-2 text-white ${menuOpen ? 'block' : 'hidden'}`}>
                            {navLinks.map(({ path, label }, i) => (
                                <a key={i} href={path} onClick={() => setMenuOpen(false)} className="block px-4 py-2 hover:bg-red-900/50">{label}</a>
                            ))}
                            {isLoggedIn && (
                                <>
                                    <div className="border-t border-red-900 my-2"></div>
                                    <a href="/profile" className="block px-4 py-2 hover:bg-red-900/50">Profile</a>
                                    <a href="/logout" className="block px-4 py-2 hover:bg-red-900/50">Logout</a>
                                </>
                            )}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}