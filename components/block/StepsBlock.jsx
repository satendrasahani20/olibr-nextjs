import { ThreeEasyStep } from "../common/constants/HomeCommon";

const StepsBlock = () => {
  return (
    <section className="steps-section layout-pt-60 layout-pb-60">
      <div className="auto-container">
        <div className="row">


          <div className="content-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column" data-aos="fade-up">
              <div className="sec-title -type-2">
                <h2>
                  {ThreeEasyStep.title}
                </h2>
                <ul className="steps-list">
                  {
                    ThreeEasyStep.data.map((itm,id) => (
                      <li key={id}>
                        <span className="count">{itm.srNo}</span> {itm.title}
                        start
                      </li>
                    ))
                  }

                </ul>
              </div>
            </div>
          </div>
          {/* End .content-column */}
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column">
              <figure className="image">
                <img src="/images/index-11/text/image-1.png" alt="about" />
              </figure>
            </div>
          </div>
          {/* End .image-column */}
        </div>
      </div>
    </section>
  );
};

export default StepsBlock;
