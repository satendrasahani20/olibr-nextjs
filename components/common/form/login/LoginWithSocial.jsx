import LinkButton from "../../button/LinkButton";

const LoginWithSocial = () => {
  return (
    <div className="btn-box row">
      <div className="col-lg-6 col-md-12">
        <LinkButton
          variant="outline"
          iconName="fab fa-facebook-f"
          title={"Log In via Facebook"}
        />
      </div>
      <div className="col-lg-6 col-md-12">
        <LinkButton
          iconName="fab fa-google"
          title={"Log In via Gmail"}
          variant="outline-danger"
        />
      </div>
    </div>
  );
};

export default LoginWithSocial;
