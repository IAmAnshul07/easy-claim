import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineTwitter
} from "react-icons/ai";

const ContactHeader = () => {
  return (
    <div
      className="text-white py-2 px-4 relative z-40"
      style={{ backgroundColor: "#20c4d9" }}
    >
      <div className="container mx-auto">
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between text-sm">
          {/* Social Media Links - Left Side */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.facebook.com/cpccodingclaims"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-100 transition-colors"
            >
              <AiFillFacebook className="text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/company/cpc-coding-claims"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-100 transition-colors"
            >
              <AiFillLinkedin className="text-lg" />
            </a>
            <a
              href="https://twitter.com/CPCCodingClaims"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-100 transition-colors"
            >
              <AiOutlineTwitter className="text-lg" />
            </a>
          </div>

          {/* Contact Information - Center */}
          <div className="flex items-center space-x-6">
            {/* India Phone */}
            <div className="flex items-center space-x-2">
              <span className="text-lg">🇮🇳</span>
              <span>
                <b>+91 79458-89887</b>
              </span>
            </div>

            {/* US Phone */}
            <div className="flex items-center space-x-2">
              <span className="text-lg">🇺🇸</span>
              <span>
                <b>+1 (832) 602-4026</b>
              </span>
            </div>

            <div>|</div>

            {/* Info Email */}
            <div className="flex items-center space-x-2">
              <FiMail className="text-sm" />
              <a
                href="mailto:info@precisercm.com"
                className="text-white hover:text-cyan-100 transition-colors"
              >
                <b>info@precisercm.com</b>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col items-center text-xs space-y-2">
          {/* Social Media Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.facebook.com/cpccodingclaims"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-100 transition-colors"
            >
              <AiFillFacebook className="text-base" />
            </a>
            <a
              href="https://www.linkedin.com/company/cpc-coding-claims"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-100 transition-colors"
            >
              <AiFillLinkedin className="text-base" />
            </a>
            <a
              href="https://twitter.com/CPCCodingClaims"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-100 transition-colors"
            >
              <AiOutlineTwitter className="text-base" />
            </a>
          </div>

          {/* Contact Information - Centered */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <span>🇮🇳</span>
              <span>+91 79458-89887</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>🇺🇸</span>
              <span>+1 (832) 602-4026</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <FiMail className="text-xs" />
              <a
                href="mailto:info@precisercm.com"
                className="text-white hover:text-cyan-100 transition-colors"
              >
                info@precisercm.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
