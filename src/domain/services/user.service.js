import { user } from "../models/user";
import { userRepository } from "@infrastructure/repositories/user.repository";

const registerUser = ({
  name = "",
  email = "",
  password = "",
  terms = "",
} = {}) => {
  const verifyEmpty = [name, email, password, terms].map((field) => {
    if (!field) {
      return false;
    } else {
      return field.replace(/ /g, "") === "" ? false : true;
    }
  });
  const empty = verifyEmpty.find((value) => value === false);
  if (empty === false) {
    return {
      msg: "No puede dejar ningun campo vacio",
      next: false,
    };
  } else {
    const validateEmail = (email) => {
      const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    };
    if (validateEmail(email)) {
      window.localStorage.setItem(
        "user",
        JSON.stringify({
          ...user,
          email: email,
          name: name,
          password: password,
          terms: terms,
        })
      );
      return {
        next: true,
      };
    } else {
      return {
        msg: "Correo invalido, por favor verifique sus datos",
        next: false,
      };
    }
  }
};

const completeUser = () => {};

const verifyUser = () => {};

export const UserService = {
  registerUser,
  completeUser,
  verifyUser,
  registrationCompleted: userRepository.sigup,
};
