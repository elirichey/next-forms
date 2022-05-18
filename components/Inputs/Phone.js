import { Form, Field } from "react-final-form";
import {
  required,
  composeValidators,
  mustBePhone,
} from "../../utils/validation";
import { enforceFormat, formatToPhone } from "../../utils/format-phone";

import Label from "../Label";

export default function Phone(props) {
  const onSubmit = async (values) => console.log("Submit Phone", values.phone);

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="phone"
            initialValues={{ phone: "" }}
            validate={composeValidators(required, mustBePhone)}
          >
            {({ input, meta }) => (
              <div className="input-field">
                <Label
                  name="phone"
                  label="Phone Number"
                  hasError={meta.error && meta.touched}
                />
                <input
                  {...input}
                  type="phoneNumber"
                  placeholder="Phone Number"
                  maxLength="16"
                  className="text-input"
                  onKeyUp={formatToPhone}
                  onKeyDown={enforceFormat}
                  pattern={"^((+1)?[s-]?)?(?[1-9]dd)?[s-]?[1-9]dd[s-]?dddd"}
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
