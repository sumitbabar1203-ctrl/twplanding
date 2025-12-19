import React from "react";
import { Button } from "./ui/button";
import { Check, X } from "lucide-react";

const incomeCalculatorImage = "/assets/reseller/income-calculator.png";
const parrotCharacter = "/assets/reseller/parrot-character.png";
const offerBrush = "/assets/reseller/offer-brush.png";
const parrotWithHat = "/assets/reseller/parrot-hat.png";
const businessParrot = "/assets/reseller/business-parrot.png";
const transformLife = "/assets/reseller/transform-life.png";


export default function Reseller() {
  return (
    <div className="min-h-screen bg-[#042f2e] text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#042f2e] to-[#0a3030] px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-fade-in-down">
            <h1 className="mb-4 font-bold text-4xl md:text-6xl text-orange-500 uppercase tracking-wide animate-fade-in">
              A NEW LIFE BEGINS TODAY
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 italic mb-8 animate-fade-in-up">
              Your Life Is About to Change Forever
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div className="bg-[#0d5a56] rounded-lg p-8 border border-emerald-600 animate-fade-in-left animate-delay-200 hover-scale">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="text-white">Join </span>
                <span className="text-yellow-400">The Wise Parrot</span>
                <span className="text-white"> Growth Army</span>
              </h2>

              <p className="text-gray-100 mb-4 text-lg leading-relaxed">
                Where ordinary people earn extraordinary income using{" "}
                <span className="text-orange-400 font-semibold">AI.</span>
              </p>

              <p className="text-gray-100 mb-4 text-lg">
                No tech - No investment - No pressure.
              </p>

              <p className="text-lg">
                <span className="text-white">Sirf </span>
                <span className="text-orange-400 font-bold">
                  Guidance + System + Opportunity.
                </span>
              </p>
            </div>

            <div className="flex justify-center animate-fade-in-right animate-delay-300 animate-float">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fc77d5990ce0e4641969fde02309b04b0%2Fe90ec4496af0406882ce5e004ad3b06d?format=webp&width=800"
                alt="Wise Parrot Business Character"
                className="h-auto w-72"
              />
            </div>
          </div>

          <div className="text-center mb-8 animate-scale-in animate-delay-400">
            <Button className="rounded-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-10 py-3 hover-scale">
              Start Your New Income Journey
            </Button>
          </div>

          <p className="text-center text-gray-300 text-sm md:text-base animate-fade-in-up animate-delay-300">
            No Joining Fee -{" "}
            <span className="text-orange-400 font-semibold">No Risk</span> -{" "}
            <span className="text-orange-400 font-semibold">Real Business</span>{" "}
            -{" "}
            <span className="text-orange-400 font-semibold">Real Product</span>
          </p>
        </div>
      </section>

      {/* ALL REMAINING SECTIONS — pasted exactly from your original */}
      {/* Why This Is Different Section */}
      <section className="bg-[#fffce8] px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 animate-fade-in">
            <div className="inline-block bg-[#042f2e] text-white px-8 py-3 rounded-full font-bold text-xl">
              WHY THIS IS DIFFERENT?
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="animate-fade-in-left animate-delay-200">
                <h3 className="text-4xl md:text-5xl font-bold text-[#042f2e] mb-2 leading-tight">
                  This is <span className="text-red-600">NOT</span> a job
                </h3>
                <p className="text-3xl font-bold text-[#042f2e]">
                  Not a startup
                </p>
              </div>

              <div className="animate-fade-in-left animate-delay-300">
                <h3 className="text-2xl md:text-3xl font-bold text-[#042f2e] leading-snug">
                  This is a{" "}
                  <span className="text-orange-600">
                    Movement for Automating Business
                  </span>
                </h3>
                <h3 className="text-2xl md:text-3xl font-bold text-[#042f2e] mt-2">
                  Growth using <span className="text-orange-600">Ai</span>
                </h3>
              </div>

              <div className="border-3 border-[#042f2e] rounded-3xl p-8 bg-white animate-scale-in animate-delay-400">
                <div className="space-y-4">
                  {[
                    "No Product to build",
                    "No Tech skills needed",
                    "No Investment",
                    "No Office",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 text-xl font-bold text-[#042f2e]"
                    >
                      <span className="text-2xl">▶</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col animate-fade-in-right animate-delay-300">
              <div className="bg-[#042f2e] rounded-xl p-8 text-white animate-scale-in animate-delay-500 flex flex-col justify-center">
                <h4 className="text-2xl font-bold text-yellow-400 mb-6">
                  You get:
                </h4>
                <ul className="space-y-4">
                  {[
                    "A real SaaS product",
                    "A ready-made earning system",
                    "Leadership path",
                    "Support & Mentorship",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="h-6 w-6 text-green-400 flex-shrink-0" />
                      <span className="text-lg text-yellow-400 font-semibold">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVERYTHING AFTER THIS — your original code from 
          The 3 Steps Section, Income Calculator, Why Win,
          What You Get Kits, Filters, Who Is This For,
          Why Now, Huge Offer, Transform Life
          ALL INCLUDED BELOW: */}


      {/* Just 3 Steps Section */}
      ...  ⬇️
      (Due to message limits, I will paste the rest in the **next message immediately**)
      {/* Just 3 Steps Section */}
      <section className="bg-[#042f2e] px-4 py-16">
        <div className="mx-auto max-w-6xl">
          {/* Header with Character */}
          <div className="flex items-center gap-4 mb-12 animate-fade-in-left">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc77d5990ce0e4641969fde02309b04b0%2F789794b886f54c429b420239536dee00?format=webp&width=800"
              alt="Wise Parrot Character"
              className="h-24 w-24 rounded-full flex-shrink-0"
            />
            <div className="bg-white rounded-full px-6 py-3 inline-block">
              <h2 className="font-bold text-2xl text-[#042f2e] uppercase">
                WHAT EXACTLY YOU WILL DO?
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Yellow Circle with 3 Steps */}
            <div className="flex justify-center animate-fade-in-left animate-delay-200">
              <div className="relative w-80 h-80 bg-yellow-400 rounded-full border-8 border-white shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-bold text-5xl text-[#042f2e] mb-6">
                    JUST 3
                    <br />
                    STEPS
                  </h3>
                  <div className="flex justify-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Three Colored Boxes */}
            <div className="space-y-4 animate-fade-in-right animate-delay-300">
              {/* Box 1 - SELL & EARN */}
              <div className="bg-blue-600 rounded-2xl p-6 text-white border-4 border-white shadow-lg transform hover:scale-105 transition-transform">
                <h4 className="font-bold text-xl mb-2 uppercase">SELL & EARN</h4>
                <p className="text-sm leading-relaxed">
                  25% lifetime commission
                  <br />
                  Sell The Wise Parrot subscriptions and earn every month.
                </p>
              </div>

              {/* Box 2 - BUILD A TEAM */}
              <div className="bg-emerald-500 rounded-2xl p-6 text-white border-4 border-white shadow-lg transform hover:scale-105 transition-transform">
                <h4 className="font-bold text-xl mb-2 uppercase">
                  BUILD A TEAM
                </h4>
                <p className="text-sm leading-relaxed">
                  After 5 sales, become a Leader
                  <br />
                  Get 10% on your team's sales
                </p>
              </div>

              {/* Box 3 - LEADERSHIP OVERRIDES */}
              <div className="bg-pink-500 rounded-2xl p-6 text-white border-4 border-white shadow-lg transform hover:scale-105 transition-transform">
                <h4 className="font-bold text-xl mb-2 uppercase">
                  LEADERSHIP OVERRIDES
                </h4>
                <p className="text-sm leading-relaxed">
                  Help your team grow and unlock 1%
                  <br />
                  third layer income.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Income Calculator Section */}
      <section className="bg-[#0a3030] py-16">
        <div className="w-full">
          <div className="flex justify-center">
            <img
              src={incomeCalculatorImage}
              alt="Real Income Calculator"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Why You Will Win Section */}
      <section className="bg-[#042f2e] px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left Side - Why You Will Win Card */}
            <div className="animate-fade-in-left">
              <div className="mb-6 flex justify-center md:justify-start">
                <div className="bg-yellow-400 text-[#042f2e] px-6 py-2 rounded-full font-bold text-sm uppercase">
                  WHY YOU WILL WIN?
                </div>
              </div>

              <div className="border-3 border-teal-500 rounded-3xl bg-[#0a3a38] p-8">
                <div className="mb-8">
                  <h3 className="text-orange-500 font-bold text-xl mb-4">
                    Because for the first time
                    <br />
                    in your life...
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "• Aapko koi product nahi banana",
                      "• Aapko marketing nahi seekhni",
                      "• Aapko tech nahi aata tab bhi chalega",
                      "• Aapko koi Investment nahi karni",
                      "• Aapko koi Office nahi chahiye",
                      "• Aapko koi fancy English nahi chahiye",
                      "• Aapko koi scam nahi karna",
                      "• Aapko koi akele nahi rehna",
                    ].map((item, idx) => (
                      <li key={idx} className="text-yellow-300 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-orange-500 font-bold text-xl mb-4">
                    You only need:
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "✓ Willingness",
                      "✓ 1 hour daily",
                      "✓ Ek mobile",
                      "✓ Ek dil jo ehaata hai change",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="text-white text-sm flex items-center gap-2"
                      >
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* The Miracle Offer */}
              <div className="mt-8 relative">
                <div className="relative inline-block">
                  <img src={offerBrush} alt="Offer brush" className="w-48 h-auto" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-purple-700 font-black text-4xl italic"
                      style={{ transform: "skew(-5deg)" }}
                    >
                      OFFER
                    </span>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="text-white font-bold text-lg">THE MIRACLE</span>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-yellow-400 font-bold text-lg">
                  For Growth Army members:
                </p>
              </div>
            </div>

            {/* Right Side - Parrot Character */}
            <div className="flex justify-center items-start animate-fade-in-right">
              <img
                src={parrotCharacter}
                alt="Wise Parrot Character"
                className="h-auto w-full max-w-sm"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Why You Will Win Section (Second Version) */}
      <section className="bg-[#042f2e] px-4 py-16">
        <div className="mx-auto max-w-md">
          {/* Yellow Badge - Centered */}
          <div className="mb-6 flex justify-center animate-fade-in">
            <div className="bg-yellow-400 text-[#042f2e] px-8 py-2 rounded-full font-bold text-sm uppercase">
              WHY YOU WILL WIN?
            </div>
          </div>

          {/* Main Content Box */}
          <div className="border-3 border-teal-500 rounded-3xl bg-[#0a3a38] p-8 mb-8 animate-fade-in-up">
            {/* Because Section */}
            <div className="mb-8">
              <h3 className="text-orange-500 font-bold text-lg mb-4">
                Because for the first time
                <br />
                in your life...
              </h3>
              <ul className="space-y-2">
                {[
                  "Aapko koi product nahi banana",
                  "Aapko marketing nahi seekhni",
                  "Aapko tech nahi aata tab bhi chalega",
                  "Aapko koi Investment nahi karni",
                  "Aapko koi Office nahi chahiye",
                  "Aapko koi fancy English nahi chahiye",
                  "Aapko koi scam nahi karna",
                  "Aapko koi akele nahi rehna",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="text-yellow-300 text-sm flex items-start gap-2"
                  >
                    <span className="text-yellow-300 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* You Only Need Section */}
            <div>
              <h3 className="text-orange-500 font-bold text-lg mb-4">
                You only need:
              </h3>
              <ul className="space-y-2">
                {[
                  "Willingness",
                  "1 hour daily",
                  "Ek mobile",
                  "Ek dil jo ehaata hai change",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="text-white text-sm flex items-start gap-2"
                  >
                    <span className="text-white">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* The Miracle Offer Section */}
          <div className="relative mb-6">
            <div className="flex items-end justify-between">
              {/* Left side - THE MIRACLE OFFER */}
              <div className="flex flex-col">
                <div className="relative mb-2">
                  <span className="text-white font-bold text-xl uppercase tracking-wider">
                    THE MIRACLE
                  </span>
                </div>
                <div className="relative">
                  <img src={offerBrush} alt="Offer brush" className="w-52 h-auto" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-purple-700 font-black text-5xl italic tracking-wide">
                      OFFER
                    </span>
                  </div>
                </div>
              </div>

              {/* Right side - Parrot Character */}
              <div className="flex-shrink-0">
                <img
                  src={parrotCharacter}
                  alt="Wise Parrot Character"
                  className="h-48 w-auto"
                />
              </div>
            </div>
          </div>

          {/* For Growth Army Members */}
          <div className="animate-fade-in-up">
            <p className="text-yellow-400 font-bold text-lg">
              For Growth Army members:
            </p>
          </div>
        </div>
      </section>

      {/* What You Get Detailed Section */}
      <section className="bg-[#1a4d4a] px-4 py-16">
        <div className="mx-auto max-w-5xl">
          {/* Top Benefits - Simple Style */}
          <div className="mb-12">
            <h3 className="text-yellow-400 font-bold text-lg mb-6 text-center">
              🎁 Special Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-blue-400 mt-0.5 text-lg">▶</span>
                <span className="text-white text-sm">
                  Bring a client - They get 2 months FREE extension.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-400 mt-0.5 text-lg">▶</span>
                <span className="text-white text-sm">Commission lifetime.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-400 mt-0.5 text-lg">▶</span>
                <span className="text-white text-sm">
                  G-Leader rank unlock faster.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-400 mt-0.5 text-lg">▶</span>
                <span className="text-white text-sm">
                  Priority support + templates.
                </span>
              </div>
            </div>
          </div>

          {/* WHAT YOU GET Title Card + Parrot */}
          <div className="relative mb-12">
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-yellow-400/30 rounded-full blur-2xl"></div>
                <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-400 flex items-center justify-center shadow-2xl border-4 border-white transform hover:scale-110 transition-transform duration-300">
                  <img
                    src={parrotWithHat}
                    alt="Parrot character"
                    className="w-28 h-28 object-contain"
                  />
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/50 to-orange-400/50 rounded-3xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-500 rounded-3xl px-12 py-6 shadow-2xl transform hover:scale-105 transition-all duration-300 border-4 border-white">
                  <h2 className="font-black text-4xl md:text-5xl text-[#042f2e] uppercase text-center leading-tight">
                    WHAT
                    <br />
                    YOU GET?
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Unlock Text */}
          <div className="mb-10 text-center">
            <div className="inline-block bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent px-8 py-1 mb-2">
              <p className="text-yellow-300 font-bold text-2xl animate-pulse">
                When you join, you instantly unlock:
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="h-1 w-12 bg-gradient-to-r from-transparent to-yellow-400 rounded-full"></div>
              <div className="h-1 w-24 bg-yellow-400 rounded-full"></div>
              <div className="h-1 w-12 bg-gradient-to-l from-transparent to-yellow-400 rounded-full"></div>
            </div>
          </div>

          {/* WHAT YOU GET — Five Kits */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Partner Kit */}
            <div className="bg-transparent/30 backdrop-blur-md rounded-xl p-6 shadow-xl border border-blue-400/40 transform hover:scale-[1.02] hover:shadow-blue-500/50 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <div className="w-24 h-24 rounded-full bg-blue-500/30 backdrop-blur-sm border-2 border-blue-300/50 flex items-center justify-center">
                    <span className="text-yellow-300 text-3xl">✓</span>
                  </div>
                </div>
                <div className="w-full">
                  <h3 className="font-black text-2xl text-white mb-6">
                    Partner Kit
                  </h3>
                  <ul className="space-y-3 text-left">
                    {[
                      "WhatsApp sales scripts",
                      "Elevator pitch & sales formula",
                      "Demo script + objection handling pack",
                      "30-day closing plan",
                      "Instagram DM & calls playbook",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-white text-sm"
                      >
                        <span className="text-blue-300 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* Content Kit */}
            <div className="bg-transparent/30 backdrop-blur-md rounded-xl p-6 shadow-xl border border-purple-400/40 transform hover:scale-[1.02] hover:shadow-purple-500/50 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <div className="w-24 h-24 rounded-full bg-purple-500/30 backdrop-blur-sm border-2 border-purple-300/50 flex items-center justify-center">
                    <span className="text-yellow-300 text-3xl">✓</span>
                  </div>
                </div>
                <div className="w-full">
                  <h3 className="font-black text-2xl text-white mb-6">
                    Content Kit
                  </h3>
                  <ul className="space-y-3 text-left">
                    {[
                      "100 ready-to-use reels",
                      "60 story templates",
                      "Digital posters & carousels",
                      "Hook bank & trending scripts",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-white text-sm"
                      >
                        <span className="text-purple-300 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Funnel Kit */}
            <div className="bg-transparent/30 backdrop-blur-md rounded-xl p-6 shadow-xl border border-orange-400/40 transform hover:scale-[1.02] hover:shadow-orange-500/50 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <div className="w-24 h-24 rounded-full bg-orange-500/30 backdrop-blur-sm border-2 border-orange-300/50 flex items-center justify-center">
                    <span className="text-yellow-300 text-3xl">✓</span>
                  </div>
                </div>
                <div className="w-full">
                  <h3 className="font-black text-2xl text-white mb-6">
                    Funnel Kit
                  </h3>
                  <ul className="space-y-3 text-left">
                    {[
                      "Personal referral code",
                      "Personal landing page",
                      "Automated WhatsApp onboarding flow",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-white text-sm"
                      >
                        <span className="text-orange-300 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Training Kit */}
            <div className="bg-transparent/30 backdrop-blur-md rounded-xl p-6 shadow-xl border border-green-400/40 transform hover:scale-[1.02] hover:shadow-green-500/50 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <div className="w-24 h-24 rounded-full bg-green-500/30 backdrop-blur-sm border-2 border-green-300/50 flex items-center justify-center">
                    <span className="text-yellow-300 text-3xl">✓</span>
                  </div>
                </div>
                <div className="w-full">
                  <h3 className="font-black text-2xl text-white mb-6">
                    Training Kit
                  </h3>
                  <ul className="space-y-3 text-left">
                    {[
                      "The Wise Parrot basics",
                      "Closing mastery",
                      "Lead-gen training",
                      "How to make your first 5 sales",
                      "Accelerate from 5 to team-building earning",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-white text-sm"
                      >
                        <span className="text-green-300 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Leader Kit */}
            <div className="bg-transparent/30 backdrop-blur-md rounded-xl p-6 shadow-xl border border-amber-300/40 transform hover:scale-[1.02] hover:shadow-amber-500/50 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <div className="w-24 h-24 rounded-full bg-amber-500/40 backdrop-blur-sm border-2 border-amber-200/60 flex items-center justify-center">
                    <span className="text-white text-3xl">👑👑</span>
                  </div>
                </div>
                <div className="w-full">
                  <div className="mb-6">
                    <h3 className="font-black text-2xl text-white">
                      Leader Kit
                    </h3>
                    <p className="text-amber-200 text-xs mt-1">
                      (after 5 clients)
                    </p>
                  </div>
                  <ul className="space-y-3 text-left">
                    {[
                      "Team tracking scripts",
                      "Partner certificate",
                      "Team leaderboard",
                      "Exclusive campaigns",
                      "Income booster templates",
                      "Priority support & mastermind access",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-white text-sm"
                      >
                        <span className="text-amber-200 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div> {/* end five kits grid */}
        </div>
      </section>

      {/* Filter, WHO IS THIS FOR, WHY NOW */}
      <section className="bg-[#0f4540] px-4 py-16">
        <div className="mx-auto max-w-7xl">
          {/* Filter Box */}
          <div className="bg-[#f5f5dc] rounded-2xl p-8 mb-6 shadow-2xl transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up">
            <div className="text-center mb-6">
              <h3 className="font-bold text-lg text-[#0f4540] tracking-wide">
                ✶ THIS WILL FILTER PEOPLE FOR YOU ✶
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "No joining fee",
                "No monthly targets",
                "No \"Sponsors\"",
                "No inventory",
                "No pressure",
                "No scam",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between bg-white/50 rounded-lg p-4 transform hover:scale-105 hover:bg-white/80 transition-all duration-200 cursor-pointer hover:shadow-md"
                >
                  <span className="text-base text-[#0f4540] font-semibold">
                    {item}
                  </span>
                  <div className="flex items-center justify-center w-7 h-7 rounded-full bg-green-500 shadow-lg">
                    <Check className="h-4 w-4 text-white flex-shrink-0 stroke-[3]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Three Badges Row */}
          <div className="flex items-center justify-center gap-4 mb-12 animate-fade-in">
            <div className="bg-[#042f2e] text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg transform hover:scale-110 hover:bg-[#0a3a38] transition-all duration-300 cursor-pointer hover:shadow-2xl">
              Best Real Business
            </div>
            <div className="bg-[#042f2e] text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg transform hover:scale-110 hover:bg-[#0a3a38] transition-all duration-300 cursor-pointer hover:shadow-2xl">
              Real Product
            </div>
            <div className="bg-[#042f2e] text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg transform hover:scale-110 hover:bg-[#0a3a38] transition-all duration-300 cursor-pointer hover:shadow-2xl">
              Real Income
            </div>
          </div>

          {/* WHO IS THIS FOR */}
          <div className="mb-12 animate-fade-in-up">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-black text-4xl text-white uppercase tracking-tight">
                WHO IS THIS FOR?
              </h2>
              <div className="bg-white rounded-xl px-6 py-2.5 flex items-center gap-1 shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
                <span className="font-bold text-[#0f4540] text-base">The</span>
                <span className="font-bold text-orange-500 text-base">Wise</span>
                <span className="font-bold text-[#0f4540] text-base">Parrot</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#0a3a38]/50 rounded-2xl p-8 shadow-xl">
              {/* Left Column */}
              <ul className="space-y-3">
                {[
                  "Students",
                  "Housewives",
                  "Working professionals",
                  "Job-seekers",
                  "Freelancers",
                  "Small creators",
                  "Business owners",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 transform hover:translate-x-2 transition-all duration-200 cursor-pointer group"
                  >
                    <span className="text-orange-400 text-lg mt-0.5 font-bold group-hover:scale-125 transition-transform duration-200">
                      •
                    </span>
                    <span className="text-orange-400 text-base font-medium group-hover:text-orange-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Right Column */}
              <ul className="space-y-3">
                {[
                  "Coaches",
                  "Real estate agents",
                  "Insurance people",
                  "Introverts",
                  "Hustlers",
                  "Army of dreamers",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 transform hover:translate-x-2 transition-all duration-200 cursor-pointer group"
                  >
                    <span className="text-orange-400 text-lg mt-0.5 font-bold group-hover:scale-125 transition-transform duration-200">
                      •
                    </span>
                    <span className="text-orange-400 text-base font-medium group-hover:text-orange-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* WHY NOW */}
          <div className="animate-fade-in-up">
            <h2 className="font-black text-4xl text-white uppercase mb-8 text-center tracking-tight">
              WHY NOW?
            </h2>

            {/* Card with content and character */}
            <div className="bg-[#f5f5dc] rounded-3xl p-8 shadow-2xl transform hover:scale-[1.01] transition-all duration-300">
              <div className="mb-6">
                <h3 className="font-bold text-2xl text-orange-500 leading-tight">
                  Leader is not a title,
                  <br />
                  it is a lifestyle.
                </h3>
              </div>

              <div className="flex items-start justify-between gap-8">
                <div className="flex-1">
                  <ul className="space-y-3 mb-8">
                    {[
                      "Monthly earning",
                      "Recognition",
                      "Learning",
                      "Impact",
                      "Growth",
                      "Respect",
                      "Freedom",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 transform hover:translate-x-2 transition-all duration-200 cursor-pointer group"
                      >
                        <span className="text-blue-600 mt-0.5 text-base font-bold group-hover:scale-125 transition-transform duration-200">
                          •
                        </span>
                        <span className="text-[#0f4540] text-base font-semibold group-hover:text-[#042f2e]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Speech Bubble */}
                  <div className="bg-white rounded-xl p-4 border-3 border-[#0f4540] shadow-lg inline-block transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer">
                    <p className="text-sm text-[#0f4540] font-bold leading-tight">
                      Your identity will shift,
                      <br />
                      that's the promise
                    </p>
                  </div>
                </div>

                {/* Business Parrot */}
                <div className="flex-shrink-0 flex items-end animate-float">
                  <img
                    src={businessParrot}
                    alt="Business Parrot Character"
                    className="w-40 h-auto object-contain transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* Huge Offer Section */}
      <section className="bg-[#042f2e] px-4 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-block bg-green-600 rounded-lg px-6 py-3 mb-6">
            <p className="font-bold text-2xl text-white uppercase">
              Huge Offer
            </p>
          </div>
          <h2 className="font-bold text-3xl md:text-4xl text-orange-500 mb-4 uppercase">
            See what we offer
          </h2>
          <p className="text-lg text-white mb-8">
            For Only ₹999/month Only members
          </p>

          <div className="flex justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc77d5990ce0e4641969fde02309b04b0%2F88ea01363c4e4020b08add12a60a8236?format=webp&width=800"
              alt="Excited character"
              className="h-auto w-48"
            />
          </div>
        </div>
      </section>

      {/* Transform Your Life Section */}
      <section className="bg-[#0f3f3e] px-4 py-16">
        <div className="flex justify-center">
          <img
            src={transformLife}
            alt="Transform Your Life"
            className="w-full h-auto max-w-md"
          />
        </div>
      </section>
    </div>
  );
}

