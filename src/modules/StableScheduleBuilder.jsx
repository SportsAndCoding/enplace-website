import { Calendar } from 'lucide-react'

export default function StableScheduleBuilder() {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <Calendar className="w-16 h-16 text-[#581845] mb-6" />
            <h3 className="text-2xl font-bold text-[#2c3e50] mb-4">Stable Schedule Builder</h3>
            <p className="text-gray-600">Fair, consistent scheduling powered by SSE data.</p>
        </div>
    )
}