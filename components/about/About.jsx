import { OlibrBenefit } from "../common/constants/HomeCommon";

const About = () => {

  return (
    <section className="app-section layout-pt-120">
      <div className="auto-container">
        <div className="row justify-content-between align-items-center">
          {/* <!-- Image Column --> */}
          <div className="image-column col-lg-6 col-md-12 col-sm-12 order-1">
            <div className="bg-shape"></div>
            <figure className="image" data-aos="fade-right">
              <img src="/images/index-11/download/1.png" alt="hero" />
            </figure>
          </div>

          <div className="content-column col-lg-5 col-md-12 col-sm-12 order-2">
            <div
              className="text-left inner-column pt-0 pb-0"
              data-aos="fade-left"
            >
              <div className="sec-title">
              <h2>{OlibrBenefit.title}</h2>
              </div>

              <div className="content-icons">
                {OlibrBenefit.data.map((item,id) => (
                  <div className="item" key={id}>
                    <div className="icon-wrap">
                      <span className={`icon ${item.icon}`}></span>
                    </div>
                    <div className="content">
                      <p className="mt-0">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
