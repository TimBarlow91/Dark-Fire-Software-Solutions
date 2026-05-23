import PyroSuiteNavbar from '../components/PyroSuiteNavbar';
import PyroSuiteFooter from '../components/PyroSuiteFooter';

export default function Login() {
    return (
        <div className="min-h-screen flex flex-col bg-black">
            {/* Now utilizing the PyroSuite-specific Navbar */}
            <PyroSuiteNavbar />
            
            <section className="flex-grow flex items-center justify-center px-4 pt-24 pb-12">
                <div className="w-full max-w-md bg-zinc-900 border border-red-900 p-8 rounded-2xl shadow-[0_0_20px_rgba(255,0,0,0.3)]">
                    <h2 className="text-3xl font-bold text-center mb-8 text-white">Login to <span className="text-red-600">PyroSuite</span></h2>
                    
                    <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="p-3 bg-black border border-white/10 rounded-lg focus:border-red-600 outline-none transition" 
                            required 
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="p-3 bg-black border border-white/10 rounded-lg focus:border-red-600 outline-none transition" 
                            required 
                        />
                        <button 
                            type="submit" 
                            className="w-full py-3 mt-2 bg-red-700 hover:bg-red-800 rounded-lg font-bold transition shadow-[0_0_10px_rgba(255,0,0,0.5)] active:translate-y-[2px]"
                        >
                            Login
                        </button>
                    </form>
                    
                    <div className="mt-6 pt-6 border-t border-white/10 text-center">
                        <p className="text-sm text-gray-400 mb-4">Not registered for PyroSuite?</p>
                        <a 
                            href="/register"
                            className="block w-full py-3 border border-red-700 text-red-500 hover:bg-red-700 hover:text-white rounded-lg font-bold transition active:translate-y-[2px]"
                        >
                            Register for PyroSuite
                        </a>
                    </div>
                </div>
            </section>
            
            {/* Now utilizing the PyroSuite-specific Footer */}
            <PyroSuiteFooter />
        </div>
    );
}