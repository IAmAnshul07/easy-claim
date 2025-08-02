import { PageLayout, Text, LinkTo } from "../src/components";
import { DEFAULT_SEO } from "../BLOG_CONSTANTS/_BLOG_SETUP";

const Services = () => {
  return (
    <PageLayout
      PAGE_SEO={{
        title: "Medical Coding & Billing Services - CPC Coding Claims Company",
        description:
          "Comprehensive medical coding and billing services including ICD-10 coding, CPT coding, claims processing, denial management, and revenue cycle optimization.",
        keywords:
          "medical coding services, medical billing services, healthcare revenue cycle, claims processing, denial management"
      }}
    >
      {/* Hero Section */}
      <section className="w-full md:pt-[100px] md:pb-[70px] pt-[130px] pb-20 mb-10 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container text-center px-3">
          <Text title className="text-4xl md:text-6xl font-bold mb-6">
            Our Medical Coding & Billing Services
          </Text>
          <Text p className="mt-6 text-xl md:text-2xl mb-8">
            Comprehensive revenue cycle management solutions designed to
            maximize your practice's financial performance
          </Text>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Complete RCM Suite
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From patient registration to final payment, we handle every aspect
              of your revenue cycle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Medical Coding */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white">
                Medical Coding
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Expert ICD-10 and CPT coding services with certified
                professional coders ensuring accuracy and compliance.
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                <li>• ICD-10 diagnosis coding</li>
                <li>• CPT procedure coding</li>
                <li>• HCPCS coding</li>
                <li>• Specialty-specific coding</li>
                <li>• Coding compliance audits</li>
              </ul>
              <LinkTo
                href="/contact-us"
                passHref
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Learn More
              </LinkTo>
            </div>

            {/* Claims Processing */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white">
                Claims Processing
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Efficient claims submission and processing with advanced
                technology to maximize reimbursement rates.
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                <li>• Electronic claims submission</li>
                <li>• Claims scrubbing and validation</li>
                <li>• Real-time claim tracking</li>
                <li>• Payment posting</li>
                <li>• Claims reconciliation</li>
              </ul>
              <LinkTo
                href="/contact-us"
                passHref
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn More
              </LinkTo>
            </div>

            {/* Denial Management */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-purple-600 dark:text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white">
                Denial Management
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Proactive denial management strategies to reduce claim
                rejections and improve revenue cycle efficiency.
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                <li>• Denial analysis and reporting</li>
                <li>• Appeal preparation and submission</li>
                <li>• Root cause analysis</li>
                <li>• Prevention strategies</li>
                <li>• Denial trend monitoring</li>
              </ul>
              <LinkTo
                href="/contact-us"
                passHref
                className="inline-block bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors"
              >
                Learn More
              </LinkTo>
            </div>

            {/* Provider Credentialing */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-orange-600 dark:text-orange-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white">
                Provider Credentialing
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Complete provider enrollment and credentialing services to
                ensure network participation.
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                <li>• Insurance network enrollment</li>
                <li>• CAQH profile management</li>
                <li>• License verification</li>
                <li>• Credentialing application processing</li>
                <li>• Re-credentialing services</li>
              </ul>
              <LinkTo
                href="/contact-us"
                passHref
                className="inline-block bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition-colors"
              >
                Learn More
              </LinkTo>
            </div>

            {/* Patient Billing */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-red-600 dark:text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white">
                Patient Billing
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Comprehensive patient billing and collection services to
                maximize patient payments.
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                <li>• Patient statement generation</li>
                <li>• Payment plan management</li>
                <li>• Collection follow-up</li>
                <li>• Patient portal integration</li>
                <li>• Financial counseling</li>
              </ul>
              <LinkTo
                href="/contact-us"
                passHref
                className="inline-block bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
              >
                Learn More
              </LinkTo>
            </div>

            {/* Analytics & Reporting */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-indigo-600 dark:text-indigo-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white">
                Analytics & Reporting
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Comprehensive reporting and analytics to optimize your revenue
                cycle performance.
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                <li>• Revenue cycle analytics</li>
                <li>• Performance dashboards</li>
                <li>• KPI monitoring</li>
                <li>• Trend analysis</li>
                <li>• Custom reporting</li>
              </ul>
              <LinkTo
                href="/contact-us"
                passHref
                className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Learn More
              </LinkTo>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Medical Specialties We Serve
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our certified coders have expertise across all medical specialties
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Internal Medicine",
              "Cardiology",
              "Orthopedics",
              "Dermatology",
              "Gastroenterology",
              "Neurology",
              "Pediatrics",
              "OB-GYN",
              "Radiology",
              "Anesthesiology",
              "Pain Management",
              "Urgent Care",
              "Physical Therapy",
              "Allergy & Immunology",
              "Podiatry",
              "Oncology"
            ].map((specialty, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg text-center"
              >
                <Text p className="font-medium dark:text-white">
                  {specialty}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Optimize Your Revenue Cycle?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our medical coding and billing services can help
            your practice achieve better financial performance.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <LinkTo
              href="/contact-us"
              passHref
              className="flex items-center justify-center rounded-md bg-white text-blue-600 px-8 py-3 text-lg font-semibold hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all"
            >
              <span className="block">Get Started Today</span>
            </LinkTo>
            <LinkTo
              href="/about-us"
              passHref
              className="flex items-center justify-center rounded-md border-2 border-white text-white px-8 py-3 text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
            >
              <span className="block">Learn About Us</span>
            </LinkTo>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
