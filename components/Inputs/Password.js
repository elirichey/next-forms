import { useState } from "react";
import { required, composeValidators } from "../../utils/validation";
import { Form, Field } from "react-final-form";
import Label from "../Label";

export function PasswordForm(props) {
  const [strength, setStrength] = useState(null);
  const [hidePassword, setHidePassword] = useState(true);

  const mustBePassword = (val) => {
    // 1 lower case, 1 upper case, 1 number, one special character
    // at least 8 characters long
    const mediumRegex = new RegExp(
      "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
    );
    // (1 lower case, 1 upper case) or
    // (1 lower case, 1 number) or
    // (1 upper case, one special character) &&
    // at least 6 characters long
    const strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );

    const mediumPassword = mediumRegex.test(val);
    const strongPassword = strongRegex.test(val);
    const isStrong = strongPassword;
    const isMedium = mediumPassword && !strongPassword;
    const isWeak = !mediumPassword && !strongPassword;

    isStrong ? setStrength("Strong") : null;
    isMedium ? setStrength("Medium") : null;
    isWeak ? setStrength("Weak") : null;

    if (val.length >= 6) return undefined;
    else return "Password is too short";
  };

  const onSubmit = async (values) => {
    console.log("Submit Password:::", values.password);
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ password: "" }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Password
            name="password"
            label="Password *"
            initialValue="initialValue"
            placeholder="Password"
            hidePassword={hidePassword}
            setHidePassword={setHidePassword}
            // validate={required} // No Checking Strength
            validate={composeValidators(required, mustBePassword)} // Tests Password Strength
            strength={strength}
            required={true}
          />

          <div className="submit-container">
            <button
              className="submit-btn"
              type="submit"
              disabled={submitting || pristine}
            >
              Submit
            </button>
          </div>
        </form>
      )}
    />
  );
}

export default function Password(props) {
  const {
    name,
    label,
    validate,
    required,
    placeholder,
    hidePassword,
    setHidePassword,
    strength,
    initialValue,
  } = props;

  return (
    <Field name={name} initialValue={initialValue} validate={validate}>
      {({ input, meta }) => (
        <div className="input-field">
          <Label
            name={name}
            label={label}
            hasError={meta.error && meta.touched}
          />
          <input
            {...input}
            type={hidePassword ? "password" : "text"}
            placeholder={placeholder}
            className="text-input"
            required={required}
          />

          {hidePassword ? (
            <span
              className="password-visable"
              onClick={() => setHidePassword(false)}
            >
              Show
            </span>
          ) : (
            <span
              className="password-visable"
              onClick={() => setHidePassword(true)}
            >
              Hide
            </span>
          )}

          {input.value.length > 6 ? (
            <span className="password-strength">{strength}</span>
          ) : null}
        </div>
      )}
    </Field>
  );
}
