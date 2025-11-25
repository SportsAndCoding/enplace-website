import React from 'react';

export default function ROISection() {
    const benefits = [
        "Lower turnover",
        "Higher shift consistency",
        "Reduced manager burnout",
        "Predictable labor efficiency",
        "Cleaner operational flow"
    ];

    return (
        <section className="py-32 bg-gradient-to-br from-bordeaux-deep to-slate text-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-5xl md:text-6xl font-black mb-12">
                    Stability Pays for Itself
                </h2>
                <div className="grid md:grid-cols-5 gap-8 mb-16">
                    {benefits.map((b, i) => (
                        <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                            <p className="text-2xl font-bold">{b}</p>
                        </div>
                    ))}
                </div>
                <a href="/roi-calculator" className="inline-block px-12 py-6 bg-gold text-bordeaux-deep font-black text-2xl rounded-xl hover:scale-105 transition">
                    Calculate My Savings
                </a>
            </div>
        </section>
    );
}