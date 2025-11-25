import React from 'react';
import ModuleCard from '../components/ModuleCard';
import { Brain } from 'lucide-react';

export default function StaffStabilityEngine() {
    return (
        <ModuleCard
            icon={<Brain size={36} />}
            title="Staff Stability Engine"
            description="Core intelligence platform that reads team dynamics and predicts instability before it happens."
            bullets={[
                "Real-time Shift Stability Score",
                "Early warning on burnout & turnover risk",
                "Fairness and morale analytics"
            ]}
        />
    );
}