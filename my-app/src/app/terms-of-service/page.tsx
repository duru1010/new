import React from 'react';

export const metadata = {
  title: 'Terms of Service | YourCompany',
  description: 'Read the terms, conditions, and rules governing the use of our platform and services.',
};

export default function TermsOfService() {
  const lastUpdated = "May 20, 2026";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Header */}
      <header className="bg-white border-b border-slate-200 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-base text-slate-500">
            Last updated: {lastUpdated}
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          
          {/* Sticky Sidebar Navigation (Visible on Large Screens) */}
          <aside className="hidden lg:block lg:col-span-3">
            <nav className="sticky top-24 space-y-2 border-l border-slate-200 pl-4">
              <a href="#acceptance" className="block text-sm text-slate-600 hover:text-indigo-600 transition">1. Acceptance of Terms</a>
              <a href="#user-accounts" className="block text-sm text-slate-600 hover:text-indigo-600 transition">2. User Accounts & Security</a>
              <a href="#intellectual-property" className="block text-sm text-slate-600 hover:text-indigo-600 transition">3. Intellectual Property Rights</a>
              <a href="#prohibited-uses" className="block text-sm text-slate-600 hover:text-indigo-600 transition">4. Prohibited Activities</a>
              <a href="#termination" className="block text-sm text-slate-600 hover:text-indigo-600 transition">5. Termination & Suspension</a>
              <a href="#liability-limit" className="block text-sm text-slate-600 hover:text-indigo-600 transition">6. Limitation of Liability</a>
              <a href="#governing-law" className="block text-sm text-slate-600 hover:text-indigo-600 transition">7. Governing Law</a>
            </nav>
          </aside>

          {/* Legal Prose */}
          <main className="mt-8 lg:mt-0 lg:col-span-9 bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-slate-100">
            <article className="prose prose-slate max-w-none space-y-10">
              
              <section id="acceptance" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  1. Acceptance of Terms
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  By accessing or using our platform, website, and digital products (&ldquo;Services&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to all of these terms, do not access or use our Services.
                </p>
              </section>

              <section id="user-accounts" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  2. User Accounts &amp; Security
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  To access certain features of our platform, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to keep your credentials updated.
                </p>
                <div className="mt-4 bg-slate-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                  <p className="text-sm text-slate-700 font-medium">
                    Account Responsibility: You are entirely responsible for maintaining the confidentiality of your password and for any activities that occur under your account dashboard workspace.
                  </p>
                </div>
              </section>

              <section id="intellectual-property" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  3. Intellectual Property Rights
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  All contents, assets, code structures, UI designs, logos, software infrastructure, graphics, and database arrangements present within our Services are the exclusive property of YourCompany or its licensors and are protected under international copyright, trademark, and trade secret provisions.
                </p>
              </section>

              <section id="prohibited-uses" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  4. Prohibited Activities
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  You agree that you will not engage in any of the following unauthorized activities while utilizing our live platform environments:
                </p>
                <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-600">
                  <li>Attempting to breach, test, or circumvent any platform authentication security configurations.</li>
                  <li>Deploying automated scraping scripts, bots, spiders, or extraction engines against our datasets.</li>
                  <li>Using the service to transmit, upload, or inject malicious payloads, viruses, or cross-site scripting vulnerabilities.</li>
                  <li>Reverse engineering, decompiling, or tearing down any structural source code or logic modules.</li>
                </ul>
              </section>

              <section id="termination" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  5. Termination &amp; Suspension
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  We reserve the right, without prior notification or liability, to suspend, terminate, or delete your user account and immediately block your access keys to our platform for any material breach of these stated Terms.
                </p>
              </section>

              <section id="liability-limit" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  6. Limitation of Liability
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  In no event shall YourCompany, its directors, employees, or partners be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data loss, service degradation, or hardware interruptions resulting from your access or inability to use the platform.
                </p>
              </section>

              <section id="governing-law" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  7. Governing Law
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  These Terms and any operational claims or disputes arising out of your relationship with the platform shall be governed by, and interpreted exclusively in accordance with, the underlying legal statutes of your jurisdiction, without regard to its conflict of law provisions.
                </p>
              </section>

            </article>
          </main>

        </div>
      </div>
    </div>
  );
}