import React from 'react';

export const metadata = {
  title: 'Help Center | Support Hub',
  description: 'Search for answers, explore setup tutorials, and contact our customer support desk.',
};

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Search Dashboard Banner Area */}
      <section className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white py-36 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            How can we help you today?
          </h1>
          <p className="mt-3 text-slate-300">
            Search our knowledge base for instantaneous setup walk-throughs and system troubleshooting details.
          </p>
          
          {/* Static Search Component wrapper layout structure */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search for articles, guides, or keywords..."
              className="block w-full pl-11 pr-4 py-3.5 bg-white text-slate-900 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm placeholder-slate-400 text-sm sm:text-base transition"
            />
          </div>
        </div>
      </section>

      {/* Main Container Core Wrapper */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-42">
        
        {/* Grid Category Cards Block */}
        <section className="mb-16">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-3">
            Browse Knowledge Directory
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            
            {/* Category 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition group cursor-pointer">
              <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="font-semibold text-slate-900 text-lg">Getting Started</h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">Account setup instructions, configuration walk-throughs, and onboarding workflows.</p>
              <span className="text-xs font-semibold text-indigo-600 mt-4 block">6 articles</span>
            </div>

            {/* Category 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition group cursor-pointer">
              <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
              </div>
              <h3 className="font-semibold text-slate-900 text-lg">Billing & Subscriptions</h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">Manage payment frameworks, download past invoice profiles, and upgrade tier plans.</p>
              <span className="text-xs font-semibold text-emerald-600 mt-4 block">4 articles</span>
            </div>

            {/* Category 3 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition group cursor-pointer">
              <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 mb-4 group-hover:bg-amber-600 group-hover:text-white transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              </div>
              <h3 className="font-semibold text-slate-900 text-lg">Security & Privacy</h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">Configuring Multi-Factor Authentication setups, access control audits, and encryption rules.</p>
              <span className="text-xs font-semibold text-amber-600 mt-4 block">5 articles</span>
            </div>

          </div>
        </section>

        {/* Popular Frequently Asked Questions Content Segment */}
        <section className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-10 shadow-sm mb-16">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 divide-y divide-slate-100">
            
            {/* FAQ 1 */}
            <div className="pt-0">
              <h3 className="text-base font-semibold text-slate-900">How do I reset my account password profile security parameters?</h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                Click your profile icon located within the upper viewport console toolbar layout interface space. Navigate straight into Settings, hit the Security tab option column header link, select Reset Password, and confirm your specific authorization parameters using email multi-factor hooks.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="pt-6">
              <h3 className="text-base font-semibold text-slate-900">Can I easily modify my underlying corporate billing pipeline parameters anytime?</h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                Yes. Team workspace organization layout owners hold immediate structural utility permission rights to toggle operational subscription tires or assign different enterprise credit cards straight out of the billing administrative layout container portal dashboard directly.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="pt-6">
              <h3 className="text-base font-semibold text-slate-900">What is your standard platform software return and credit policy structure?</h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                We maintain an absolute, zero-friction 14-day refund assurance policy across all structural tier subscriptions. To initiate an evaluation audit pipeline request on an ongoing processing cycle invoice, simply connect directly through our formal support channels.
              </p>
            </div>

          </div>
        </section>

        {/* Bottom Contact CTA Panel Element Container block */}
        <section className="bg-indigo-50 border border-indigo-100 rounded-2xl p-8 text-center max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-indigo-950">Still can&apos;t find what you are looking for?</h2>
          <p className="text-sm sm:text-base text-indigo-800 mt-2 max-w-xl mx-auto">
            Our live operations specialists are available around the clock to assist you with complex operational edge-cases.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-5 py-2.5 bg-indigo-600 text-white font-medium text-sm rounded-xl hover:bg-indigo-700 shadow-sm transition">
              Open Support Ticket
            </button>
            <button className="px-5 py-2.5 bg-white text-indigo-700 border border-indigo-200 font-medium text-sm rounded-xl hover:bg-slate-50 shadow-sm transition">
              Contact Live Chat
            </button>
          </div>
        </section>

      </main>
    </div>
  );
}