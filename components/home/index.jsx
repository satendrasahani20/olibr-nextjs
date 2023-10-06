import About from "../about/About";
import CallToAction from "../call-to-action/CallToAction";
import LoginPopup from "../common/form/login/LoginPopup";
import Partner from "../common/partner/Partner";
import FooterDefault from "../footer/common-footer";
import HomeHeader from "../header/DefaulHeader2";
import MobileMenu from "../header/MobileMenu";
import Hero1 from "../hero";
import FeatureCandidates from "./FeatureCandidates";
import JobCategory from "./JobCategory";
import StepsBlock from "../block/StepsBlock";
import JobCategory2 from "./JobCategory2";
import About2 from "../about/About2";
import RecentBlog from "./RecentBlog";
import { WhyJoinOlibr } from "../common/constants/HomeCommon";

const index = () => {
  return (
    <>
      <LoginPopup />
      <HomeHeader />
      <MobileMenu />
      <Hero1 />
      <Partner />
      <FeatureCandidates />
      <JobCategory
        title={WhyJoinOlibr.title}
        type="WhyJoinOlibr"
        shortDescr={WhyJoinOlibr.shortDescr}
      />
      <About />
      <CallToAction />
      <StepsBlock />
      <JobCategory2 />
      <About2 />
      <RecentBlog />
      <FooterDefault />
    </>
  );
};

export default index;
