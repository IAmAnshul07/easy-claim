/**These are necessary imports / components for the page */
import { PageLayout, Text, LinkTo } from "../src/components";
import { SARAH, MICHAEL, LISA } from "../BLOG_CONSTANTS/_BLOG_SETUP";

const AboutUs = () => {
  return (
    <PageLayout
      PAGE_SEO={{
        title: "About CPC Coding Claims Company - Medical Billing Experts",
        description:
          "Learn about CPC Coding Claims Company, a results-oriented medical billing service company with globally renowned credentials and proven accolades.",
        keywords:
          "about us, medical billing company, healthcare billing experts, CPC coding claims"
      }}
    >
      {/* Hero Section */}
      <section className="w-full md:pt-[100px] md:pb-[70px] pt-[130px] pb-20 mb-10 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container text-center px-3">
          <Text title className="text-4xl md:text-6xl font-bold mb-6">
            About CPC Coding Claims Company
          </Text>
          <Text p className="mt-6 text-xl md:text-2xl mb-8">
            A results-oriented medical billing outsourced service company with
            globally renowned credentials and proven accolades
          </Text>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
                Our Story
              </h2>
              <Text p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                CPC Coding Claims Company was founded with a clear vision: to
                revolutionize the medical billing industry by providing
                healthcare providers with comprehensive, cost-effective
                solutions that maximize their revenue while allowing them to
                focus on what matters most - patient care.
              </Text>
              <Text p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                With years of experience in the healthcare industry, we
                understand the challenges that medical practices face in today's
                complex healthcare landscape. Our team of certified
                professionals has developed future-ready solutions that adapt to
                the evolving needs of healthcare providers nationwide.
              </Text>
              <Text p className="text-lg text-gray-600 dark:text-gray-300">
                We have successfully served over 1000+ clients across various
                medical specialties, helping them achieve significant
                improvements in their revenue cycle management and overall
                financial performance.
              </Text>
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-8 rounded-lg">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-12 h-12 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 dark:text-white">
                  10+ Years of Experience
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We have developed future-ready projects for 1000+ clients
                  across the United States
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      1000+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Happy Clients
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      96%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Success Rate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              To be your hassle-free, cost-effective, one-stop solution for
              medical billing, providing comprehensive revenue cycle management
              that maximizes reimbursement and streamlines operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Excellence
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Deliver exceptional medical coding and billing services with the
                highest standards of accuracy and compliance
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-green-600 dark:text-green-400"
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
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Partnership
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Build lasting partnerships with healthcare providers based on
                trust, transparency, and mutual success
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-purple-600 dark:text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Continuously innovate and adapt to the evolving healthcare
                landscape with cutting-edge solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we
              make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 dark:bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Integrity
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We conduct business with the highest ethical standards and
                maintain complete transparency in all our operations
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Quality
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We are committed to delivering the highest quality services with
                attention to detail and accuracy
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Reliability
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our clients can count on us for consistent, dependable service
                that meets their needs every time
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Excellence
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We strive for excellence in everything we do, continuously
                improving our processes and services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our certified professionals bring years of experience and
              expertise to help optimize your revenue cycle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg text-center shadow-lg">
              <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 dark:text-blue-400 text-2xl font-bold">
                  {SARAH.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                {SARAH.name}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 mb-3">
                Senior Medical Coder
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {SARAH.bio}
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg text-center shadow-lg">
              <div className="w-24 h-24 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 dark:text-green-400 text-2xl font-bold">
                  {MICHAEL.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                {MICHAEL.name}
              </h3>
              <p className="text-green-600 dark:text-green-400 mb-3">
                Revenue Cycle Manager
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {MICHAEL.bio}
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg text-center shadow-lg">
              <div className="w-24 h-24 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 dark:text-purple-400 text-2xl font-bold">
                  {LISA.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                {LISA.name}
              </h3>
              <p className="text-purple-600 dark:text-purple-400 mb-3">
                Claims Processing Specialist
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {LISA.bio}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Why Choose CPC Coding Claims?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We adapt to client needs, revolutionizing the medical billing
              outsourcing industry with unparalleled expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 dark:text-white">
                Competitive Pricing
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Quality services that fit your budget with customized billing
                solutions
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 dark:text-white">
                Uninterrupted Service
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Reliable support, always available with seamless operations
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
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
              <h3 className="text-lg font-semibold mb-2 dark:text-white">
                Maximize Reimbursement
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Get the most from every claim with accurate coding and efficient
                processing
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 dark:text-white">
                Reduced Expenses
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Streamline costs for better profitability with efficient
                processes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HIPAA Compliance Section */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
                HIPAA Compliance
              </h2>
              <Text p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                We are committed to confidentiality, discretion, and data
                privacy for our clients and patients. Our professionalism and
                dedication ensure unparalleled privacy and adherence to all
                HIPAA rules and regulations.
              </Text>
              <Text p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Your success is our success! We understand the critical
                importance of protecting sensitive patient information and
                maintaining the highest standards of security in all our
                operations.
              </Text>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Complete data encryption and security</li>
                <li>• Regular HIPAA compliance audits</li>
                <li>• Staff training on privacy regulations</li>
                <li>• Secure data transmission protocols</li>
                <li>• Confidentiality agreements with all team members</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-6">
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
                <h3 className="text-2xl font-bold mb-4 dark:text-white">
                  100% HIPAA Compliant
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We maintain the highest standards of data security and patient
                  privacy protection
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join over 1000+ healthcare providers who trust us with their medical
            billing needs. Let's discuss how we can help optimize your revenue
            cycle and improve your practice's financial performance.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <LinkTo
              href="/contact-us"
              passHref
              className="flex items-center justify-center rounded-md bg-white text-blue-600 px-8 py-3 text-lg font-semibold hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all"
            >
              <span className="block">Contact Us Today</span>
            </LinkTo>
            <LinkTo
              href="/services"
              passHref
              className="flex items-center justify-center rounded-md border-2 border-white text-white px-8 py-3 text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
            >
              <span className="block">View Our Services</span>
            </LinkTo>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutUs;
