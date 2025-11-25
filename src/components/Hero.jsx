// src/components/Hero.jsx
import { Bot, Calendar } from 'lucide-react'

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#581845] via-[#2c3e50] to-[#581845] text-white overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative text-center px-6 max-w-5xl mx-auto z-10">
                <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8">
                    Restaurants are chaos.<br />
                    <span className="text-[#f4d06f]">En Place is stability.</span>
                </h1>
                <p className="text-xl md:text-3xl mb-12 text-gray-200">
                    23:51:09.231 up to date in 662ms
                    Staff-first stability software that reduces turnover, prevents crises,<br />
                    and generates predictable ROI.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a href="#sse" className="px-12 py-6 bg-white text-[#581845] font-black text-xl rounded-xl hover:scale-105 transition">
                        See the Staff Stability Engine
                    </a>
                    <a href="/contact" className="px-12 py-6 border-4 border-white font-black text-xl rounded-xl hover:bg-white hover:text-[#581845] transition">
                        Book a Demo
                    </a>
                </div>
            </div>
        </section>
    )
}