import React from 'react';

export const metadata = {
  title: 'Privacy Policy | YourCompany',
  description: 'Learn how we collect, use, and protect your personal data.',
};

export default function PrivacyPolicy() {
  const lastUpdated = "May 20, 2026";

  return (
    <div className="h-full bg-slate-50 text-slate-800">
      {/* Hero Header */}
      <header className="bg-white border-b border-slate-200 py-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Privacy Policy
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
              <a href="#introduction" className="block text-sm text-slate-600 hover:text-indigo-600 transition">1. Introduction</a>
              <a href="#information-collection" className="block text-sm text-slate-600 hover:text-indigo-600 transition">2. Information We Collect</a>
              <a href="#how-we-use-data" className="block text-sm text-slate-600 hover:text-indigo-600 transition">3. How We Use Your Data</a>
              <a href="#data-sharing" className="block text-sm text-slate-600 hover:text-indigo-600 transition">4. Data Sharing & Third Parties</a>
              <a href="#your-rights" className="block text-sm text-slate-600 hover:text-indigo-600 transition">5. Your Legal Rights</a>
              <a href="#contact-us" className="block text-sm text-slate-600 hover:text-indigo-600 transition">6. Contact Us</a>
            </nav>
          </aside>

          {/* Legal Prose */}
          <main className="mt-8 lg:mt-0 lg:col-span-9 bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-slate-100">
            <article className="prose prose-slate max-w-none space-y-10">
              
              {/* Added scroll-mt-28 to offset sticky headers */}
              <section id="introduction" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  1. Introduction
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Welcome to YourCompany (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                </p>
              </section>

              {/* Added scroll-mt-28 to offset sticky headers */}
              <section id="information-collection" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  2. Information We Collect
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  We may collect, use, store, and transfer different kinds of personal data about you which we have grouped together as follows:
                </p>
                <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-600">
                  <li><strong>Identity Data:</strong> Includes first name, last name, username or similar identifier.</li>
                  <li><strong>Contact Data:</strong> Includes email address, billing address, and telephone numbers.</li>
                  <li><strong>Technical Data:</strong> Includes internet protocol (IP) address, browser type and version, time zone setting, and operating system.</li>
                  <li><strong>Usage Data:</strong> Includes information about how you use our website, products, and services.</li>
                </ul>
              </section>

              {/* Added scroll-mt-28 to offset sticky headers */}
              <section id="how-we-use-data" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  3. How We Use Your Data
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <div className="mt-4 overflow-hidden border border-slate-200 rounded-lg">
                  <table className="min-w-full divide-y divide-slate-200">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Purpose/Activity</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Type of Data</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-200 text-sm text-slate-600">
                      <tr>
                        <td className="px-6 py-4 font-medium text-slate-900">To register you as a new customer</td>
                        <td className="px-6 py-4">Identity & Contact</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium text-slate-900">To deliver service and process payments</td>
                        <td className="px-6 py-4">Identity, Contact, Financial</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium text-slate-900">To manage our relationship with you</td>
                        <td className="px-6 py-4">Identity, Contact, Profile</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Added scroll-mt-28 to offset sticky headers */}
              <section id="data-sharing" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  4. Data Sharing & Third Parties
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  We do not sell your personal data. We may share your personal data with internal and external third parties who perform services on our behalf (such as cloud hosting infrastructure, analytics engines, and payment processors). We require all third parties to respect the security of your personal data and to treat it in accordance with the law.
                </p>
              </section>

              {/* Added scroll-mt-28 to offset sticky headers */}
              <section id="your-rights" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  5. Your Legal Rights
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
                </p>
                <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-600">
                  <li>Request access to your personal data.</li>
                  <li>Request correction of your personal data.</li>
                  <li>Request erasure of your personal data (&ldquo;the right to be forgotten&rdquo;).</li>
                  <li>Object to processing of your personal data.</li>
                  <li>Request restriction of processing your personal data.</li>
                </ul>
              </section>

              {/* Added scroll-mt-28 to offset sticky headers */}
              <section id="contact-us" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  6. Contact Us
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  If you have any questions about this privacy policy or our privacy practices, please contact our data compliance team:
                </p>
                <div className="mt-4 bg-slate-50 p-4 rounded-xl border border-slate-200 max-w-sm">
                  <p className="text-sm text-slate-700"><strong>Email:</strong> privacy@yourcompany.com</p>
                  <p className="text-sm text-slate-700 mt-1"><strong>Address:</strong> 123 Tech Lane, San Francisco, CA</p>
                </div>
              </section>

            </article>
          </main>

        </div>
      </div>
    </div>
  );
}