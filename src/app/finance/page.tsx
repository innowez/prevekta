import React from 'react';
import Link from 'next/link';

function FinancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C8E6C9] to-[#A5D6A7] py-20 px-6">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-[#1B3A3A] mb-6">
          Building Health, Wealth,<br />
          and Sustainability Together.
        </h1>
        <p className="text-lg text-[#2C5F5F] max-w-3xl mx-auto">
          Shape Your Future with Ayurveda through Prevekta by Building a structured,
          profitable, and scalable ecosystem
        </p>
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Active Investor Card */}
        <div className="bg-[#1B3A3A] rounded-3xl p-10 shadow-2xl border-4 border-[#81C784]">
          <div className="inline-block bg-[#81C784] text-[#1B3A3A] font-bold px-6 py-2 rounded-full mb-6">
            FOR ACTIVE INVESTOR
          </div>

          <h2 className="text-4xl font-bold text-white mb-6">
            Together Towards Scalable Ayurveda
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            For visionaries who want to actively engage in building and running the
            franchise. Gain exclusive territory rights to expand our connected
            ecosystem of clinics, products, and services, while creating lasting impact
            for communities and investors alike.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="border-2 border-white text-white px-5 py-2 rounded-full text-sm">
              Lead operations
            </span>
            <span className="border-2 border-white text-white px-5 py-2 rounded-full text-sm">
              Actively shape growth
            </span>
            <span className="border-2 border-white text-white px-5 py-2 rounded-full text-sm">
              Enjoy strong returns
            </span>
          </div>

          {/* Learn More Button */}
          <Link href="/active-investor">
            <button className="bg-[#81C784] text-[#1B3A3A] font-bold px-8 py-3 rounded-full flex items-center gap-2 hover:bg-[#66BB6A] transition-all">
              LEARN MORE
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </Link>
        </div>

        {/* Passive Investor Card */}
        <div className="bg-[#81C784] rounded-3xl p-10 shadow-2xl border-4 border-[#66BB6A]">
          <div className="inline-block bg-[#1B3A3A] text-[#81C784] font-bold px-6 py-2 rounded-full mb-6">
            FOR PASSIVE INVESTOR
          </div>

          <h2 className="text-4xl font-bold text-[#1B3A3A] mb-6">
            Purposeful Gains, Passive Growth
          </h2>

          <p className="text-[#1B3A3A] mb-6 leading-relaxed">
            Your investment doesn&apos;t just earn it creates lasting impact, bringing
            authentic Ayurveda to healthcare and communities, all while contributing
            to a sustainable and scalable business.
          </p>

          <p className="text-[#1B3A3A] mb-6 font-medium">
            Sit back, invest, and grow with purpose.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="border-2 border-[#1B3A3A] text-[#1B3A3A] px-5 py-2 rounded-full text-sm">
              No management
            </span>
            <span className="border-2 border-[#1B3A3A] text-[#1B3A3A] px-5 py-2 rounded-full text-sm">
              Expert-run
            </span>
            <span className="border-2 border-[#1B3A3A] text-[#1B3A3A] px-5 py-2 rounded-full text-sm">
              Steady returns
            </span>
          </div>

          {/* Learn More Button */}
          <Link href="/passive-investor">
            <button className="bg-[#1B3A3A] text-[#81C784] font-bold px-8 py-3 rounded-full flex items-center gap-2 hover:bg-[#0F2828] transition-all">
              LEARN MORE
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </Link>
        </div>
      </div>

      {/* Strategic Partner Section */}
      <div className="max-w-7xl mx-auto mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Image */}
          <div className="flex gap-4">
            <img
              src="/placeholder-hands.jpg"
              alt="Strategic Partnership"
              className="w-1/2 h-64 object-cover rounded-2xl"
            />
            <img
              src="/placeholder-ayurveda.jpg"
              alt="Ayurveda Treatment"
              className="w-1/2 h-64 object-cover rounded-2xl"
            />
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-4xl font-bold text-[#1B3A3A] mb-4">
              Strategic Partner:<br />
              Expand With Us
            </h2>
            <p className="text-[#2C5F5F] mb-6 leading-relaxed">
              If you already own hospitals or clinics, you can integrate with Prevekta as a strategic partner.
              This model allows you to leverage your existing infrastructure, add new revenue streams
              through Ayurveda, and strengthen your brand with our proven framework. Together, we create
              a win-win model where your setup grows in value while contributing to a larger vision of
              holistic healthcare.
            </p>

            {/* Features List */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#1B3A3A] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[#1B3A3A] font-medium">Strategic Partner</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#1B3A3A] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[#1B3A3A] font-medium">Leverage Existing Infrastructure</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#1B3A3A] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[#1B3A3A] font-medium">New Revenue Streams Through Ayurveda</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#1B3A3A] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[#1B3A3A] font-medium">Strengthen Your Brand</span>
              </div>
            </div>

            <button className="bg-[#1B3A3A] text-white font-bold px-8 py-3 rounded-full flex items-center gap-2 hover:bg-[#0F2828] transition-all">
              LEARN MORE
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Vaidya Partner Section */}
      <div className="max-w-7xl mx-auto mt-12 bg-[#1B3A3A] rounded-3xl p-8 md:p-12 shadow-xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Content */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Vaidya Partner:<br />
              Turn Expertise into Opportunity
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Join Prevekta as a Vaidya Partner and bring authentic Ayurveda to more
              people. We provide you with a professional platform, patient reach, and
              growth opportunities so you can focus on healing while we support you
              in building a thriving practice.
            </p>

            {/* Features List */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#81C784] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#1B3A3A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white font-medium">Professional Platform</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#81C784] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#1B3A3A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white font-medium">Patient Reach</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#81C784] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#1B3A3A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white font-medium">Growth Opportunities</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#81C784] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#1B3A3A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white font-medium">Focus on Healing</span>
              </div>
            </div>

            <button className="bg-[#81C784] text-[#1B3A3A] font-bold px-8 py-3 rounded-full flex items-center gap-2 hover:bg-[#66BB6A] transition-all">
              LEARN MORE
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Right Side - Image */}
          <div>
            <img
              src="/placeholder-ayurveda-treatment.jpg"
              alt="Ayurveda Treatment"
              className="w-full h-80 object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinancePage;
