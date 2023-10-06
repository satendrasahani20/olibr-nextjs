import LoginWithSocial from "./LoginWithSocial";
import Button from "../../button/Button";
import LinkButton from "../../button/LinkButton";

const FormContent = () => {
  return (
    <div className="form-inner">
      <h3>Login to Olibr</h3>

      {/* <!--Login Form--> */}
      <form method="post">
        <div className="form-group">
          <label>Username</label>
          <input type="text" name="username" placeholder="Username" required />
        </div>
        {/* name */}

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        {/* password */}

        <div className="form-group">
          <div className="field-outer">
            <div className="input-group checkboxes square">
              <input type="checkbox" name="remember-me" id="remember" />
              <label htmlFor="remember" className="remember">
                <span className="custom-checkbox"></span> Remember me
              </label>
            </div>
            <a href="#" className="pwd">
              Forgot password?
            </a>
          </div>
        </div>
        {/* forgot password */}

        <div className="form-group">
          <Button
            type="submit"
            title="Log In"
          />
        </div>
        {/* login */}
      </form>
      {/* End form */}

      <div className="bottom-box">
        <div className="text">
          Don&apos;t have an account?{" "}
          <LinkButton
           href="#"
           toggle={"modal"}
           title={"Signup"}
           toggleTarget={"#registerModal"}
           variant="only-gray-title"
          />
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

export default FormContent;
