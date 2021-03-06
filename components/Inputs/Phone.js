import { Form, Field } from "react-final-form";
import {
  required,
  composeValidators,
  mustBePhone,
} from "../../utils/validation";
import { enforceFormat, formatToPhone } from "../../utils/format-phone";

import Label from "../Label";

export function PhoneForm(props) {
  const onSubmit = async (values) => {
    console.log("Submit Phone:::", values.phone);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Phone
            name="phone"
            label="Phone Number *"
            initialValue="(xxx) xxx-xxxx"
            placeholder="Phone Number"
            validate={composeValidators(required, mustBePhone)}
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

export default function Phone(props) {
  const { name, label, validate, required, placeholder, initialValue } = props;

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
            type="phoneNumber"
            placeholder={placeholder}
            maxLength="16"
            className="text-input"
            onKeyUp={formatToPhone}
            onKeyDown={enforceFormat}
            pattern="^((+1)?[s-]?)?(?[1-9]dd)?[s-]?[1-9]dd[s-]?dddd"
            required={required}
          />
        </div>
      )}
    </Field>
  );
}
