/**These are necessary imports / components for the page */
import { PageLayout, Text, LinkTo } from "../src/components";
import ArticleCard from "../src/components/ArticleCards/ArticleCard";
import { SORTED_ARTICLES_BY_DATE } from "../BLOG_CONSTANTS/_ARTICLES_LIST";
import { DEFAULT_SEO } from "../BLOG_CONSTANTS/_BLOG_SETUP";
import FeaturedArticleSection from "../src/components/Misc/FeaturedArticleSection";
import HomeNonFeatureArticles from "../src/components/Misc/HomeNonFeatureAricles";

const Home = () => {
  return (
    <PageLayout home PAGE_SEO={DEFAULT_SEO}>
      {/* Hero Section */}
      <section className="w-full md:pt-[100px] md:pb-[70px] pt-[130px] pb-20 mb-10 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container text-center px-3">
          <Text title className="text-4xl md:text-6xl font-bold mb-6">
            Medical Billing Solutions That Help You!
          </Text>

          <Text p className="mt-6 text-xl md:text-2xl mb-8">
            CPC Coding Claims Company provides accurate medical coding and
            billing services for healthcare providers, ensuring compliance and
            maximizing revenue. Our certified coders handle claims processing,
            denials, and audits, streamlining the revenue cycle management
            process for optimal financial performance.
          </Text>

          <div className="flex justify-center mt-8 flex-wrap gap-4">
            <LinkTo
              href="/contact-us"
              passHref
              className="flex items-center justify-center rounded-md bg-white text-blue-600 px-8 py-3 text-lg font-semibold hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all"
            >
              <span className="block">Get Started Today</span>
            </LinkTo>
            <LinkTo
              href="/services"
              passHref
              className="flex items-center justify-center rounded-md border-2 border-white text-white px-8 py-3 text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
            >
              <span className="block">Our Services</span>
            </LinkTo>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive medical coding and billing solutions designed to
              optimize your revenue cycle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
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
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Medical Coding
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Expert ICD-10 and CPT coding services with certified
                professional coders ensuring accuracy and compliance.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
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
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Claims Processing
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Efficient claims submission and processing with advanced
                technology to maximize reimbursement rates.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
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
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                Denial Management
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Proactive denial management strategies to reduce claim
                rejections and improve revenue cycle efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Why Choose CPC Coding Claims?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                Get Paid Faster
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Streamlined processes ensure prompt payments and improved cash
                flow
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                Increase Profitability
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Reduce AR days and denials to boost your practice's bottom line
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                Ensure Compliance
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Stay compliant with all healthcare regulations and coding
                standards
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                Expert Team
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Certified professional coders with years of healthcare
                experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Resources Section */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Latest Insights & Resources
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest trends in medical coding, billing,
              and healthcare compliance
            </p>
          </div>

          <div className={"flex flex-wrap"}>
            <FeaturedArticleSection />
            <HomeNonFeatureArticles />
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
              <span className="block">Contact Us Today</span>
            </LinkTo>
            <LinkTo
              href="/services"
              passHref
              className="flex items-center justify-center rounded-md border-2 border-white text-white px-8 py-3 text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
            >
              <span className="block">Learn More</span>
            </LinkTo>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
