// src/components/CTASection.jsx
export default function CTASection() {
    return (
        <section className="py-32 bg-gradient-to-r from-[#581845] to-[#8b3a42] text-white">
            <div className="max-w-4xl mx-auto text-center px-6">
                <h2 className="text-5xl md:text-7xl font-black mb-12 leading-tight">
                    Ready to stabilize your restaurant?
                </h2>
                <div className="flex flex-col sm:flex-row gap-8 justify-center">
                    <a
                        href="/contact"
                        className="px-16 py-8 bg-white text-[#581845] font-black text-2xl rounded-xl hover:scale-105 transition shadow-2xl"
                    >
                        Book a Demo
                    </a>
                    <a
                        href="tel:+155593675223"
                        className="px-16 py-8 border-4 border-white font-black text-2xl rounded-xl hover:bg-white hover:text-[#581845] transition"
                    >
                        Talk to Sales
                    </a>
                </div>
            </div>
        </section>
    )
}