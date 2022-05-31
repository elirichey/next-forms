import { Form, Field } from "react-final-form";
import {
  required,
  composeValidators,
  mustBeEmail,
} from "../../utils/validation";
import Label from "../Label";

export function EmailForm(props) {
  const onSubmit = async (values) => console.log("Submit Email", values.email);

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Email
            name="email"
            label="Email *"
            initialValue="initialValue@email.com"
            validate={composeValidators(required, mustBeEmail)}
            placeholder="email@example.com"
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

export default function Email(props) {
  const { name, label, validate, placeholder, required, initialValue } = props;

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
            type="email"
            placeholder={placeholder}
            className="text-input"
            required={required}
          />
        </div>
      )}
    </Field>
  );
}
