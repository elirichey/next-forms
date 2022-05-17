import { Form, Field } from "react-final-form";
import isEmail from "validator/lib/isEmail";
import Label from "../Label";

export default function Email(props) {
  const required = (value) => (value ? undefined : "Required");
  const composeValidators = (...validators) => {
    return (value) =>
      validators.reduce(
        (error, validator) => error || validator(value),
        undefined
      );
  };
  const mustBeEmail = (val) => (isEmail(val) ? undefined : "Invalid Email");

  const onSubmit = async (values) => console.log("Submit Email", values.email);

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ email: "" }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="email"
            validate={composeValidators(required, mustBeEmail)}
          >
            {({ input, meta }) => (
              <div className="input-field">
                <Label
                  name="email"
                  label="Email"
                  hasError={meta.error && meta.touched}
                />
                <input
                  {...input}
                  type="email"
                  placeholder="Email"
                  className="text-input"
                  required={true}
                />
              </div>
            )}
          </Field>

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
