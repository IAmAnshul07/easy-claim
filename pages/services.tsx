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
            Our Comprehensive Medical Billing Services
          </Text>
          <Text p className="mt-6 text-xl md:text-2xl mb-8">
            Complete revenue cycle management solutions designed to maximize
            your practice's financial performance
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
              We provide comprehensive solutions to streamline your healthcare
              operations and boost efficiency
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
                Medical Coding Services
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our expert team ensures accurate and timely medical coding to
                maximize reimbursements and maintain compliance. We handle all
                coding requirements for various specialties, reducing errors and
                speeding up claim processing.
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                <li>• ICD-10 diagnosis coding</li>
                <li>• CPT procedure coding</li>
                <li>• HCPCS coding</li>
                <li>• Specialty-specific coding</li>
                <li>• Coding compliance audits</li>
                <li>• Error reduction strategies</li>
              </ul>
              <LinkTo
                href="/contact-us"
                passHref
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Learn More
              </LinkTo>
            </div>

            {/* Revenue Cycle Management */}
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
                Revenue Cycle Management
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Complete revenue cycle management solutions using your existing
                EMR and practice management software. We can follow your office
                policies and procedures and give you full control on everything
                we do.
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                <li>• Patient registration</li>
                <li>• Claim creation and submission</li>
                <li>• Payment postings</li>
                <li>• Denial management</li>
                <li>• Account receivables</li>
                <li>• Full process control</li>
              </ul>
              <LinkTo
                href="/contact-us"
                passHref
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn More
              </LinkTo>
            </div>

            {/* Medical Credentialing */}
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white">
                Medical Credentialing & Enrollment
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We provide credentialing and enrollment services to new and
                existing medical providers throughout the United States. Our
                professional team manages documentation, submissions, and
                follow-ups.
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                <li>• Documentation collection & validation</li>
                <li>• Payer-specific applications</li>
                <li>• Enrollment follow-up</li>
                <li>• Periodic updates</li>
                <li>• Re-credentialing services</li>
                <li>• Nationwide support</li>
              </ul>
              <LinkTo
                href="/contact-us"
                passHref
                className="inline-block bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors"
              >
                Learn More
              </LinkTo>
            </div>

            {/* Front Office Management */}
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white">
                Front Office Management
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Managing your front office so you can focus on care. We handle
                scheduling, insurance verification, appointment reminders, and
                patient inquiries.
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                <li>• Appointment scheduling</li>
                <li>• Insurance verification</li>
                <li>• Reminder calls</li>
                <li>• Patient inquiries</li>
                <li>• Office administration</li>
                <li>• Patient support</li>
              </ul>
              <LinkTo
                href="/contact-us"
                passHref
                className="inline-block bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition-colors"
              >
                Learn More
              </LinkTo>
            </div>

            {/* Medical Transcription */}
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
                Medical Transcription Services
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Clear, accurate transcriptions for better patient care. We
                provide accurate and timely transcription of medical reports to
                ensure clear documentation and efficient clinical workflows.
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                <li>• Medical report transcription</li>
                <li>• Clear documentation</li>
                <li>• Patient record maintenance</li>
                <li>• Clinical workflow support</li>
                <li>• Quality assurance</li>
                <li>• HIPAA compliance</li>
              </ul>
              <LinkTo
                href="/contact-us"
                passHref
                className="inline-block bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
              >
                Learn More
              </LinkTo>
            </div>

            {/* MIPS/MACRA Consultation */}
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
                MIPS/MACRA Consultation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Guiding you to compliance, performance, and incentives. Our team
                of consultants helps clients get maximum incentives from CMS
                programs using certified registries.
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                <li>• Quality measures</li>
                <li>• Improvement activities</li>
                <li>• Advancing care information</li>
                <li>• Cost management</li>
                <li>• Certified registry submission</li>
                <li>• Performance optimization</li>
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

      {/* Process Flow Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Medical Billing Process Flow
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our streamlined process ensures efficient claim processing and
              maximum reimbursement
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            <div className="bg-green-100 dark:bg-green-900 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="font-bold mb-2 dark:text-white">
                Patient Demographic Entry
              </h4>
              <p className="text-sm dark:text-gray-300">
                Collect and validate patient information
              </p>
            </div>

            <div className="bg-red-100 dark:bg-red-900 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="font-bold mb-2 dark:text-white">Coding</h4>
              <p className="text-sm dark:text-gray-300">
                ICD-10 and CPT coding
              </p>
            </div>

            <div className="bg-pink-100 dark:bg-pink-900 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="font-bold mb-2 dark:text-white">Charge Entry</h4>
              <p className="text-sm dark:text-gray-300">
                Enter charges and prepare claims
              </p>
            </div>

            <div className="bg-blue-100 dark:bg-blue-900 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h4 className="font-bold mb-2 dark:text-white">
                Claims Submission
              </h4>
              <p className="text-sm dark:text-gray-300">
                Electronic and paper submission
              </p>
            </div>

            <div className="bg-purple-100 dark:bg-purple-900 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">5</span>
              </div>
              <h4 className="font-bold mb-2 dark:text-white">
                Payment Posting
              </h4>
              <p className="text-sm dark:text-gray-300">Reconcile payments</p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mt-4">
            <div className="bg-indigo-100 dark:bg-indigo-900 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">6</span>
              </div>
              <h4 className="font-bold mb-2 dark:text-white">A/R Follow-Up</h4>
              <p className="text-sm dark:text-gray-300">
                Monitor outstanding claims
              </p>
            </div>

            <div className="bg-red-100 dark:bg-red-900 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">7</span>
              </div>
              <h4 className="font-bold mb-2 dark:text-white">
                Denial Management
              </h4>
              <p className="text-sm dark:text-gray-300">
                Appeal and resolve denials
              </p>
            </div>

            <div className="bg-cyan-100 dark:bg-cyan-900 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">8</span>
              </div>
              <h4 className="font-bold mb-2 dark:text-white">Reporting</h4>
              <p className="text-sm dark:text-gray-300">
                Generate performance reports
              </p>
            </div>

            <div className="bg-orange-100 dark:bg-orange-900 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">9</span>
              </div>
              <h4 className="font-bold mb-2 dark:text-white">
                Insurance Verification
              </h4>
              <p className="text-sm dark:text-gray-300">
                Verify coverage and benefits
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Benefits of Our Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We adapt to client needs, revolutionizing the medical billing
              outsourcing industry with unparalleled expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-2xl">
                  96%
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                Improved Quality & Revenue
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Significant increase in revenue through accurate coding and
                efficient processes
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 dark:text-green-400 font-bold text-2xl">
                  94%
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                Efficiency Improvement
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Streamlined processes reduce administrative burden and improve
                workflow
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 dark:text-purple-400 font-bold text-2xl">
                  98%
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                Patient Support & Service
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Exceptional customer service and patient support throughout the
                process
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-orange-600 dark:text-orange-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                HIPAA Compliance
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Unparalleled privacy and adherence to all HIPAA rules and
                regulations
              </p>
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
            Customized Billing Solutions, Powered by Expertise
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Built for your success. With years of experience, we have developed
            future-ready solutions for healthcare providers nationwide.
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
