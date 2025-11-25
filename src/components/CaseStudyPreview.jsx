// src/components/CaseStudyPreview.jsx
export default function CaseStudyPreview() {
    return (
        <section className="py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-5xl md:text-6xl font-black text-[#2c3e50] mb-16">
                    Real Restaurants. Real Results.
                </h2>
                <div className="grid md:grid-cols-3 gap-12">
                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl shadow-xl p-12 border border-gray-200 flex items-center justify-center"
                        >
                            <p className="text-3xl font-bold text-gray-500">Coming Soon</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}