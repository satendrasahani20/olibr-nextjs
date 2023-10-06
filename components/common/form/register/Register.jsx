import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import LoginWithSocial from "./LoginWithSocial";
import Form from "./FormContent";
import Link from "next/link";
import Button from "../../button/Button";

const Register = () => {
  return (
    <div className="form-inner">
      <h3>Create a Free Olibr Account</h3>

      <Tabs>
        <div className="form-group register-dual">
          <TabList className="btn-box row">
            <Tab className="col-lg-6 col-md-12">
              <Button
                variant="success"
                iconName="la la-user"
                title="Candidate"
              />

            </Tab>

            <Tab className="col-lg-6 col-md-12">
              <Button
                variant="success"
                iconName="la la-briefcase"
                title="Employer"
              />
            </Tab>
          </TabList>
        </div>
        {/* End .form-group */}

        <TabPanel>
          <Form />
        </TabPanel>
        {/* End cadidates Form */}

        <TabPanel>
          <Form />
        </TabPanel>
        {/* End Employer Form */}
      </Tabs>
      {/* End form-group */}

      <div className="bottom-box">
        <div className="text">
          Already have an account?{" "}
          <Link
            href="#"
            className="call-modal login"
            data-bs-toggle="modal"
            data-bs-dismiss="modal"
            data-bs-target="#loginPopupModal"
          >
            LogIn
          </Link>
        </div>
        <div className="divider">
          <span>or</span>
        </div>
        <LoginWithSocial />
      </div>
      {/* End bottom-box LoginWithSocial */}
    </div>
  );
};

export default Register;
