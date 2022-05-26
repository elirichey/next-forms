import isEmail from "validator/lib/isEmail";

// General
export const required = (value) => (value ? undefined : "Required");
export const composeValidators = (...validators) => {
  return (value) => {
    return validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );
  };
};

// Email
export const mustBeEmail = (val) => {
  return isEmail(val) ? undefined : "Invalid Email";
};

// Phone Number
export const mustBePhone = async (val) => {
  const numb = val.match(/\d/g);
  numb = numb.join("");
  if (numb.length < 10) return "Invalid Phone Number";
  else return undefined;
};

// Cannot be Value
export const cannotBeValue = async (val) => {
  const cannotBeValue = "(Select)";
  if (val === cannotBeValue) return `Please choose a value`;
  else return undefined;
};

// Password
// - Validation lives in the password input file
//   because it also updates state for checking
//   password strength
