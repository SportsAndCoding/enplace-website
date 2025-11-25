import React from 'react';
import { Users, AlertTriangle, Flame, HeartHandshake, TrendingDown } from 'lucide-react';

const problems = [
    { icon: <Users />, text: "Unpredictable staffing" },
    { icon: <Flame />, text: "Overused reliable people" },
    { icon: <HeartHandshake />, text: "Culture friction & morale dips" },
    { icon: <AlertTriangle />, text: "Manager burnout & fire drills" },
    { icon: <TrendingDown />, text: "High turnover & unstable execution" },
];

export default function ProblemSection() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-black text-center text-slate mb-16">
                    The 5 Forms of Chaos
                </h2>
                <div className="grid md:grid-cols-5 gap-8">
                    {problems.map((p, i) => (
                        <div key={i} className="text-center">
                            <div className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                                {React.cloneElement(p.icon, { size: 40 })}
                            </div>
                            <p className="text-lg font-medium text-gray-800">{p.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}