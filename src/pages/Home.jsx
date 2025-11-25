// src/pages/Home.jsx
import Hero from '../components/Hero'
import ProblemSection from '../components/ProblemSection'
import SSESection from '../components/SSESection'
import ModuleGrid from '../components/ModuleGrid'
import ROISection from '../components/ROISection'
import CaseStudyPreview from '../components/CaseStudyPreview'
import CTASection from '../components/CTASection'

export default function Home() {
    return (
        <>
            <Hero />
            <ProblemSection />
            <SSESection />
            <ModuleGrid />
            <ROISection />
            <CaseStudyPreview />
            <CTASection />
        </>
    )
}