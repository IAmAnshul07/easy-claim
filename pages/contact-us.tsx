/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../src/shared/enums";
import {
  PageLayout,
  Text,
  List,
  Image,
  LinkTo,
  Seperator,
  Slider
} from "../src/components";
import { iSEO } from "../src/shared/interfaces";

const ContactUs = () => {
  const PAGE_SEO: iSEO = {
    title: "Contact Us - PreciseRCM",
    description:
      "Get in touch with PreciseRCM for medical billing and revenue cycle management services. Contact us for expert healthcare solutions.",
    keywords:
      "PreciseRCM, contact us, medical billing, revenue cycle management, healthcare services, info@precisercm.com",
    author: "PreciseRCM Team"
  };
  return (
    <PageLayout PAGE_SEO={PAGE_SEO} home>
      {/* Hero Section */}
      <section className="container px-3 pb-10 md:pt-20 pt-[80px]">
        <div className="text-center mb-12">
          <Text title className="!text-5xl !font-light mb-4">
            Contact Us
          </Text>
          <Text p className="!text-lg leading-relaxed max-w-2xl mx-auto">
            Ready to optimize your healthcare revenue cycle? Get in touch with
            our expert team for personalized medical billing solutions.
          </Text>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 dark:text-white">
              Send us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-white">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-white">
                  Organization
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                  placeholder="Your Healthcare Practice"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-white">
                  Service Interest
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-slate-700 dark:border-slate-600 dark:text-white">
                  <option>Select a service</option>
                  <option>Medical Coding Services</option>
                  <option>Revenue Cycle Management</option>
                  <option>Medical Credentialing</option>
                  <option>Medical Transcription</option>
                  <option>MIPS/MACRA Consultation</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-white">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                  placeholder="Tell us about your needs..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-500 text-white py-3 px-6 rounded-md font-semibold hover:bg-cyan-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="text-cyan-100 mb-6">
                Ready to transform your healthcare revenue cycle? Our expert
                team is here to help.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="font-semibold">info@precisercm.com</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>India</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-4 dark:text-white">
                Why Choose PreciseRCM?
              </h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-cyan-500 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Certified medical coders with years of experience
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-cyan-500 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  HIPAA compliant and secure processes
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-cyan-500 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Personalized solutions for your practice
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-cyan-500 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  24/7 support and dedicated account management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-16 mt-16">
        <div className="container mx-auto px-3 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Maximize Your Revenue?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-cyan-100">
            Join hundreds of healthcare providers who trust PreciseRCM for their
            medical billing and revenue cycle management needs.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <LinkTo
              href="mailto:info@precisercm.com"
              className="bg-white text-cyan-500 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </LinkTo>
            <LinkTo
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-cyan-500 transition-colors"
            >
              View Our Services
            </LinkTo>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactUs;
