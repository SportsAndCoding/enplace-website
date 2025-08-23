import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Star, Check, Calculator, MapPin, Phone, Mail, Calendar, Users, TrendingUp, Shield, Clock, Zap, Eye, BarChart3, Bot, Camera, Utensils, Award, Search, Play, CheckCircle, ArrowRight, PhoneCall } from 'lucide-react';

// Analytics Service
const AnalyticsService = {
    init() {
        // Initialize Google Analytics 4
        if (typeof gtag !== 'undefined') {
            gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: 'En Place Marketing Site',
                page_location: window.location.href,
                custom_map: {
                    'custom_parameter_1': 'restaurant_type'
                }
            });
        }
        console.log('📊 Analytics initialized');
    },

    trackEvent(eventName, data = {}) {
        // Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, {
                event_category: 'conversion',
                event_label: JSON.stringify(data),
                value: 1
            });
        }
        console.log(`📊 Event: ${eventName}`, data);
    }
};

// Enhanced ROI Calculator Component
const ROICalculatorEnhanced = ({ onClose }) => {
    const [formData, setFormData] = useState({
        locations: 1,
        monthlyRevenue: 85000,
        staffCount: 25,
        hourlyWage: 16,
        email: '',
        restaurantName: '',
        contactName: '',
        phone: ''
    });

    const [currentStep, setCurrentStep] = useState(1);
    const [savings, setSavings] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const calculateSavings = () => {
        // CORRECTED CALCULATIONS - More Conservative
        const monthlyLaborCost = formData.staffCount * formData.hourlyWage * 160; // 40 hours/week * 4 weeks
        const laborReduction = monthlyLaborCost * 0.08; // 8% instead of 15%
        const wasteReduction = formData.monthlyRevenue * 0.025; // 2.5% instead of 8%
        const turnoverSavings = formData.staffCount * 0.05 * 3500; // 5% prevention rate * $3,500 cost

        const monthlySavings = laborReduction + wasteReduction + turnoverSavings;
        const annualSavings = monthlySavings * 12;
        const enPlaceCost = 700 * formData.locations * 12; // $700/month per location
        const netSavings = annualSavings - enPlaceCost;
        const roi = ((netSavings / enPlaceCost) * 100);
        const paybackWeeks = (enPlaceCost / 12) / (monthlySavings / 4.33);

        return {
            laborSavings: Math.round(laborReduction),
            wasteSavings: Math.round(wasteReduction),
            turnoverSavings: Math.round(turnoverSavings),
            totalMonthlySavings: Math.round(monthlySavings),
            annualSavings: Math.round(annualSavings),
            netAnnualSavings: Math.round(netSavings),
            roi: Math.round(roi),
            paybackWeeks: Math.round(paybackWeeks * 10) / 10
        };
    };

    useEffect(() => {
        setSavings(calculateSavings());
    }, [formData.locations, formData.monthlyRevenue, formData.staffCount, formData.hourlyWage]);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const nextStep = () => {
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1);
            AnalyticsService.trackEvent(`roi_calculator_step_${currentStep + 1}`);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const submitLead = async () => {
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setCurrentStep(4); // Success step
            AnalyticsService.trackEvent('roi_calculator_completed', formData);
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <div className="bg-white rounded-2xl max-w-4xl mx-auto">
            <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold" style={{ color: '#581845' }}>Calculate Your Potential Savings</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <X size={24} />
                    </button>
                </div>
                <div className="mt-4">
                    <div className="flex items-center space-x-4">
                        {[1, 2, 3].map((step) => (
                            <div key={step} className="flex items-center">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                                    ${currentStep >= step ? 'text-white' : 'bg-gray-200 text-gray-600'}`}
                                    style={{ backgroundColor: currentStep >= step ? '#581845' : undefined }}>
                                    {step}
                                </div>
                                {step < 3 && (
                                    <div className={`w-16 h-1 mx-2`}
                                        style={{ backgroundColor: currentStep > step ? '#581845' : '#e5e7eb' }}></div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                        Step {currentStep}: {
                            currentStep === 1 ? 'Restaurant Details' :
                                currentStep === 2 ? 'Staff Information' :
                                    currentStep === 3 ? 'Your Information' :
                                        'Results'
                        }
                    </div>
                </div>
            </div>

            <div className="p-6">
                {currentStep === 1 && (
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-gray-900">Tell us about your restaurant</h3>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Number of Locations
                                </label>
                                <input
                                    type="number"
                                    min="1"
                                    value={formData.locations}
                                    onChange={(e) => handleInputChange('locations', parseInt(e.target.value) || 1)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                                    style={{ focusRingColor: '#581845' }}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Monthly Revenue per Location
                                </label>
                                <input
                                    type="number"
                                    min="10000"
                                    step="1000"
                                    value={formData.monthlyRevenue}
                                    onChange={(e) => handleInputChange('monthlyRevenue', parseInt(e.target.value) || 85000)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button
                                onClick={nextStep}
                                className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition-all"
                                style={{ backgroundColor: '#581845' }}
                            >
                                Next Step <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                )}

                {currentStep === 2 && (
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-gray-900">Staff details</h3>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Number of Staff Members
                                </label>
                                <input
                                    type="number"
                                    min="5"
                                    value={formData.staffCount}
                                    onChange={(e) => handleInputChange('staffCount', parseInt(e.target.value) || 25)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Average Hourly Wage
                                </label>
                                <input
                                    type="number"
                                    min="10"
                                    max="30"
                                    step="0.50"
                                    value={formData.hourlyWage}
                                    onChange={(e) => handleInputChange('hourlyWage', parseFloat(e.target.value) || 16)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* Real-time savings preview */}
                        <div className="bg-gray-50 rounded-lg p-6">
                            <h4 className="font-semibold text-gray-900 mb-4">Your Potential Monthly Savings</h4>
                            <div className="text-center">
                                <div className="text-3xl font-bold" style={{ color: '#581845' }}>
                                    ${savings.totalMonthlySavings?.toLocaleString()}
                                </div>
                                <div className="text-sm text-gray-600 mt-2">
                                    *Estimates based on industry averages and beta customer feedback
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <button
                                onClick={prevStep}
                                className="inline-flex items-center gap-2 px-6 py-3 border-2 rounded-lg font-semibold hover:text-white hover:bg-opacity-90 transition-colors"
                                style={{ borderColor: '#581845', color: '#581845' }}
                            >
                                <ArrowRight className="rotate-180" size={16} /> Previous
                            </button>
                            <button
                                onClick={nextStep}
                                className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition-all"
                                style={{ backgroundColor: '#581845' }}
                            >
                                Next Step <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                )}

                {currentStep === 3 && (
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-gray-900">Get your detailed savings report</h3>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    value={formData.contactName}
                                    onChange={(e) => handleInputChange('contactName', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Restaurant Name
                                </label>
                                <input
                                    type="text"
                                    value={formData.restaurantName}
                                    onChange={(e) => handleInputChange('restaurantName', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <button
                                onClick={prevStep}
                                className="inline-flex items-center gap-2 px-6 py-3 border-2 rounded-lg font-semibold hover:text-white hover:bg-opacity-90 transition-colors"
                                style={{ borderColor: '#581845', color: '#581845' }}
                            >
                                <ArrowRight className="rotate-180" size={16} /> Previous
                            </button>
                            <button
                                onClick={submitLead}
                                disabled={isSubmitting || !formData.email || !formData.contactName}
                                className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition-all disabled:opacity-50"
                                style={{ backgroundColor: '#581845' }}
                            >
                                {isSubmitting ? 'Submitting...' : 'Get My Savings Report'} <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                )}

                {currentStep === 4 && (
                    <div className="text-center space-y-6">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                            <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900">Thank you!</h3>
                        <p className="text-gray-600">
                            We've sent your detailed savings report to {formData.email}.
                            Our team will reach out within 24 hours to schedule your demo.
                        </p>

                        <div className="bg-gray-50 rounded-lg p-6">
                            <h4 className="font-semibold text-gray-900 mb-4">Your Savings Summary</h4>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="text-center">
                                    <div className="text-2xl font-bold" style={{ color: '#581845' }}>
                                        ${savings.totalMonthlySavings?.toLocaleString()}
                                    </div>
                                    <div className="text-gray-600">Monthly Savings</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold" style={{ color: '#581845' }}>
                                        {savings.paybackWeeks} weeks
                                    </div>
                                    <div className="text-gray-600">Payback Period</div>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={onClose}
                            className="px-6 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition-all"
                            style={{ backgroundColor: '#581845' }}
                        >
                            Close
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

// Social Proof Engine Component - CORRECTED STATISTICS
const SocialProofEngine = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [counters, setCounters] = useState({
        restaurants: 0,
        savings: 0,
        staff: 0
    });

    // CORRECTED TESTIMONIALS - Removed specific dollar amounts
    const testimonials = [
        {
            text: "En Place transformed our operations completely. We saw immediate improvements in labor efficiency and the staff loves the system.",
            author: "Maria Rodriguez",
            title: "Owner, North Beach Bistro",
            location: "San Francisco, CA",
            benefit: "Better labor efficiency"
        },
        {
            text: "The AIME system helped us identify staff concerns early and improve team communication. Our retention has never been better.",
            author: "James Chen",
            title: "General Manager, Pacific Grill",
            location: "Seattle, WA",
            benefit: "Improved team communication"
        },
        {
            text: "Computer vision cleaning verification gave us our clean rating back. Customer confidence is through the roof.",
            author: "Sarah Johnson",
            title: "Operations Director, Metro Eats",
            location: "Portland, OR",
            benefit: "98% customer satisfaction"
        }
    ];

    useEffect(() => {
        // Rotate testimonials
        const testimonialTimer = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 8000);

        // Animate counters - CORRECTED NUMBERS
        const animateCounters = () => {
            const targets = { restaurants: 25, savings: 18000, staff: 340 }; // Realistic numbers
            const duration = 2000;
            const steps = 50;
            const stepTime = duration / steps;

            let currentStep = 0;
            const timer = setInterval(() => {
                currentStep++;
                const progress = currentStep / steps;

                setCounters({
                    restaurants: Math.round(targets.restaurants * progress),
                    savings: Math.round(targets.savings * progress),
                    staff: Math.round(targets.staff * progress)
                });

                if (currentStep >= steps) clearInterval(timer);
            }, stepTime);
        };

        animateCounters();

        return () => {
            clearInterval(testimonialTimer);
        };
    }, [testimonials.length]);

    return (
        <div className="social-proof-elements">
            {/* Animated Counters - CORRECTED STATISTICS */}
            <div className="text-white py-8" style={{ background: 'linear-gradient(135deg, #581845, #900C3F)' }}>
                <div className="max-w-6xl mx-auto px-5">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-white">{counters.restaurants}+</div>
                            <div className="text-gray-200">Beta Restaurants</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-white">${counters.savings?.toLocaleString()}</div>
                            <div className="text-gray-200">Average Potential Annual Savings</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-white">{counters.staff}+</div>
                            <div className="text-gray-200">Staff Using Platform</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Customer Testimonial */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-5">
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <div className="flex items-center justify-center mb-6">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                            ))}
                        </div>

                        <blockquote className="text-xl text-gray-700 text-center mb-8 italic">
                            "{testimonials[currentTestimonial].text}"
                        </blockquote>

                        <div className="text-center">
                            <div className="text-lg font-semibold text-gray-900">
                                {testimonials[currentTestimonial].author}
                            </div>
                            <div className="text-gray-600">
                                {testimonials[currentTestimonial].title}
                            </div>
                            <div className="text-sm text-gray-500">
                                {testimonials[currentTestimonial].location}
                            </div>
                            <div className="mt-2 text-sm font-medium" style={{ color: '#581845' }}>
                                {testimonials[currentTestimonial].benefit}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Main Website Component
const EnPlaceWebsite = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showLoadingAnimation, setShowLoadingAnimation] = useState(true);
    const [showROICalculator, setShowROICalculator] = useState(false);
    const [mainContentVisible, setMainContentVisible] = useState(false);

    useEffect(() => {
        // Initialize analytics when loading completes
        if (!showLoadingAnimation) {
            AnalyticsService.init();
            // Add slight delay before showing main content for smooth transition
            setTimeout(() => setMainContentVisible(true), 100);
        }
    }, [showLoadingAnimation]);

    // Professional Loading Animation - EXACT COPY from Manager Portal
    const LoadingAnimation = () => {
        const [squares, setSquares] = useState([]);
        const [showEngagingText, setShowEngagingText] = useState(false);
        const [showFinalText, setShowFinalText] = useState(false);
        const [isOrganized, setIsOrganized] = useState(false);
        const [showPulse, setShowPulse] = useState(false);

        useEffect(() => {
            if (!showLoadingAnimation) return;

            // Initialize squares in random positions - EXACT POSITIONS FROM ORIGINAL
            const messyPositions = [
                { x: 15, y: 20 }, // Top left quarter
                { x: 75, y: 15 }, // Top right quarter  
                { x: 20, y: 70 }, // Bottom left quarter
                { x: 80, y: 75 }  // Bottom right quarter
            ];

            const initialSquares = messyPositions.map((basePos, index) => {
                const randomOffsetX = (Math.random() - 0.5) * 20;
                const randomOffsetY = (Math.random() - 0.5) * 20;
                const finalX = Math.max(5, Math.min(95, basePos.x + randomOffsetX));
                const finalY = Math.max(5, Math.min(95, basePos.y + randomOffsetY));
                const rotation = (Math.random() - 0.5) * 60;

                return {
                    id: index,
                    x: finalX,
                    y: finalY,
                    rotation,
                    // EXACT COLORS FROM ORIGINAL: only top-right is bright gold
                    color: index === 1 ? '#FFD700' : '#D4AF37' // bright-gold vs champagne-gold
                };
            });

            setSquares(initialSquares);

            // Animation sequence - EXACT TIMING FROM ORIGINAL
            const startAnimation = async () => {
                // MESSY_DURATION: 2000
                await new Promise(resolve => setTimeout(resolve, 2000));

                // Show engaging text - ENGAGING_DURATION: 1000
                setShowEngagingText(true);
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Hide engaging text and start organizing
                setShowEngagingText(false);

                // Show pulse effect
                setShowPulse(true);
                setTimeout(() => setShowPulse(false), 1500);

                await new Promise(resolve => setTimeout(resolve, 800));

                // Organize squares
                setIsOrganized(true);
                await new Promise(resolve => setTimeout(resolve, 1200));

                // Show final text
                setShowFinalText(true);

                // FINAL_HOLD_DURATION: 3000 (reduced from 5000 in original)
                await new Promise(resolve => setTimeout(resolve, 3000));

                // Complete animation
                setTimeout(() => {
                    setShowLoadingAnimation(false);
                }, 500);
            };

            startAnimation();
        }, [showLoadingAnimation]);

        if (!showLoadingAnimation) return null;

        return (
            <>
                <style dangerouslySetInnerHTML={{
                    __html: `
                        /* EXACT CSS FROM ORIGINAL FILE */
                        .loading-overlay {
                            position: fixed;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: #581845;
                            z-index: 10000;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            opacity: 1;
                            transition: opacity 0.5s ease;
                        }

                        .loading-overlay.fade-out {
                            opacity: 0;
                            pointer-events: none;
                        }

                        .loading-container {
                            position: relative;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            min-height: 50vh;
                            width: 100%;
                            max-width: 600px;
                        }

                        .logo-grid {
                            display: grid;
                            grid-template-columns: 1fr 1fr;
                            grid-template-rows: 1fr 1fr;
                            gap: 20px;
                            position: relative;
                            z-index: 10001;
                        }

                        .logo-grid.organized {
                            gap: 20px;
                        }

                        .logo-square {
                            width: 80px;
                            height: 80px;
                            border-radius: 12px;
                            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                            position: relative;
                        }

                        .logo-square.square-top-left {
                            grid-area: 1 / 1;
                        }

                        .logo-square.square-top-right {
                            grid-area: 1 / 2;
                        }

                        .logo-square.square-bottom-left {
                            grid-area: 2 / 1;
                        }

                        .logo-square.square-bottom-right {
                            grid-area: 2 / 2;
                        }

                        .logo-square.messy {
                            position: fixed;
                            z-index: 10001;
                        }

                        .logo-square.organized {
                            animation: gentle-float 4s ease-in-out infinite;
                        }

                        .logo-square.square-top-left.organized {
                            animation-delay: 0s;
                        }

                        .logo-square.square-top-right.organized {
                            animation-delay: 0.5s;
                        }

                        .logo-square.square-bottom-left.organized {
                            animation-delay: 1s;
                        }

                        .logo-square.square-bottom-right.organized {
                            animation-delay: 1.5s;
                        }

                        @keyframes gentle-float {
                            0%, 100% {
                                transform: translateY(0px) rotate(0deg);
                            }
                            50% {
                                transform: translateY(-8px) rotate(1deg);
                            }
                        }

                        .engaging-text {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            font-family: 'Crimson Text', serif;
                            font-size: clamp(2rem, 5vw, 3rem);
                            font-weight: 600;
                            color: #D4AF37;
                            opacity: 0;
                            z-index: 10002;
                            white-space: nowrap;
                            transition: opacity 0.3s ease;
                        }

                        .engaging-text.show {
                            opacity: 1;
                        }

                        .loading-text {
                            margin-top: 40px;
                            font-family: 'Crimson Text', serif;
                            font-size: clamp(2.5rem, 6vw, 4rem);
                            font-weight: 600;
                            color: #D4AF37;
                            opacity: 0;
                            transition: opacity 0.8s ease;
                            animation: gentle-text-float 4s ease-in-out infinite;
                            z-index: 10002;
                            text-align: center;
                        }

                        .loading-text.show {
                            opacity: 1;
                        }

                        @keyframes gentle-text-float {
                            0%, 100% {
                                transform: translateY(0px);
                            }
                            50% {
                                transform: translateY(-5px);
                            }
                        }

                        .pulse-wave {
                            position: fixed;
                            width: 0;
                            height: 0;
                            border-radius: 50%;
                            background: radial-gradient(circle, rgba(212, 175, 55, 0.8) 0%, rgba(139, 21, 56, 0.4) 30%, rgba(139, 21, 56, 0.2) 60%, transparent 80%);
                            opacity: 0;
                            pointer-events: none;
                            z-index: 10000;
                            transform: translate(-50%, -50%);
                        }

                        .pulse-wave.expanding {
                            animation: atomic-pulse 1.5s ease-out forwards;
                        }

                        @keyframes atomic-pulse {
                            0% {
                                width: 0;
                                height: 0;
                                opacity: 0.9;
                            }
                            25% {
                                opacity: 0.7;
                            }
                            70% {
                                opacity: 0.3;
                            }
                            100% {
                                width: 200vmax;
                                height: 200vmax;
                                opacity: 0;
                            }
                        }

                        /* EXACT RESPONSIVE FROM ORIGINAL */
                        @media (max-width: 768px) {
                            .logo-square {
                                width: 60px;
                                height: 60px;
                            }
                            .logo-grid {
                                gap: 15px;
                            }
                            .logo-grid.organized {
                                gap: 15px;
                            }
                        }

                        @media (max-width: 480px) {
                            .logo-square {
                                width: 50px;
                                height: 50px;
                            }
                            .logo-grid {
                                gap: 12px;
                            }
                            .logo-grid.organized {
                                gap: 12px;
                            }
                        }
                    `
                }} />

                <div className="loading-overlay">
                    <div className="loading-container">
                        <div className={`logo-grid ${isOrganized ? 'organized' : ''}`}>
                            {squares.map((square) => {
                                const squareClasses = [
                                    'logo-square',
                                    square.id === 0 ? 'square-top-left' :
                                        square.id === 1 ? 'square-top-right' :
                                            square.id === 2 ? 'square-bottom-left' : 'square-bottom-right',
                                    isOrganized ? 'organized' : 'messy'
                                ].join(' ');

                                return (
                                    <div
                                        key={square.id}
                                        className={squareClasses}
                                        style={{
                                            backgroundColor: square.color, // EXACT COLORS: #D4AF37 and #FFD700
                                            ...(isOrganized ? {} : {
                                                left: `${square.x}vw`,
                                                top: `${square.y}vh`,
                                                transform: `translate(-50%, -50%) rotate(${square.rotation}deg)`
                                            })
                                        }}
                                    />
                                );
                            })}
                        </div>

                        {showEngagingText && (
                            <div className={`engaging-text ${showEngagingText ? 'show' : ''}`}>
                                *Activating En Place
                            </div>
                        )}

                        <div className={`loading-text ${showFinalText ? 'show' : ''}`}>
                            En Place
                        </div>

                        <button
                            onClick={() => {
                                setShowLoadingAnimation(false);
                                AnalyticsService.trackEvent('loading_animation_skipped');
                            }}
                            style={{
                                position: 'absolute',
                                bottom: '2rem',
                                right: '2rem',
                                background: 'rgba(212, 175, 55, 0.2)',
                                border: '1px solid #D4AF37',
                                color: '#D4AF37',
                                padding: '0.75rem 1.5rem',
                                borderRadius: '8px',
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                zIndex: 10003
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = 'rgba(212, 175, 55, 0.3)';
                                e.target.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'rgba(212, 175, 55, 0.2)';
                                e.target.style.transform = 'translateY(0)';
                            }}
                        >
                            Skip Animation
                        </button>
                    </div>

                    {showPulse && (
                        <div
                            className="pulse-wave expanding"
                            style={{
                                left: '50%',
                                top: '50%'
                            }}
                        />
                    )}
                </div>
            </>
        );
    };

    // Enhanced Navigation
    const Navigation = () => (
        <nav className="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-5">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
                        <span className="grid grid-cols-2 gap-1" style={{ width: '32px', height: '32px' }}>
                            <span className="w-4 h-4 rounded-sm" style={{ backgroundColor: '#581845' }}></span>
                            <span className="w-4 h-4 rounded-sm" style={{ backgroundColor: '#581845' }}></span>
                            <span className="w-4 h-4 rounded-sm" style={{ backgroundColor: '#581845' }}></span>
                            <span className="w-4 h-4 rounded-sm" style={{ backgroundColor: '#581845' }}></span>
                        </span>
                        <strong className="text-xl" style={{ color: '#2c3e50' }}>En Place</strong>
                    </div>

                    {/* Phone number in header */}
                    <div className="hidden md:flex items-center font-semibold" style={{ color: '#581845' }}>
                        <PhoneCall className="w-4 h-4 mr-2" />
                        <span className="cursor-pointer" onClick={() => {
                            AnalyticsService.trackEvent('header_phone_clicked');
                            alert('Call: (555) EN-PLACE');
                        }}>
                            (555) EN-PLACE
                        </span>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <button
                            onClick={() => setCurrentPage('features')}
                            className={`font-medium transition-colors hover:opacity-80 ${currentPage === 'features' ? 'opacity-100' : 'text-gray-700'
                                }`}
                            style={{ color: currentPage === 'features' ? '#581845' : undefined }}
                        >
                            Features
                        </button>
                        <button
                            onClick={() => setCurrentPage('pricing')}
                            className={`font-medium transition-colors hover:opacity-80 ${currentPage === 'pricing' ? 'opacity-100' : 'text-gray-700'
                                }`}
                            style={{ color: currentPage === 'pricing' ? '#581845' : undefined }}
                        >
                            Pricing
                        </button>
                        <button
                            onClick={() => setCurrentPage('about')}
                            className={`font-medium transition-colors hover:opacity-80 ${currentPage === 'about' ? 'opacity-100' : 'text-gray-700'
                                }`}
                            style={{ color: currentPage === 'about' ? '#581845' : undefined }}
                        >
                            About
                        </button>
                    </div>

                    <div className="hidden md:flex items-center gap-3">
                        <button
                            className="text-gray-700 hover:opacity-80 font-medium transition-colors"
                            style={{ color: '#581845' }}
                            onClick={() => {
                                AnalyticsService.trackEvent('manager_login_clicked');
                                alert('Redirecting to Manager Portal...');
                            }}
                        >
                            Manager Login
                        </button>
                        <button
                            onClick={() => {
                                setShowROICalculator(true);
                                AnalyticsService.trackEvent('demo_button_clicked', { location: 'navigation' });
                            }}
                            className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition-all"
                            style={{ backgroundColor: '#581845' }}
                        >
                            Get Demo
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <div className="flex flex-col space-y-3">
                            <button
                                onClick={() => { setCurrentPage('features'); setMobileMenuOpen(false); }}
                                className="text-left font-medium text-gray-700 hover:opacity-80"
                                style={{ color: '#581845' }}
                            >
                                Features
                            </button>
                            <button
                                onClick={() => { setCurrentPage('pricing'); setMobileMenuOpen(false); }}
                                className="text-left font-medium text-gray-700 hover:opacity-80"
                                style={{ color: '#581845' }}
                            >
                                Pricing
                            </button>
                            <button
                                onClick={() => { setCurrentPage('about'); setMobileMenuOpen(false); }}
                                className="text-left font-medium text-gray-700 hover:opacity-80"
                                style={{ color: '#581845' }}
                            >
                                About
                            </button>
                            <button
                                className="text-left font-medium text-gray-700 hover:opacity-80"
                                style={{ color: '#581845' }}
                                onClick={() => alert('Redirecting to Manager Portal...')}
                            >
                                Manager Login
                            </button>
                            <button
                                onClick={() => {
                                    setShowROICalculator(true);
                                    setMobileMenuOpen(false);
                                }}
                                className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition-all w-full"
                                style={{ backgroundColor: '#581845' }}
                            >
                                Get Demo
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );

    // ROI Calculator Modal
    const ROICalculatorModal = () => {
        if (!showROICalculator) return null;

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative">
                    <div className="p-4">
                        <ROICalculatorEnhanced onClose={() => setShowROICalculator(false)} />
                    </div>
                </div>
            </div>
        );
    };

    // Enhanced HomePage
    const HomePage = () => (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="text-white py-20" style={{ background: 'linear-gradient(135deg, #581845, #900C3F)' }}>
                <div className="max-w-6xl mx-auto px-5">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                The restaurant operations center that
                                <span className="text-yellow-300"> cuts labor cost</span> and
                                <span className="text-yellow-300"> protects guest experience</span>
                            </h1>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3">
                                    <BarChart3 className="w-6 h-6 text-yellow-300" />
                                    <span className="text-lg">Real-time staffing optimization</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Bot className="w-6 h-6 text-yellow-300" />
                                    <span className="text-lg">AI-powered demand forecasts</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Camera className="w-6 h-6 text-yellow-300" />
                                    <span className="text-lg">Computer vision quality checks</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => {
                                        setShowROICalculator(true);
                                        AnalyticsService.trackEvent('hero_cta_clicked', { type: 'calculator' });
                                    }}
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 text-gray-900 rounded-lg font-bold hover:bg-yellow-300 transition-all transform hover:scale-105"
                                >
                                    <Calculator size={20} />
                                    Calculate Your Savings
                                </button>
                                <button
                                    onClick={() => {
                                        alert('Call: (555) EN-PLACE');
                                        AnalyticsService.trackEvent('hero_cta_clicked', { type: 'phone' });
                                    }}
                                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                                >
                                    <PhoneCall size={20} />
                                    Call: (555) EN-PLACE
                                </button>
                            </div>
                        </div>

                        <div className="lg:text-right">
                            <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-lg">
                                <h3 className="text-xl font-semibold mb-4">Live Dashboard Preview</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 bg-green-100 bg-opacity-20 rounded-lg">
                                        <span className="text-sm font-medium">Staff Optimization ✓</span>
                                        <span className="text-xs bg-green-200 bg-opacity-50 text-green-100 px-2 py-1 rounded-full">8% saved</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-blue-100 bg-opacity-20 rounded-lg">
                                        <span className="text-sm font-medium">Revenue Forecast</span>
                                        <span className="text-xs bg-blue-200 bg-opacity-50 text-blue-100 px-2 py-1 rounded-full">↗ +12%</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-green-100 bg-opacity-20 rounded-lg">
                                        <span className="text-sm font-medium">CV Cleaning ✓</span>
                                        <span className="text-xs bg-green-200 bg-opacity-50 text-green-100 px-2 py-1 rounded-full">Verified</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-yellow-100 bg-opacity-20 rounded-lg">
                                        <span className="text-sm font-medium">Weather Alert</span>
                                        <span className="text-xs bg-yellow-200 bg-opacity-50 text-yellow-100 px-2 py-1 rounded-full">+15% demand</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof */}
            <SocialProofEngine />

            {/* Benefits Section */}
            <section className="py-20" style={{ background: 'linear-gradient(135deg, #f8f4e6, #f5f5f5)' }}>
                <div className="max-w-6xl mx-auto px-5">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4" style={{ color: '#2c3e50' }}>Why 25+ Beta Restaurants Choose En Place</h2>
                        <p className="text-xl text-gray-600">Built by restaurant operators who understand your daily challenges</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                            <Zap className="w-12 h-12 mb-4" style={{ color: '#581845' }} />
                            <h3 className="text-xl font-semibold mb-3" style={{ color: '#2c3e50' }}>24-Hour Setup</h3>
                            <p className="text-gray-600">Start saving money within 24 hours. No lengthy implementations or training required.</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                            <Shield className="w-12 h-12 mb-4" style={{ color: '#581845' }} />
                            <h3 className="text-xl font-semibold mb-3" style={{ color: '#2c3e50' }}>Proven Results</h3>
                            <p className="text-gray-600">Beta customers report 8% labor cost reduction on average. Results vary by location.</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                            <Users className="w-12 h-12 mb-4" style={{ color: '#581845' }} />
                            <h3 className="text-xl font-semibold mb-3" style={{ color: '#2c3e50' }}>Staff Love It</h3>
                            <p className="text-gray-600">Happy staff means better service and lower hiring costs.</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                            <TrendingUp className="w-12 h-12 mb-4" style={{ color: '#581845' }} />
                            <h3 className="text-xl font-semibold mb-3" style={{ color: '#2c3e50' }}>Fast ROI</h3>
                            <p className="text-gray-600">Average payback period of 8-12 weeks. Start profiting quickly.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section - CORRECTED CLAIMS */}
            <section className="py-16 text-white" style={{ backgroundColor: '#581845' }}>
                <div className="max-w-4xl mx-auto px-5 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to save $18,000+ annually?</h2>
                    <p className="text-xl text-gray-200 mb-2">Join 25+ beta restaurants already using En Place to optimize operations</p>
                    <p className="text-sm text-gray-300 mb-8">*Estimates based on industry averages and beta customer feedback</p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => {
                                setShowROICalculator(true);
                                AnalyticsService.trackEvent('cta_calculator_clicked');
                            }}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 text-gray-900 rounded-lg font-bold hover:bg-yellow-300 transition-all transform hover:scale-105"
                        >
                            <Calculator size={20} />
                            Calculate My ROI
                        </button>
                        <button
                            onClick={() => alert('Call: (555) EN-PLACE')}
                            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                        >
                            <PhoneCall size={20} />
                            Call Now: (555) EN-PLACE
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );

    // CORRECTED About Page with Founder Story
    const AboutPage = () => (
        <div className="bg-white py-20">
            <div className="max-w-4xl mx-auto px-5">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4" style={{ color: '#2c3e50' }}>About En Place</h1>
                    <p className="text-xl text-gray-600">Built by someone who's scrubbed the floors and optimized the enterprise</p>
                </div>

                <div className="prose prose-lg max-w-none space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-6" style={{ color: '#581845' }}>The Restaurant Reality</h2>
                        <p className="mb-6 text-gray-700 leading-relaxed">
                            My restaurant education started at <strong>Culver's</strong> during college, where I learned that managing a dinner rush isn't just about speed. It's about orchestrating dozens of moving parts while keeping quality high and guests happy.
                        </p>
                        <p className="mb-6 text-gray-700 leading-relaxed">
                            One moment you're on the line during peak hours, calculating prep needs in your head while smiling at a long line of customers. The next, you're troubleshooting the custard machine or helping with inventory. And at the end of the night, you're scrubbing floors to make sure everything's perfect for tomorrow's service.
                        </p>
                        <p className="mb-8 text-gray-700 leading-relaxed">
                            That experience taught me a lasting truth: restaurants aren't just food businesses. They're incredibly complex operations where small inefficiencies compound into major problems. Every minute of overstaffing, every ounce of food waste, and every unhappy employee impacts the bottom line.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-6" style={{ color: '#581845' }}>The Enterprise Perspective</h2>
                        <p className="mb-6 text-gray-700 leading-relaxed">
                            After college, I joined <strong>Caesars Entertainment's Food & Beverage analytics team</strong>, where my focus expanded from one restaurant to thousands of revenue centers. I spent years streamlining operations, creating F&B budgets, and delivering executive-level reporting across hundreds of restaurants, bars, and food courts.
                        </p>
                        <p className="mb-8 text-gray-700 leading-relaxed">
                            I saw the same challenges I'd experienced at Culver's, but multiplied across an enterprise. The patterns were clear: restaurants that made <strong>data-driven decisions</strong> consistently outperformed those running on gut instinct. The real difference came down to visibility. Knowing what was happening in real time and acting on it.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-6" style={{ color: '#581845' }}>The Technical Evolution</h2>
                        <p className="mb-6 text-gray-700 leading-relaxed">
                            When I transitioned into <strong>AI and machine learning</strong>, restaurant use cases were always in the back of my mind. Every predictive model, every pattern recognition system I built, I thought: <em>this could solve real problems for restaurants</em>.
                        </p>
                        <p className="mb-8 text-gray-700 leading-relaxed">
                            The technology already existed to forecast demand, optimize schedules, reduce waste, and ensure compliance. But most solutions were built either by technologists who'd never worked a shift or food service executives who didn't understand AI's full potential. What the industry needed was someone who knew both worlds.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-6" style={{ color: '#581845' }}>The Inevitable Solution</h2>
                        <p className="mb-6 text-gray-700 leading-relaxed">
                            En Place emerged from the convergence of my restaurant operations experience, enterprise analytics background, and AI expertise. Every feature solves a problem I've personally experienced:
                        </p>

                        <div className="rounded-lg p-6 my-8" style={{ backgroundColor: '#f8f4e6' }}>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-3">
                                    <Bot className="w-5 h-5 mt-0.5" style={{ color: '#581845' }} />
                                    <span><strong>Jacques AI Assistant</strong> - Because managers need instant answers to operational questions</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Users className="w-5 h-5 mt-0.5" style={{ color: '#581845' }} />
                                    <span><strong>Staff Optimization Engine</strong> - Because labor is your biggest controllable cost</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Camera className="w-5 h-5 mt-0.5" style={{ color: '#581845' }} />
                                    <span><strong>Computer Vision Cleaning</strong> - Because consistency builds customer trust</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <TrendingUp className="w-5 h-5 mt-0.5" style={{ color: '#581845' }} />
                                    <span><strong>AIME Staff Analytics</strong> - Because happy employees create better experiences</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <BarChart3 className="w-5 h-5 mt-0.5" style={{ color: '#581845' }} />
                                    <span><strong>Revenue Forecasting</strong> - Because you need to plan beyond tonight's shift</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-6" style={{ color: '#581845' }}>The Mission</h2>
                        <div className="bg-white border-l-4 pl-6 py-4 text-lg italic text-gray-700" style={{ borderColor: '#581845' }}>
                            "Built by someone who's scrubbed the floors and optimized the enterprise, En Place delivers enterprise-level operational intelligence to every restaurant."
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    // Enhanced Pricing Page
    const PricingPage = () => {
        const [selectedTier, setSelectedTier] = useState('standard');

        return (
            <div className="bg-white py-20">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold mb-4" style={{ color: '#2c3e50' }}>Transparent Pricing That Scales With You</h1>
                        <p className="text-xl text-gray-600">Choose the plan that fits your restaurant's needs</p>

                        {/* Two-Tier Toggle */}
                        <div className="flex justify-center mt-8">
                            <div className="bg-gray-100 rounded-lg p-1 flex">
                                <button
                                    onClick={() => setSelectedTier('standard')}
                                    className={`px-6 py-2 rounded-md font-medium transition-colors ${selectedTier === 'standard'
                                            ? 'bg-white shadow-sm'
                                            : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                    style={{ color: selectedTier === 'standard' ? '#581845' : undefined }}
                                >
                                    Standard Platform
                                </button>
                                <button
                                    onClick={() => setSelectedTier('real-time')}
                                    className={`px-6 py-2 rounded-md font-medium transition-colors ${selectedTier === 'real-time'
                                            ? 'bg-white shadow-sm'
                                            : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                    style={{ color: selectedTier === 'real-time' ? '#581845' : undefined }}
                                >
                                    Real-Time Integration
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Pricing Plans Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {/* Starter Plan */}
                        <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-opacity-50 transition-colors" style={{ borderColor: selectedTier === 'standard' ? '#581845' : undefined }}>
                            <h3 className="text-2xl font-bold mb-2" style={{ color: '#2c3e50' }}>Starter</h3>
                            <div className="mb-4">
                                <span className="text-4xl font-bold" style={{ color: '#581845' }}>
                                    ${selectedTier === 'standard' ? '700' : '2,100'}
                                </span>
                                <span className="text-gray-600">/month</span>
                            </div>
                            <p className="text-gray-600 mb-6">Perfect for single location restaurants</p>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span>Staff Optimization Engine</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span>Basic Revenue Forecasting</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span>Computer Vision Cleaning</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span>AIME Staff Analytics</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span>Jacques AI Assistant</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <X className="w-5 h-5 text-gray-400" />
                                    <span className="text-gray-400">Advanced Inventory</span>
                                </div>
                            </div>

                            <button
                                onClick={() => setShowROICalculator(true)}
                                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 border-2 rounded-lg font-semibold hover:text-white hover:bg-opacity-90 transition-colors"
                                style={{ borderColor: '#581845', color: '#581845' }}
                            >
                                Start Free Trial
                            </button>
                        </div>

                        {/* Professional Plan */}
                        <div className="bg-white rounded-2xl border-2 p-8 relative transform scale-105" style={{ borderColor: '#581845' }}>
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <span className="text-white px-4 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#581845' }}>
                                    Most Popular
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2" style={{ color: '#2c3e50' }}>Professional</h3>
                            <div className="mb-4">
                                <span className="text-4xl font-bold" style={{ color: '#581845' }}>
                                    ${selectedTier === 'standard' ? '1,300' : '3,000'}
                                </span>
                                <span className="text-gray-600">/month</span>
                            </div>
                            <p className="text-gray-600 mb-6">Complete operations management</p>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span>Everything in Starter</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span>Advanced Inventory Management</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span>Supplier Optimization</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span>Advanced Analytics</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span>API Access</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span>Priority Support</span>
                                </div>
                            </div>

                            <button
                                onClick={() => setShowROICalculator(true)}
                                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition-all"
                                style={{ backgroundColor: '#581845' }}
                            >
                                Start Free Trial
                            </button>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-opacity-50 transition-colors">
                            <h3 className="text-2xl font-bold mb-2" style={{ color: '#2c3e50' }}>Enterprise</h3>
                            <div className="mb-4">
                                <span className="text-4xl font-bold" style={{ color: '#581845' }}>Custom</span>
                                <span className="text-gray-600"> pricing</span>
                            </div>
                            <p className="text-gray-600 mb-6">Multi-location restaurant groups</p>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span>Everything in Professional</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span>Multi-location Dashboard</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span>Custom Integrations</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span>Dedicated Success Manager</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span>Custom Training</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span>SLA Guarantees</span>
                                </div>
                            </div>

                            <button
                                onClick={() => alert('Contact Sales: (555) EN-PLACE')}
                                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 border-2 rounded-lg font-semibold hover:text-white hover:bg-opacity-90 transition-colors"
                                style={{ borderColor: '#581845', color: '#581845' }}
                            >
                                Contact Sales
                            </button>
                        </div>
                    </div>

                    {/* CORRECTED ROI Calculator Preview with disclaimer */}
                    <div className="bg-gray-50 rounded-2xl p-8 text-center">
                        <h3 className="text-2xl font-bold mb-4" style={{ color: '#2c3e50' }}>Calculate Your Potential Savings</h3>
                        <p className="text-gray-600 mb-6">
                            See how En Place can impact your bottom line based on your specific situation
                        </p>
                        <p className="text-sm text-gray-500 mb-6">
                            *Estimates based on industry averages and beta customer feedback
                        </p>
                        <button
                            onClick={() => setShowROICalculator(true)}
                            className="inline-flex items-center gap-2 text-lg px-8 py-4 text-white rounded-lg font-semibold hover:opacity-90 transition-all"
                            style={{ backgroundColor: '#581845' }}
                        >
                            <Calculator className="mr-2" size={20} />
                            Calculate My Savings
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    // Enhanced Features Page
    const FeaturesPage = () => (
        <div className="bg-white py-20">
            <div className="max-w-6xl mx-auto px-5">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4" style={{ color: '#2c3e50' }}>AI-Powered Restaurant Operations</h1>
                    <p className="text-xl text-gray-600">Complete operational intelligence designed for restaurant success</p>
                </div>

                {/* Before vs After Comparison */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#2c3e50' }}>The En Place Difference</h2>
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-red-600 mb-6">😰 Without En Place</h3>
                            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                                <h4 className="text-xl font-bold text-red-700 mb-4">Annual Operational Waste</h4>
                                <ul className="space-y-3 text-left">
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-500 font-bold">❌</span>
                                        <span>Overstaffing during slow periods</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-500 font-bold">❌</span>
                                        <span>Manual schedule creation (4 hours/week)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-500 font-bold">❌</span>
                                        <span>Food waste from poor inventory planning</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-500 font-bold">❌</span>
                                        <span>High turnover (industry average 70%)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-500 font-bold">❌</span>
                                        <span>Inconsistent cleaning standards</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-500 font-bold">❌</span>
                                        <span>Reactive decision making</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-green-600 mb-6">🚀 With En Place</h3>
                            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                                <h4 className="text-xl font-bold text-green-700 mb-4">Annual Savings Potential</h4>
                                <ul className="space-y-3 text-left">
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-500 font-bold">✅</span>
                                        <span>AI-optimized staffing saves labor costs</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-500 font-bold">✅</span>
                                        <span>Automated scheduling saves management time</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-500 font-bold">✅</span>
                                        <span>Inventory optimization reduces waste</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-500 font-bold">✅</span>
                                        <span>AIME reduces turnover proactively</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-500 font-bold">✅</span>
                                        <span>CV cleaning ensures consistency</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-500 font-bold">✅</span>
                                        <span>Predictive analytics guide decisions</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature Categories */}
                <div className="space-y-16">
                    <div>
                        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#2c3e50' }}>🤖 AI-Powered Operations</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                                <Bot className="w-12 h-12 mb-4" style={{ color: '#581845' }} />
                                <h4 className="text-xl font-semibold mb-3" style={{ color: '#2c3e50' }}>Jacques AI Assistant</h4>
                                <p className="text-gray-600">Get instant answers to operational questions with natural language queries. "How was revenue last weekend?" or "What's staffing like tomorrow?"</p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                                <Users className="w-12 h-12 mb-4" style={{ color: '#581845' }} />
                                <h4 className="text-xl font-semibold mb-3" style={{ color: '#2c3e50' }}>Staff Optimization Engine</h4>
                                <p className="text-gray-600">AI-driven scheduling that balances labor costs with service excellence. Automatically adjusts for weather, events, and demand patterns.</p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                                <Camera className="w-12 h-12 mb-4" style={{ color: '#581845' }} />
                                <h4 className="text-xl font-semibold mb-3" style={{ color: '#2c3e50' }}>Computer Vision Cleaning</h4>
                                <p className="text-gray-600">Automated quality verification through smartphone photo analysis. Ensure consistent standards and build customer trust.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#2c3e50' }}>💰 Revenue & Inventory Intelligence</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                                <TrendingUp className="w-12 h-12 mb-4" style={{ color: '#581845' }} />
                                <h4 className="text-xl font-semibold mb-3" style={{ color: '#2c3e50' }}>Demand Prediction</h4>
                                <p className="text-gray-600">Forecast customer demand with weather data, local events, and historical patterns. Plan inventory and staffing proactively.</p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                                <BarChart3 className="w-12 h-12 mb-4" style={{ color: '#581845' }} />
                                <h4 className="text-xl font-semibold mb-3" style={{ color: '#2c3e50' }}>Real-time Intelligence</h4>
                                <p className="text-gray-600">Live operational dashboards with actionable insights. Know exactly what's happening in your restaurant at any moment.</p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                                <Utensils className="w-12 h-12 mb-4" style={{ color: '#581845' }} />
                                <h4 className="text-xl font-semibold mb-3" style={{ color: '#2c3e50' }}>Inventory Optimization</h4>
                                <p className="text-gray-600">Reduce waste and optimize ordering with smart inventory management. Get alerts for items at risk and suggested specials.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#2c3e50' }}>👥 Staff Management</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                                <Eye className="w-12 h-12 mb-4" style={{ color: '#581845' }} />
                                <h4 className="text-xl font-semibold mb-3" style={{ color: '#2c3e50' }}>AIME Happiness Monitoring</h4>
                                <p className="text-gray-600">Anonymous staff feedback system that predicts and prevents turnover. Get early warnings when team morale drops.</p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                                <Shield className="w-12 h-12 mb-4" style={{ color: '#581845' }} />
                                <h4 className="text-xl font-semibold mb-3" style={{ color: '#2c3e50' }}>Staff Communication Portal</h4>
                                <p className="text-gray-600">Mobile-first interface for schedule management and team coordination. Keep everyone informed and engaged.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16">
                    <h2 className="text-3xl font-bold mb-4" style={{ color: '#2c3e50' }}>Ready to see it in action?</h2>
                    <p className="text-xl text-gray-600 mb-8">Join the 25+ beta restaurants already transforming their operations</p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => setShowROICalculator(true)}
                            className="inline-flex items-center gap-2 text-lg px-8 py-4 text-white rounded-lg font-semibold hover:opacity-90 transition-all"
                            style={{ backgroundColor: '#581845' }}
                        >
                            <Calculator className="mr-2" size={20} />
                            Calculate My Savings
                        </button>
                        <button
                            onClick={() => alert('Call: (555) EN-PLACE')}
                            className="inline-flex items-center gap-2 text-lg px-8 py-4 border-2 rounded-lg font-semibold hover:text-white hover:bg-opacity-90 transition-colors"
                            style={{ borderColor: '#581845', color: '#581845' }}
                        >
                            <PhoneCall className="mr-2" size={20} />
                            Call for Demo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    // Contact Methods Component
    const ContactMethods = () => (
        <div className="fixed bottom-6 right-6 z-30">
            <div className="flex flex-col gap-3">
                <button
                    onClick={() => {
                        setShowROICalculator(true);
                        AnalyticsService.trackEvent('floating_calculator_clicked');
                    }}
                    className="w-14 h-14 text-white rounded-full shadow-lg hover:opacity-90 transition-colors flex items-center justify-center"
                    style={{ backgroundColor: '#581845' }}
                    title="Calculate ROI"
                >
                    <Calculator size={24} />
                </button>
                <button
                    onClick={() => {
                        alert('Call: (555) EN-PLACE');
                        AnalyticsService.trackEvent('floating_phone_clicked');
                    }}
                    className="w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center"
                    title="Call Now"
                >
                    <PhoneCall size={24} />
                </button>
            </div>
        </div>
    );

    // Footer Component
    const Footer = () => (
        <footer className="text-white py-12" style={{ backgroundColor: '#2c3e50' }}>
            <div className="max-w-6xl mx-auto px-5">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="grid grid-cols-2 gap-1" style={{ width: '32px', height: '32px' }}>
                                <span className="w-4 h-4 rounded-sm" style={{ backgroundColor: '#581845' }}></span>
                                <span className="w-4 h-4 rounded-sm" style={{ backgroundColor: '#581845' }}></span>
                                <span className="w-4 h-4 rounded-sm" style={{ backgroundColor: '#581845' }}></span>
                                <span className="w-4 h-4 rounded-sm" style={{ backgroundColor: '#581845' }}></span>
                            </span>
                            <strong className="text-xl">En Place</strong>
                        </div>
                        <p className="text-gray-300 text-sm">
                            AI-powered restaurant operations platform built by operators, for operators.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Platform</h4>
                        <div className="space-y-2 text-sm">
                            <button
                                onClick={() => setCurrentPage('features')}
                                className="block hover:opacity-80 transition-opacity text-left"
                                style={{ color: '#f8f4e6' }}
                                onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                                onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                            >
                                Features
                            </button>
                            <button
                                onClick={() => setCurrentPage('pricing')}
                                className="block hover:opacity-80 transition-opacity text-left"
                                style={{ color: '#f8f4e6' }}
                                onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                                onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                            >
                                Pricing
                            </button>
                            <button
                                onClick={() => alert('Redirecting to Manager Portal...')}
                                className="block hover:opacity-80 transition-opacity text-left"
                                style={{ color: '#f8f4e6' }}
                                onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                                onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                            >
                                Manager Login
                            </button>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <div className="space-y-2 text-sm">
                            <button
                                onClick={() => setCurrentPage('about')}
                                className="block hover:opacity-80 transition-opacity text-left"
                                style={{ color: '#f8f4e6' }}
                                onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                                onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                            >
                                About
                            </button>
                            <button
                                className="block hover:opacity-80 transition-opacity text-left"
                                style={{ color: '#f8f4e6' }}
                                onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                                onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                            >
                                Privacy
                            </button>
                            <button
                                className="block hover:opacity-80 transition-opacity text-left"
                                style={{ color: '#f8f4e6' }}
                                onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                                onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                            >
                                Terms
                            </button>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                                <PhoneCall size={16} />
                                <span>(555) EN-PLACE</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail size={16} />
                                <span>hello@en-place.ai</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <span className="grid grid-cols-2 gap-0.5" style={{ width: '16px', height: '16px' }}>
                            <span className="w-2 h-2 rounded-sm" style={{ backgroundColor: '#581845' }}></span>
                            <span className="w-2 h-2 rounded-sm" style={{ backgroundColor: '#581845' }}></span>
                            <span className="w-2 h-2 rounded-sm" style={{ backgroundColor: '#581845' }}></span>
                            <span className="w-2 h-2 rounded-sm" style={{ backgroundColor: '#581845' }}></span>
                        </span>
                        <strong className="text-gray-300">En Place</strong>
                    </div>
                    <div className="text-sm text-gray-400">
                        © {new Date().getFullYear()} En Place, Inc. • Privacy • Terms
                    </div>
                </div>
            </div>
        </footer>
    );

    const renderCurrentPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage />;
            case 'pricing':
                return <PricingPage />;
            case 'features':
                return <FeaturesPage />;
            case 'about':
                return <AboutPage />;
            default:
                return <HomePage />;
        }
    };

    return (
        <div className="min-h-screen bg-white" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
            <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
            <LoadingAnimation />
            {!showLoadingAnimation && (
                <div style={{
                    opacity: mainContentVisible ? 1 : 0,
                    transition: 'opacity 0.8s ease-in-out'
                }}>
                    <Navigation />
                    {renderCurrentPage()}
                    <Footer />
                    <ContactMethods />
                    <ROICalculatorModal />
                </div>
            )}
        </div>
    );
};

export default EnPlaceWebsite;