import React from 'react';
import { colors } from '../styles/colors';

export default function ModuleCard({ icon, title, description, bullets = [], isPremium = false }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden group">
            <div className={`h-2 ${isPremium ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gradient-to-r from-bordeaux-deep to-bordeaux-medium'}`}
                style={{ background: isPremium ? 'linear-gradient(to right, #9333ea, #ec4899)' : `linear-gradient(to right, ${colors.bordeaux.deep}, ${colors.bordeaux.medium})` }} />
            <div className="p-8">
                <div className="w-14 h-14 bg-gradient-to-br from-bordeaux-deep to-bordeaux-medium rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                    {icon}
                </div>
                <h3 className="text-2xl font-bold text-slate mb-3">{title}</h3>
                {isPremium && <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full mb-4">Premium</span>}
                <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
                {bullets.length > 0 && (
                    <ul className="space-y-3">
                        {bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-700">
                                <span className="text-bordeaux-deep mt-1">Check</span>
                                <span>{bullet}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}