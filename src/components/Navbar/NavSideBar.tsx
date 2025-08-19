import { useEffect, useState } from "react";
import { THEMES } from "../../shared/enums";
import {
  addBodyNoScroll,
  combineClasses,
  getCategories,
  removeBodyNoScroll
} from "../../utils/utils";
import classes from "./Navbar.module.scss";
import { Text, LinkTo } from "../../components";
import { useTheme } from "next-themes";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import NavCatergoryDD from "../Misc/NavCategoryDD";
import { iNavLink, iNavSetup, iNavSocials } from "../../shared/interfaces";

interface IProps {
  openSidebar: boolean;
  closeNavSidebar: () => void;
  navSetup: iNavSetup;
  changeTheme: () => void;
}

const NavSidebar = ({
  openSidebar = false,
  closeNavSidebar,
  navSetup,
  changeTheme
}: IProps) => {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    openSidebar ? addBodyNoScroll() : removeBodyNoScroll();

    return () => {
      removeBodyNoScroll();
    };
  }, [openSidebar]);

  const [openDD, setOpenDD] = useState(false);

  return (
    <>
      {openSidebar ? (
        <div className="backdrop" onClick={closeNavSidebar}></div>
      ) : null}

      <aside
        className={combineClasses(
          classes.nav_sidebar_wrapper,
          openSidebar && classes.open,
          "dark:bg-slate-900 dark:text-white bg-white text-black flex flex-col"
        )}
      >
        <div className="flex-shrink-0">
          <div
            className="flex items-center justify-between pb-3"
            onClick={closeNavSidebar}
          >
            <p className="">menu</p>
            <div>
              <MdOutlineClose className="text-slate-800 dark:text-white text-[25px]" />
            </div>
          </div>
          <hr />
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="my-8">
            <h3 className="text-lg font-semibold mb-4 dark:text-white">
              Navigation
            </h3>
            {navSetup.sideNavLinks.map((each: iNavLink, i: any) =>
              each.type !== "dropdown" ? (
                !each.newTab ? (
                  <LinkTo
                    href={each.path}
                    key={i}
                    passHref
                    className="text-[16px] block my-3 py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    {each.label}
                  </LinkTo>
                ) : (
                  <a
                    href={each.path}
                    key={each.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[16px] block my-3 py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors flex-wrap"
                  >
                    {each.label}
                  </a>
                )
              ) : (
                <NavCatergoryDD
                  key={i}
                  label={each.label}
                  openDD={openDD}
                  setOpenDD={() => setOpenDD(!openDD)}
                />
              )
            )}
          </div>

          <div className="my-8">
            <h3 className="text-lg font-semibold mb-4 dark:text-white">
              Quick Links
            </h3>
            <LinkTo
              href="/blog"
              passHref
              className="text-[16px] block my-3 py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
            >
              All Articles
            </LinkTo>
            <LinkTo
              href="/services"
              passHref
              className="text-[16px] block my-3 py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
            >
              Our Services
            </LinkTo>
            <LinkTo
              href="/contact-us"
              passHref
              className="text-[16px] block my-3 py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
            >
              Get Quote
            </LinkTo>
          </div>
          <hr />
          <div className="my-8">
            <h3 className="text-lg font-semibold mb-4 dark:text-white">
              Contact Info
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <span>🇮🇳</span>
                <span>+91 79458-89887</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🇺🇸</span>
                <span>+1 (832) 602-4026</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <a
                  href="mailto:info@precisercm.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  info@precisercm.com
                </a>
              </div>
            </div>
          </div>

          <div className="my-8">
            <h3 className="text-lg font-semibold mb-4 dark:text-white">
              Follow Us
            </h3>
            {navSetup.socials && (
              <div className="flex space-x-4">
                {navSetup.socials.map((each: iNavSocials) => (
                  <a
                    href={each.link}
                    key={each.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[24px] hover:scale-110 transition-transform"
                  >
                    {each.icon}
                  </a>
                ))}
              </div>
            )}
          </div>
          <div className="mt-5 mb-4">
            <p className="mb-2 font-light">
              Switch To {theme === THEMES.LIGHT ? "Dark" : "Light"} Theme :
            </p>
            <button
              name="theme-switch"
              aria-label="theme-switch"
              className={combineClasses(
                classes.theme_switch,
                "dark:text-white text-black"
              )}
              onClick={() => changeTheme()}
            >
              {theme === THEMES.DARK ? (
                <BsFillSunFill className="text-2xl" />
              ) : (
                <BsFillMoonFill className="text-lg" />
              )}
            </button>
          </div>
          <hr />
          <div className="my-5">
            <p className="text-sm font-light dark:text-gray-400 text-gray-500 mb-1">
              Copyright © 2022
            </p>
            <LinkTo
              href="/privacy-policy"
              passHref
              className="text-sm font-light dark:text-gray-400 text-gray-500 pr-3"
            >
              Privacy Policy
            </LinkTo>
            <LinkTo
              href="/terms-and-condition"
              passHref
              className="text-sm font-light dark:text-gray-400 text-gray-500"
            >
              Terms and Conditions
            </LinkTo>
          </div>
        </div>
      </aside>
    </>
  );
};

export default NavSidebar;
