import { user } from "../models/user";
import { userRepository } from "@infrastructure/repositories/user.repository";

const validateEmptyFields = (arr) =>
  arr.map((field) => {
    if (!field) {
      return false;
    } else {
      return field.replace(/ /g, "") === "" ? false : true;
    }
  });

const registerUser = ({
  name = "",
  email = "",
  password = "",
  terms = "",
} = {}) => {
  const verifyEmpty = validateEmptyFields([name, email, password, terms]);
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
          stepOne: true,
        })
      );
      return {
        next: true,
      };
    } else {
      return {
        msg: "Correo invalido, por favor verifique sus datos",
        email: false,
        next: false,
      };
    }
  }
};

const verifySteps = () => {
  const dataUser = JSON.parse(window.localStorage.getItem("user"));
  const { stepOne, stepTwo, stepThree } = dataUser;
  return {
    stepOne,
    stepTwo,
    stepThree,
  };
};

const completeUser = ({
  prefix = "",
  phoneNumber = "",
  address = "",
  country = "",
} = {}) => {
  const verifyEmpty = validateEmptyFields([
    prefix,
    phoneNumber,
    address,
    country,
  ]);
  const empty = verifyEmpty.find((value) => value === false);
  if (empty === false) {
    return {
      msg: "No puede dejar ningun campo vacio",
      next: false,
    };
  } else {
    const dataUser = JSON.parse(window.localStorage.getItem("user"));
    const updateUser = {
      ...dataUser,
      phoneNumber: prefix + phoneNumber,
      address: address,
      country: country,
      stepTwo: true,
    };
    window.localStorage.setItem("user", JSON.stringify(updateUser));
    return {
      next: true,
    };
  }
};

const verifyUser = ({ cardNumber = "", secretCode = "" } = {}) => {
  const verifyEmpty = validateEmptyFields([cardNumber, secretCode]);
  const empty = verifyEmpty.find((value) => value === false);
  if (empty === false) {
    return {
      msg: "No puede dejar ningun campo vacio",
      next: false,
    };
  } else {
    const dataUser = JSON.parse(window.localStorage.getItem("user"));
    const updateUser = {
      ...dataUser,
      cardNumber: cardNumber,
      secretCode: secretCode,
      stepThree: false,
    };
    window.localStorage.setItem("user", JSON.stringify(updateUser));
    return {
      next: true,
    };
  }
};

export const UserService = {
  registerUser,
  completeUser,
  verifyUser,
  verifySteps,
  registrationCompleted: userRepository.sigup,
};
