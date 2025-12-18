import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, X } from "lucide-react"

export default function ResellerPage() {
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
            {/* Left Content Box */}
            <div className="bg-[#0d5a56] rounded-lg p-8 border border-emerald-600 animate-fade-in-left animate-delay-200 hover-scale">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="text-white">Join </span>
                <span className="text-yellow-400">The Wise Parrot</span>
                <span className="text-white"> Growth Army</span>
              </h2>

              <p className="text-gray-100 mb-4 text-lg leading-relaxed">
                Where ordinary people earn extraordinary income using <span className="text-orange-400 font-semibold">AI.</span>
              </p>

              <p className="text-gray-100 mb-4 text-lg">
                No tech - No investment - No pressure.
              </p>

              <p className="text-lg">
                <span className="text-white">Sirf </span>
                <span className="text-orange-400 font-bold">Guidance + System + Opportunity.</span>
              </p>
            </div>

            {/* Right Character Image */}
            <div className="flex justify-center animate-fade-in-right animate-delay-300 animate-float">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fc77d5990ce0e4641969fde02309b04b0%2Fe90ec4496af0406882ce5e004ad3b06d?format=webp&width=800"
                alt="Wise Parrot Business Character"
                className="h-auto w-72"
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mb-8 animate-scale-in animate-delay-400">
            <Button className="rounded-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-10 py-3 hover-scale">
              Start Your New Income Journey
            </Button>
          </div>

          {/* Footer Text */}
          <p className="text-center text-gray-300 text-sm md:text-base animate-fade-in-up animate-delay-300">
            No Joining Fee - <span className="text-orange-400 font-semibold">No Risk</span> - <span className="text-orange-400 font-semibold">Real Business</span> - <span className="text-orange-400 font-semibold">Real Product</span>
          </p>
        </div>
      </section>

      {/* Why This Is Different Section */}
      <section className="bg-[#fffce8] px-4 py-16">
        <div className="mx-auto max-w-6xl">
          {/* Header Badge */}
          <div className="mb-12 animate-fade-in">
            <div className="inline-block bg-[#042f2e] text-white px-8 py-3 rounded-full font-bold text-xl">
              WHY THIS IS DIFFERENT?
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* First Block */}
              <div className="animate-fade-in-left animate-delay-200">
                <h3 className="text-4xl md:text-5xl font-bold text-[#042f2e] mb-2 leading-tight">
                  This is <span className="text-red-600">NOT</span> a job
                </h3>
                <p className="text-3xl font-bold text-[#042f2e]">Not a startup</p>
              </div>

              {/* Second Block */}
              <div className="animate-fade-in-left animate-delay-300">
                <h3 className="text-2xl md:text-3xl font-bold text-[#042f2e] leading-snug">
                  This is a <span className="text-orange-600">Movement for Automating Business</span>
                </h3>
                <h3 className="text-2xl md:text-3xl font-bold text-[#042f2e] mt-2">
                  Growth using <span className="text-orange-600">Ai</span>
                </h3>
              </div>

              {/* No-Nos Box */}
              <div className="border-3 border-[#042f2e] rounded-3xl p-8 bg-white animate-scale-in animate-delay-400">
                <div className="space-y-4">
                  {[
                    "No Product to build",
                    "No Tech skills needed",
                    "No Investment",
                    "No Office",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-xl font-bold text-[#042f2e]">
                      <span className="text-2xl">▶</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - You Get Box */}
            <div className="flex flex-col animate-fade-in-right animate-delay-300">
              {/* You Get Box */}
              <div className="bg-[#042f2e] rounded-xl p-8 text-white animate-scale-in animate-delay-500 flex flex-col justify-center">
                <h4 className="text-2xl font-bold text-yellow-400 mb-6">You get:</h4>
                <ul className="space-y-4">
                  {[
                    "A real SaaS product",
                    "A ready-made earning system",
                    "Leadership path",
                    "Support & Mentorship",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="h-6 w-6 text-green-400 flex-shrink-0" />
                      <span className="text-lg text-yellow-400 font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#0a3030] px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0d5a56] p-6 rounded-lg">
              <h3 className="text-emerald-400 font-bold text-lg mb-2">Top 10 reasons to start</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Recurring monthly income</li>
                <li>✓ No inventory needed</li>
                <li>✓ Full marketing support</li>
                <li>✓ Passive income stream</li>
              </ul>
            </div>
            <div className="bg-[#0d5a56] p-6 rounded-lg">
              <h3 className="text-emerald-400 font-bold text-lg mb-2">Recurring Revenue</h3>
              <p className="text-sm text-gray-300">Earn 20% commission on every client for life</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Do You Want Section */}
      <section className="bg-[#042f2e] px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-start gap-4 mb-8">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc77d5990ce0e4641969fde02309b04b0%2F957ac60d410047cab979111716408b8a?format=webp&width=800"
              alt="Character"
              className="h-20 w-20 rounded-full flex-shrink-0"
            />
            <div className="flex-1">
              <h2 className="font-bold text-2xl md:text-3xl text-white mb-4 uppercase">What Do You Want?</h2>
              <div className="grid gap-2 md:grid-cols-2">
                {[
                  "To be your best self?",
                  "To be motivated?",
                  "To be successful?",
                  "To be fulfilled?",
                  "All of this?",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-emerald-100 px-3 py-2 rounded text-[#0d3d3d] text-sm">
                    <div className="h-4 w-4 border-2 border-green-600 rounded" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Card className="bg-[#0d3d3d] border-2 border-orange-500 p-6">
            <p className="font-semibold text-lg mb-2">The answer for this all is:</p>
            <p className="font-bold text-4xl text-orange-500 uppercase">RIGHT HERE!</p>
          </Card>
        </div>
      </section>

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
              <h2 className="font-bold text-2xl text-[#042f2e] uppercase">WHAT EXACTLY YOU WILL DO?</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Yellow Circle with 3 Steps */}
            <div className="flex justify-center animate-fade-in-left animate-delay-200">
              <div className="relative w-80 h-80 bg-yellow-400 rounded-full border-8 border-white shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-bold text-5xl text-[#042f2e] mb-6">JUST 3<br />STEPS</h3>
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
                  25% lifetime commission<br />
                  Sell The Wise Parrot subscriptions and earn every month.
                </p>
              </div>

              {/* Box 2 - BUILD A TEAM */}
              <div className="bg-emerald-500 rounded-2xl p-6 text-white border-4 border-white shadow-lg transform hover:scale-105 transition-transform">
                <h4 className="font-bold text-xl mb-2 uppercase">BUILD A TEAM</h4>
                <p className="text-sm leading-relaxed">
                  After 5 sales, become a Leader<br />
                  Get 10% on your team's sales
                </p>
              </div>

              {/* Box 3 - LEADERSHIP OVERRIDES */}
              <div className="bg-pink-500 rounded-2xl p-6 text-white border-4 border-white shadow-lg transform hover:scale-105 transition-transform">
                <h4 className="font-bold text-xl mb-2 uppercase">LEADERSHIP OVERRIDES</h4>
                <p className="text-sm leading-relaxed">
                  Help your team grow and unlock 1%<br />
                  third layer income.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Huge Offer Section */}
      <section className="bg-[#042f2e] px-4 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-block bg-green-600 rounded-lg px-6 py-3 mb-6">
            <p className="font-bold text-2xl text-white uppercase">Huge Offer</p>
          </div>
          <h2 className="font-bold text-3xl md:text-4xl text-orange-500 mb-4 uppercase">See what we offer</h2>
          <p className="text-lg text-white mb-8">For Only ₹999/month Only members</p>

          <div className="flex justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc77d5990ce0e4641969fde02309b04b0%2F88ea01363c4e4020b08add12a60a8236?format=webp&width=800"
              alt="Excited character"
              className="h-auto w-48"
            />
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="bg-[#0a3030] px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc77d5990ce0e4641969fde02309b04b0%2F0a1a1f9580a84590aaab6d1ec16b0f3b?format=webp&width=800"
              alt="Expert character"
              className="h-20 w-20 rounded-full flex-shrink-0"
            />
            <h2 className="font-bold text-3xl text-orange-500 uppercase">What You Get?</h2>
          </div>

          <p className="mb-8 text-lg text-white">We provide you with incredible products</p>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Course #1",
                items: [
                  "Identify your weakness",
                  "Find what you are passionate about",
                  "Learn what is holding you back",
                  "Learn to change your mindset",
                  "How to become confident",
                ],
              },
              {
                title: "Course #2",
                items: [
                  "How to take action",
                  "Set goals",
                  "Create a plan",
                  "Execute the plan",
                  "How to stay motivated",
                ],
              },
              {
                title: "Premium #1",
                items: ["Personal coach", "Weekly accountability check-in", "How to find a mentor", "Daily check-in"],
              },
              {
                title: "Update to what's coming:",
                items: ["Mindset training", "Stay up-to-date with trends", "Expert interviews", "New techniques"],
              },
            ].map((course, idx) => (
              <Card key={idx} className="bg-[#0d3d3d] border border-green-500 p-6">
                <h3 className="font-bold text-lg text-green-400 mb-4">{course.title}</h3>
                <ul className="space-y-2">
                  {course.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white">
                      <Check className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="bg-[#042f2e] px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-bold text-3xl text-center text-white mb-8 uppercase">THIS WILL LAST PEOPLE FOR YOU</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0a3030]">
                  <th className="border border-green-500 p-4 text-left text-white">Features</th>
                  <th className="border border-green-500 bg-green-600 p-4 text-white">Yes (Free)</th>
                  <th className="border border-green-500 bg-green-600 p-4 text-white">Best Value!</th>
                  <th className="border border-green-500 bg-green-600 p-4 text-white">Most Popular</th>
                </tr>
              </thead>
              <tbody>
                {["App teaching", "Community", "Live community", "Chat support"].map((feature, idx) => (
                  <tr key={idx} className="bg-emerald-50">
                    <td className="border border-green-500 p-3 text-[#0d3d3d] text-sm">{feature}</td>
                    <td className="border border-green-500 p-3 text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </td>
                    <td className="border border-green-500 p-3 text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </td>
                    <td className="border border-green-500 p-3 text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="bg-[#0a3030] px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-bold text-3xl text-orange-500 uppercase">Who Is This For?</h2>
            <div className="bg-white rounded-lg px-4 py-2">
              <span className="font-bold text-[#0d3d3d] text-xl">©Wise</span>
              <span className="text-[#0d3d3d] text-sm ml-1">Parrot</span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-bold text-xl text-green-400 mb-4">✓ For people:</h3>
              <ul className="space-y-2">
                {[
                  "Want to change?",
                  "Open minded",
                  "Want to take action?",
                  "Committed",
                  "Want to grow",
                  "Want to be successful",
                  "Want to find peace",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-white text-sm">
                    <Check className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-xl text-red-400 mb-4">✗ Not for people:</h3>
              <ul className="space-y-2">
                {["Lazy", "Pessimistic about change", "Don't want to take action", "Negative", "Close-minded"].map(
                  (item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white text-sm">
                      <X className="h-5 w-5 flex-shrink-0 text-red-500 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="bg-[#042f2e] px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-bold text-3xl text-center text-white mb-8 uppercase">Why Now?</h2>

          <Card className="bg-[#d4a574] p-8 text-center mb-8">
            <p className="font-bold text-2xl text-[#0d3d3d] mb-4">Because it's best to start TODAY.</p>
            <p className="text-lg text-[#0d3d3d] mb-4">Think about it:</p>
            <ul className="mb-6 space-y-2 text-[#0d3d3d] text-sm">
              {["You really working", "Making progress", "Accomplishing goals", "Mindset", "Success"].map(
                (item, idx) => (
                  <li key={idx} className="flex items-start gap-2 justify-start">
                    <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ),
              )}
            </ul>
            <p className="font-semibold text-lg text-[#0d3d3d]">Your decision can impact the rest of your life.</p>
          </Card>

          <div className="flex justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc77d5990ce0e4641969fde02309b04b0%2F789794b886f54c429b420239536dee00?format=webp&width=800"
              alt="Confident character"
              className="h-auto w-48"
            />
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="bg-[#0a3030] px-4 py-12">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8">
            <div className="mx-auto h-24 w-24 rounded-full bg-blue-500 flex items-center justify-center">
              <Check className="h-12 w-12 text-white" />
            </div>
          </div>

          <Card className="border-4 border-blue-500 bg-white p-8">
            <p className="font-bold text-2xl text-blue-600 mb-4">100% SATISFACTION GUARANTEE</p>
            <p className="text-[#0d3d3d] text-sm">
              We guarantee 100% satisfaction on all of our services, or we'll give you a full refund.
            </p>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#042f2e] px-4 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <Card className="border-2 border-red-500 bg-white p-8">
            <h3 className="font-bold text-2xl text-[#0d3d3d] mb-4">
              I hear what you're saying, but is it really that simple?
            </h3>
            <p className="font-bold text-xl text-[#0d3d3d]">YES!</p>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-[#0a3030] px-4 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-bold text-3xl md:text-4xl text-white mb-6 uppercase">Ready to Start Your Journey?</h2>
          <Button className="rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl px-12 py-6">
            JOIN NOW
          </Button>
        </div>
      </section>
    </div>
  )
}
