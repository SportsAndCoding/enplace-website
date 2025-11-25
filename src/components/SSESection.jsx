import React from 'react';
import { Brain, Gauge, Scale, Activity, Heart } from 'lucide-react';

const outputs = [
    { icon: <Gauge />, label: "Shift Stability Score" },
    { icon: <Activity />, label: "Variability Index (VI)" },
    { icon: <Scale />, label: "Fairness Sensitivity (FS)" },
    { icon: <Brain />, label: "Manager Pressure Score (MPS)" },
    { icon: <Heart />, label: "Staff–Management Match (SMM)" },
];

export default function SSESection() {
    return (
        <section id="sse" className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-5xl md:text-6xl font-black text-slate mb-8">
                    Staff Stability Engine
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
                    The first operational intelligence system built to stabilize restaurant teams.
                </p>
                <div className="grid md:grid-cols-5 gap-8 mb-16">
                    {outputs.map((o, i) => (
                        <div key={i} className="bg-gradient-to-br from-bordeaux-deep to-bordeaux-medium text-white p-8 rounded-2xl">
                            <div className="w-16 h-16 mx-auto mb-4">{o.icon}</div>
                            <p className="font-bold text-lg">{o.label}</p>
                        </div>
                    ))}
                </div>
                <a href="/intelligence-hub" className="inline-block px-10 py-5 bg-bordeaux-deep text-white font-bold text-lg rounded-xl hover:opacity-90 transition">
                    Explore the SSE
                </a>
            </div>
        </section>
    );
}