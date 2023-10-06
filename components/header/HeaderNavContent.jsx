import Link from "next/link";
import {
  blogItems,
  candidateItems,
  employerItems,
  findJobItems,
  homeItems,
  pageItems,
  shopItems,
} from "../../data/mainMenuData";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { useRouter } from "next/router";

const HeaderNavContent = () => {
  const router = useRouter();

  return (
    <>
      <nav className="nav main-menu">
        <ul className="navigation" id="navbar">
          {/* current dropdown */}
          <li
            className={`${
              isActiveParent(homeItems, router.asPath) ? "current" : ""
            } dropdown`}
          >
            <span>Home</span>
          </li>
          {/* End homepage menu items */}

          <li
            className={`${
              isActiveParent(findJobItems, router.asPath) ? "current" : ""
            } dropdown has-mega-menu`}
            id="has-mega-menu"
          >
            <span>Search Talent</span>
          </li>
          {/* End findjobs menu items */}

          <li
            className={`${
              isActiveParent(employerItems, router.asPath) ||
              router.asPath === "/employers-dashboard/dashboard"
                ? "current"
                : ""
            } dropdown`}
          >
            <span>Search Job</span>
          </li>
          {/* End Employers menu items */}

          <li
            className={`${
              isActiveParent(candidateItems, router.asPath) ||
              router.asPath === "/candidates-dashboard/dashboard"
                ? "current"
                : ""
                ? "current"
                : ""
            } dropdown`}
          >
            <span>Skill Library</span>
          </li>
          {/* End Candidates menu items */}

          <li
            className={`${
              isActiveParentChaild(blogItems, router.asPath) ? "current" : ""
            } dropdown`}
          >
            <span>Blog</span>
          </li>
          {/* End Blog menu items */}

          {/* End Pages menu items */}
        </ul>
      </nav>
    </>
  );
};

export default HeaderNavContent;
