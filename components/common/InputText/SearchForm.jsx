import Router from "next/router";
import Button from "../button/Button";
import InputField from "./InputField";
const SearchForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const findJobs = () => {
    Router.push("/jobs")
  }

  return (
    <form onClick={handleSubmit}>
      <div className="row">
        <div className="form-group col-lg-5 col-md-12 col-sm-12">
          <InputField
            iconClass="flaticon-search-1"
            placeholder="Job title, keywords, or company"
          />
        </div>
        {/* <!-- Form Group --> */}
        <div className="form-group col-lg-4 col-md-12 col-sm-12 location">
          <InputField
            iconClass={"flaticon-map-locator"}
            placeholder="City or postcode"
          />
        </div>
        {/* <!-- Form Group --> */}


        <Button
          size={"medium"}
          title="Find Jobs"
          onClick={findJobs}
        />
      </div>
      {/* End .row */}
    </form>
  );
};

export default SearchForm;
