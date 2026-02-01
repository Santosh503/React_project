import {GraduationCap, BookOpen, Users, Building2,} from "lucide-react";
import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">

            {/* Navbar */}
            <nav className="bg-blue-950 text-white">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
                    <div className="flex items-center gap-3">
                        <GraduationCap className="w-8 h-8 text-blue-300" />
                        <span className="text-xl font-bold">
                            <a href="/home">
                            Kathmandu University
                            </a>
                        </span>
                    </div>

                    <div className="flex gap-3">
                        <Link
                            to="/signup" className="px-4 py-2 text-sm font-medium border border-blue-300 rounded-lg hover:bg-blue-800 transition">
                            Sign Up
                        </Link>
                        <Link to="/login" className="px-4 py-2 text-sm font-medium border border-blue-300 rounded-lg hover:bg-blue-800 transition">
                            Log In
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white">
                <div className="max-w-5xl mx-auto text-center px-6 py-28">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                        Excellence Through Education
                    </h1>

                    <p className="max-w-3xl mx-auto text-blue-200 text-lg mb-10">
                        Kathmandu University is committed to academic excellence,
                        innovative research, and meaningful contributions to society.
                    </p>

                    <div className="flex justify-center gap-4">
                        <button className="px-6 py-3 border border-blue-200 rounded-xl hover:bg-blue-800 transition">
                            <a href="https://soed.ku.edu.np/apply-now-bachelor-programs-2266" target="_blank" rel="noopener noreferrer">
                            Explore Programs
                            </a>
                        </button>
                        <button className="px-12 py-3 border border-blue-200 rounded-xl hover:bg-blue-800 transition">
                            <a href="https://ku.edu.np/" target="_blank" rel="noopener noreferrer">
                            About KU
                            </a>
                        </button>
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section className="max-w-7xl mx-auto px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                        <BookOpen className="w-10 h-10 text-blue-600 mb-4" />
                        <h3 className="text-lg font-semibold mb-2">
                            Academic Programs
                        </h3>
                        <p className="text-slate-600 text-sm">
                            Undergraduate, Graduate, and PhD programs across science,
                            engineering, management, and arts.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                        <Users className="w-10 h-10 text-blue-600 mb-4" />
                        <h3 className="text-lg font-semibold mb-2">
                            Student Community
                        </h3>
                        <p className="text-slate-600 text-sm">
                            A diverse, inclusive student body focused on leadership,
                            collaboration, and innovation.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                        <Building2 className="w-10 h-10 text-blue-600 mb-4" />
                        <h3 className="text-lg font-semibold mb-2">
                            Campus Life
                        </h3>
                        <p className="text-slate-600 text-sm">
                            A peaceful campus in Dhulikhel with modern facilities
                            and a supportive academic environment.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                        <GraduationCap className="w-10 h-10 text-blue-600 mb-4" />
                        <h3 className="text-lg font-semibold mb-2">
                            Research & Innovation
                        </h3>
                        <p className="text-slate-600 text-sm">
                            Strong emphasis on research, entrepreneurship,
                            and real-world problem solving.
                        </p>
                    </div>

                </div>
            </section>

            {/* Footer */}
            <footer className="bg-blue-900 text-blue-200 py-6 text-center text-sm">
                © {new Date().getFullYear()} Kathmandu University. All rights reserved.
            </footer>
        </div>
    );
};

export default Homepage;
