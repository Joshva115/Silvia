import * as yup from "yup";

const wordValidation = /^[A-Za-z]+$/;
// should validate strings only
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const postCode =
  /^(0[289][0-9]{2})|([1345689][0-9]{3})|(2[0-8][0-9]{2})|(290[0-9])|(291[0-4])|(7[0-4][0-9]{2})|(7[8-9][0-9]{2})$/;
//Here are the rules for Australian postcodes:
export const basicSchema = yup.object().shape({
  name: yup
    .string("Please enter your name")
    .required("Please enter your name")
    .matches(wordValidation, { message: "Name should be letters only" }),
  surname: yup
    .string("Please enter your surname")
    .required("Please enter your surname")
    .matches(wordValidation, { message: "Surname should be letters only" }),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  address: yup
    .string("Please enter your full address")
    .required("Your address is necessary"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, {
      message:
        "Must contain a minimum of 5 characters, 1 digit, 1 lower case letter, 1 upper case letter",
    })
    .required("Password is necessary for submission"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is necessary for submission"),
  username: yup
    .string("t")
    .required("You must choose a username")
    .matches(passwordRules, {
      message:
        "Must contain a minimum of 5 characters, 1 digit, 1 lower case letter, 1 upper case letter",
    }),
  city: yup
    .string("Please enter your name")
    .required("Please enter your city")
    .matches(wordValidation, { message: "Name should be letters only" }),
  zip: yup
    .string()
    .matches(postCode, {
      message: "Your Zipcode must be a valid within Australia",
    })
    .required("Your ZIP code is necessary"),
});
export const loginSchema = yup.object().shape({
  email: yup.string().email("Email not valid").required("Email is required"),
  password: yup.string().required("Password is required"),
});
