/**These are necessary imports / components for the page */
import { PageLayout, Text, LinkTo } from "../src/components";
import ArticleCard from "../src/components/ArticleCards/ArticleCard";
import { SORTED_ARTICLES_BY_DATE } from "../BLOG_CONSTANTS/_ARTICLES_LIST";
import { DEFAULT_SEO } from "../BLOG_CONSTANTS/_BLOG_SETUP";
import FeaturedArticleSection from "../src/components/Misc/FeaturedArticleSection";
import HomeNonFeatureArticles from "../src/components/Misc/HomeNonFeatureAricles";
import ParallaxBanner from "../src/components/ParallaxBanner";
import ScrollEffects from "../src/components/ScrollEffects";

const Home = () => {
  return (
    <PageLayout home PAGE_SEO={DEFAULT_SEO}>
      <ScrollEffects>
        {/* Hero Section with Parallax Effect */}
        <ParallaxBanner imageUrl="/images/banner/bannerImage.jpg">
          <Text title className="text-4xl md:text-6xl font-bold mb-6">
            Your Hassle-Free, Cost-Effective, One-Stop Solution for Medical
            Billing
          </Text>

          <Text p className="mt-6 text-xl md:text-2xl mb-8">
            PreciseRCM Company provides comprehensive medical billing and
            revenue cycle management solutions to healthcare providers
            nationwide. Our certified professionals ensure maximum reimbursement
            and streamlined operations so you can focus on patient care.
          </Text>

          <div className="flex justify-center mt-8 flex-wrap gap-4">
            <LinkTo
              href="/contact-us"
              passHref
              className="flex items-center justify-center rounded-md bg-white text-cyan-500 px-8 py-3 text-lg font-semibold hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all"
            >
              <span className="block">Get Started Today</span>
            </LinkTo>
            <LinkTo
              href="/services"
              passHref
              className="flex items-center justify-center rounded-md border-2 border-white text-white px-8 py-3 text-lg font-semibold hover:bg-white hover:text-cyan-500 transition-all"
            >
              <span className="block">Our Services</span>
            </LinkTo>
          </div>
        </ParallaxBanner>

        {/* Services Section */}
        <section className="py-16 bg-gray-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 scroll-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
                Our Comprehensive Services
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We provide electronic claim submission, billing and collection
                services to healthcare providers
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg scroll-slide-in delay-100">
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
                  Medical Coding Services
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Expert ICD-10 and CPT coding with certified professional
                  coders ensuring accurate and timely medical coding to maximize
                  reimbursements and maintain compliance.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg scroll-slide-in delay-200">
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
                  Revenue Cycle Management
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Complete revenue cycle management solutions using your
                  existing EMR and practice management software, giving you full
                  control over your billing process.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg scroll-slide-in delay-300">
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">
                  Medical Credentialing
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Comprehensive credentialing and enrollment services for new
                  and existing medical providers throughout the United States
                  with nationwide support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white dark:bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 scroll-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
                Why Choose PreciseRCM?
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  Competitive Pricing
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Quality services that fit your budget with customized billing
                  solutions
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  Uninterrupted Service
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Reliable support, always available with seamless operations
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
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  Maximize Reimbursement
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Get the most from every claim with accurate coding and
                  efficient processing
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  Reduced Expenses
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Streamline costs for better profitability with efficient
                  processes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 scroll-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
                Medical Billing Process
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our streamlined process ensures efficient claim processing and
                maximum reimbursement
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-green-600 dark:text-green-400"
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
                <h4 className="font-semibold mb-2 dark:text-white">
                  Patient Demographics
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Entry & validation
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-blue-600 dark:text-blue-400"
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
                <h4 className="font-semibold mb-2 dark:text-white">Coding</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  ICD-10 & CPT coding
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-purple-600 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2 dark:text-white">
                  Claims Submission
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Electronic & paper
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-orange-600 dark:text-orange-400"
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
                <h4 className="font-semibold mb-2 dark:text-white">
                  Payment Posting
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Reconciliation
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-center">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-red-600 dark:text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2 dark:text-white">
                  A/R Follow-up
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Denial management
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Resources Section */}
        {/* <section className="py-16 bg-white dark:bg-slate-800">
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
      </section> */}

        {/* CTA Section */}
        <section
          className="py-16 text-white relative z-10"
          style={{ backgroundColor: "#20c4d9" }}
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Partner for Maximum Reimbursement and Revenue Growth
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              With years of experience, we have developed future-ready solutions
              for healthcare providers nationwide. Let's discuss how our medical
              billing services can help your practice achieve better financial
              performance.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <LinkTo
                href="/contact-us"
                passHref
                className="flex items-center justify-center rounded-md bg-white text-cyan-500 px-8 py-3 text-lg font-semibold hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all"
              >
                <span className="block">Contact Us Today</span>
              </LinkTo>
              {/* <LinkTo
                href="/services"
                passHref
                className="flex items-center justify-center rounded-md border-2 border-white text-white px-8 py-3 text-lg font-semibold hover:bg-white hover:text-cyan-500 transition-all"
              >
                <span className="block">Learn More</span>
              </LinkTo> */}
            </div>
          </div>
        </section>
      </ScrollEffects>
    </PageLayout>
  );
};

export default Home;
