import { Color } from "../colors/Colors";

export default validate = {
  type: "",
  min: 0,

  validateEmail(email) {
    const regular_expression =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regular_expression.test(email);
  },

  validatePassword(password) {
    const is_password = password.length > 3 ? true : false;
    return is_password;
  },

  validate(text) {
    if (this.min > 0 && text.length < this.min) return false;
    switch (this.type) {
      case "email":
        return this.validateEmail(text);
      case "password":
        return this.validatePassword(text);
      default:
        return true;
    }
  },

  handleValidation(text) {
    if (!text) {
      return "single";
    }
    if (this.validate(text)) {
      return "success";
    }
    return "error";
  },

  styleCheckValueInit(email) {
    const inputValuation = this.handleValidation(email);
    if (inputValuation === "error") {
      return { borderColor: Color.red };
    }
    if (inputValuation === "success") {
      return { borderColor: Color.green };
    }
    return { borderColor: Color.gray };
  },
};
