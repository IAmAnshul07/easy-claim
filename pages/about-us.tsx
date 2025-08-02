/**These are necessary imports / components for the page */
import { PageLayout, Text, LinkTo } from "../src/components";
import { SARAH, MICHAEL, LISA } from "../BLOG_CONSTANTS/_BLOG_SETUP";

const AboutUs = () => {
  return (
    <PageLayout
      PAGE_SEO={{
        title: "About Us - CPC Coding Claims Company",
        description:
          "Learn about CPC Coding Claims Company, our certified medical coders, and our commitment to healthcare revenue cycle management excellence.",
        keywords:
          "about us, medical coding company, healthcare billing services, certified coders"
      }}
    >
      {/* Hero Section */}
      <section className="w-full md:pt-[100px] md:pb-[70px] pt-[130px] pb-20 mb-10 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container text-center px-3">
          <Text title className="text-4xl md:text-6xl font-bold mb-6">
            About CPC Coding Claims
          </Text>
          <Text p className="mt-6 text-xl md:text-2xl mb-8">
            Your trusted partner in healthcare revenue cycle management
          </Text>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
                Our Story
              </h2>
            </div>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <Text p>
                Founded with a mission to help healthcare providers optimize
                their revenue cycle and focus on what matters most - patient
                care, CPC Coding Claims Company has become a trusted partner for
                medical practices across the country.
              </Text>

              <Text p>
                Our journey began when we recognized the growing challenges
                healthcare providers face in managing complex billing processes,
                staying compliant with ever-changing regulations, and maximizing
                revenue while maintaining quality patient care.
              </Text>

              <Text p>
                Today, we're proud to serve healthcare providers of all sizes,
                from small private practices to large healthcare systems, with
                comprehensive medical coding and billing solutions that drive
                results.
              </Text>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
                Our Mission
              </h2>
              <Text p className="text-lg mb-6">
                To provide healthcare providers with accurate, efficient, and
                compliant medical coding and billing services that optimize
                revenue cycle performance and enable them to focus on delivering
                exceptional patient care.
              </Text>
              <Text p className="text-lg">
                We believe that every healthcare provider deserves access to
                professional revenue cycle management services that help them
                thrive in today's complex healthcare landscape.
              </Text>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
                Our Values
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg
                      className="w-4 h-4 text-blue-600 dark:text-blue-400"
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
                  <div>
                    <h3 className="font-semibold mb-2 dark:text-white">
                      Accuracy
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We maintain the highest standards of coding accuracy and
                      compliance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg
                      className="w-4 h-4 text-green-600 dark:text-green-400"
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
                  <div>
                    <h3 className="font-semibold mb-2 dark:text-white">
                      Efficiency
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We streamline processes to maximize revenue and reduce
                      administrative burden.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg
                      className="w-4 h-4 text-purple-600 dark:text-purple-400"
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
                  <div>
                    <h3 className="font-semibold mb-2 dark:text-white">
                      Partnership
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We build long-term relationships based on trust,
                      transparency, and mutual success.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg
                      className="w-4 h-4 text-orange-600 dark:text-orange-400"
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
                  <div>
                    <h3 className="font-semibold mb-2 dark:text-white">
                      Integrity
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We conduct business with honesty, ethics, and unwavering
                      commitment to compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our certified professionals bring years of healthcare revenue
              cycle experience to every project
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-slate-700 p-8 rounded-lg text-center">
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">
                {SARAH.name}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                {SARAH.designation}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {SARAH.bio}
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-slate-700 p-8 rounded-lg text-center">
              <div className="w-24 h-24 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-12 h-12 text-green-600 dark:text-green-400"
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
              <h3 className="text-xl font-bold mb-2 dark:text-white">
                {MICHAEL.name}
              </h3>
              <p className="text-green-600 dark:text-green-400 font-semibold mb-4">
                {MICHAEL.designation}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {MICHAEL.bio}
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-slate-700 p-8 rounded-lg text-center">
              <div className="w-24 h-24 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-12 h-12 text-purple-600 dark:text-purple-400"
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
              <h3 className="text-xl font-bold mb-2 dark:text-white">
                {LISA.name}
              </h3>
              <p className="text-purple-600 dark:text-purple-400 font-semibold mb-4">
                {LISA.designation}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {LISA.bio}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Why Choose CPC Coding Claims?
            </h2>
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                Certified Professionals
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                All our coders are certified and stay updated with the latest
                coding standards
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
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                Proven Results
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Track record of improving revenue cycle performance for
                healthcare providers
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
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                Secure & Compliant
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                HIPAA-compliant processes and secure handling of sensitive
                healthcare data
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                24/7 Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Dedicated support team available to address your questions and
                concerns
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help optimize your practice's
            revenue cycle and improve your bottom line.
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
