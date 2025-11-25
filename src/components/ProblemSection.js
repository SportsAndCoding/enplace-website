import { Users, Flame, HeartHandshake, AlertTriangle, TrendingDown } from 'lucide-react'

const problems = [
    { icon: <Users className="w-12 h-12" />, text: "Unpredictable staffing" },
    { icon: <Flame className="w-12 h-12" />, text: "Overused reliable people" },
    { icon: <HeartHandshake className="w-12 h-12" />, text: "Culture friction & morale dips" },
    { icon: <AlertTriangle className="w-12 h-12" />, text: "Manager burnout & fire drills" },
    { icon: <TrendingDown className="w-12 h-12" />, text: "High turnover & unstable execution" },
]

export default function ProblemSection() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-5xl md:text-6xl font-black text-[#2c3e50] mb-16">
                    The 5 Forms of Chaos
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
                    {problems.map((p, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="w-32 h-32 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-6">
                                {p.icon}
                            </div>
                            <p className="text-xl font-bold text-gray-800">{p.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}