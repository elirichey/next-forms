import { Form, Field } from "react-final-form";
import {
  required,
  composeValidators,
  mustBeEmail,
} from "../../utils/validation";
import Label from "../Label";

export default function Combobox(props) {
  const {} = props;

  const onSubmit = async (values) => console.log("Submit Text", values.text);

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ text: "" }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Field name="text" validate={required}>
            {({ input, meta }) => (
              <div className="input-field">
                <Label
                  name="text"
                  label="Combo Box"
                  hasError={meta.error && meta.touched}
                />
                <input
                  {...input}
                  type="text"
                  placeholder="Placeholder"
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
