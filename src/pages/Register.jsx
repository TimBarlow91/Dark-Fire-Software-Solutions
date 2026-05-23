import { useState } from 'react';
import PyroSuiteNavbar from '../components/PyroSuiteNavbar';
import PyroSuiteFooter from '../components/PyroSuiteFooter';

export default function Register() {
    return (
        <div className="min-h-screen flex flex-col bg-black">
            <PyroSuiteNavbar isLoggedIn={false} />
            
            <main className="flex-grow flex items-center justify-center px-4 pt-20">
                <div className="w-full max-w-md bg-zinc-900 border border-red-900 p-8 rounded-2xl shadow-[0_0_20px_rgba(255,0,0,0.3)]">
                    <h2 className="text-3xl font-bold text-center mb-8 text-red-600">Create Account</h2>
                    <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                        <input type="text" placeholder="Full Name" className="p-3 bg-black border border-white/10 rounded-lg focus:border-red-600 outline-none transition" required />
                        <input type="email" placeholder="Email" className="p-3 bg-black border border-white/10 rounded-lg focus:border-red-600 outline-none transition" required />
                        <input type="password" placeholder="Password" className="p-3 bg-black border border-white/10 rounded-lg focus:border-red-600 outline-none transition" required />
                        <button type="submit" className="w-full py-3 mt-2 bg-red-700 hover:bg-red-800 rounded-lg font-bold transition shadow-[0_0_10px_rgba(255,0,0,0.5)]">
                            Register
                        </button>
                    </form>
                    <div className="mt-6 pt-6 border-t border-white/10 text-center">
                        <p className="text-sm text-gray-400">
                            Already have an account? 
                            <button onClick={() => window.location.href = '/login'} className="ml-2 text-red-500 hover:underline">Login here</button>
                        </p>
                    </div>
                </div>
            </main>

            <PyroSuiteFooter isLoggedIn={false} />
        </div>
    );
}