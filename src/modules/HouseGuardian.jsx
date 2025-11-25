import { Shield } from 'lucide-react'

export default function HouseGuardian() {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <Shield className="w-16 h-16 text-[#581845] mb-6" />
            <h3 className="text-2xl font-bold text-[#2c3e50] mb-4">House Guardian</h3>
            <p className="text-gray-600">Safety, culture, conflict, and risk early-warning signals.</p>
        </div>
    )
}