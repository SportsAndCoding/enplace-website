import React from 'react';
import { colors } from '../styles/colors';
import { Bot, Calendar } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-bordeaux-deep via-slate to-bordeaux-deep text-white py-32">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>

            <div className="relative max-w-7xl mx-auto px-6 text-center">
                <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                    Restaurants are chaos.<br />
                    <span className="text-gold">En Place is stability.</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed">
                    Staff-first stability software that reduces turnover, prevents crises, and generates predictable ROI.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a href="#sse" className="px-10 py-5 bg-white text-bordeaux-deep font-bold text-lg rounded-xl hover:bg-gray-100 transition">
                        See the Staff Stability Engine
                    </a>
                    <a href="/contact" className="px-10 py-5 border-2 border-white font-bold text-lg rounded-xl hover:bg-white hover:text-bordeaux-deep transition">
                        Book a Demo
                    </a>
                </div>
            </div>
        </section>
    );
}