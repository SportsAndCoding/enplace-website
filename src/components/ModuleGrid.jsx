import React from 'react';
import ModuleCard from './ModuleCard';
import {
    StableScheduleBuilder, StableHire, HouseGuardian,
    ShiftSwap, OpenShiftMarketplace
} from '../modules';

export default function ModuleGrid() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-black text-center text-slate mb-6">
                    The Stable Suite
                </h2>
                <p className="text-xl text-center text-gray-600 mb-16">Premium intelligence modules powered by SSE</p>

                <div className="grid md:grid-cols-3 gap-10 mb-20">
                    <StableScheduleBuilder />
                    <StableHire />
                    <HouseGuardian />
                </div>

                <h3 className="text-3xl font-bold text-center text-slate mb-12">Operational Add-Ons</h3>
                <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                    <ShiftSwap />
                    <OpenShiftMarketplace />
                </div>
            </div>
        </section>
    );
}