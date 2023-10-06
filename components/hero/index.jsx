import ImageBox from "./ImageBox";
import PopularSearch from "./PopularSearch";
import SearchForm from "../common/InputText/SearchForm";
import Button from "../common/button/Button";

const index = () => {
  return (
    <section className="banner-section">
      <div className="auto-container">
        <div className="row">
          <div className="content-column col-lg-7 col-md-12 col-sm-12">
            <div
              className="inner-column"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="title-box">
                <h3>
                  Top Companies Hire Top <span className="colored">Developers</span> With Olibr
                </h3>
                <div className="text">
                  Hire thoroughly vetted seasoned developers from our exclusive database!
                </div>
              </div>


              <div className="popular-searches">
                <span className="title">	&#10003; Free Job Postings</span> <br />
                <span className="title"> 	&#10003; Free Database Access </span> <br /> <br />
              </div>
              <Button
                title="Hire Developer"
              />

              {/* <div className="job-search-form">
                <SearchForm />
              </div>
              <PopularSearch /> */}
            </div>
          </div>
          {/* End .col */}

          <div className="image-column col-lg-5 col-md-12">
            <ImageBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
