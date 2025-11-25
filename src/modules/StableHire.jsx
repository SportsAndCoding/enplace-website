import { Users } from 'lucide-react'

export default function StableHire() {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <Users className="w-16 h-16 text-[#581845] mb-6" />
            <h3 className="text-2xl font-bold text-[#2c3e50] mb-4">Stable Hire</h3>
            <p className="text-gray-600">Interview insights + candidate/team/manager alignment scoring.</p>
        </div>
    )
}