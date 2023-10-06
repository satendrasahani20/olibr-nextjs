import { AreYouDeveloper } from "../common/constants/HomeCommon";

const CallToAction = () => {
  return (
    <section className="call-to-action">
      <div className="auto-container">
        <div className="outer-box" data-aos="fade-up">
          <div className="content-column">
            <div className="sec-title">
              <h2>{AreYouDeveloper.title}</h2>
              <a href="#" className="theme-btn btn-style-one bg-blue">
                <span className="btn-title">{AreYouDeveloper.btnTitle}</span>
              </a>
            </div>
          </div>
          {/* End .content-column */}

          <div
            className="image-column"
            style={{ backgroundImage: " url(images/resource/image-1.png)" }}
          >
            <figure className="image">
              <img src="/images/resource/image-1.png" alt="resource" />
            </figure>
          </div>
          {/* End .image-column */}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
