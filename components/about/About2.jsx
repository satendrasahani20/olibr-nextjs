import Link from "next/link";
import { Trendsetters } from "../common/constants/HomeCommon";
const About2 = () => {
  return (
    <section className="about-section-two">
        <div className="auto-container">
          <div className="row">
      {/* <!-- Content Column --> */}
      <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
        <div className="inner-column" data-aos="fade-left">
          <div className="sec-title">
            <h2>
              {Trendsetters.title}
            </h2>
            <div className="text">
              {Trendsetters.desc}
            </div>
          </div>
          <ul className="list-style-one">
            {
              Trendsetters.data.map((itm,id)=>(
                <li key={id}>{itm}</li>
              ))
            }
           
          </ul>
          <Link
            href="/employers-dashboard/post-jobs"
            className="theme-btn btn-style-one"
          >
            Post a Job
          </Link>
        </div>
      </div>
      {/* End .content-column */}

      {/* <!-- Image Column --> */}
      <div className="image-column col-lg-6 col-md-12 col-sm-12">
        <figure className="image-box" data-aos="fade-right">
          <img src="/images/resource/image-3.png" alt="resource" />
        </figure>

      </div>
      {/* End image-column */}
    </div>
    </div>
    </section>
  );
};

export default About2;
