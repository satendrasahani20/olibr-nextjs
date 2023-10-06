export const buttonType = (type) => {
    switch (type) {
        case "primary":
            return "btn-style-one";
        case "secondary":
            return "btn-style-one";
        case "success":
            return "btn-style-four";
        case "danger":
            return "";
        case "light":
            return "btn-style-three";
        case "outline":
            return "social-btn-two facebook-btn";
        case "outline-danger":
            return "social-btn-two google-btn";
        case "only-gray-title":
            return "call-modal signup";
        default:
            return "";
    }
}
