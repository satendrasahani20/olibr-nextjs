import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNavContent from "./HeaderNavContent";
import LinkButton from "../common/button/LinkButton";
import Button from "../common/button/Button";

const DefaulHeader2 = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    // <!-- Main Header-->
    <header
      className={`main-header  ${navbar ? "fixed-header animated slideInDown" : ""
        }`}
    >
      {/* <!-- Main box --> */}
      <div className="main-box">
        {/* <!--Nav Outer --> */}
        <div className="nav-outer">
          <div className="logo-box">
            <div className="logo">
              <Link href="/">
                <img src="/images/logo.png" alt="brand" />
              </Link>
            </div>
          </div>
          {/* End .logo-box */}

          <HeaderNavContent />
          {/* <!-- Main Menu End--> */}
        </div>
        {/* End .nav-outer */}

        <div className="outer-box">
          <div className="btn-box">
            <LinkButton
             className={"call-modal"}
             toggle={"modal"}
             title={"Login / Register"}
             variant="light"
             toggleTarget={"#loginPopupModal"}
            />
            <LinkButton
             title={"Developer"}
            />
            <LinkButton
             title={"Client"}
            />

          </div>
        </div>
      </div>
    </header>
  );
};

export default DefaulHeader2;
