import { Form, Field } from "react-final-form";
import { required } from "../../utils/validation";
import Label from "../Label";

export default function Select(props) {
  const onSubmit = async (values) => {
    console.log("Submit Selection", values.selection);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <Field
              name="selection"
              validate={required}
              initialValue={"Option 2"}
            >
              {({ input, meta }) => (
                <div className="text_input_field">
                  <Label
                    name="selection"
                    label="Selection *"
                    hasError={meta.error && meta.touched}
                  />
                  <select {...input} required={true} className="text-input">
                    <option />
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                  </select>
                </div>
              )}
            </Field>
          </div>

          <div className="submit-container">
            <button className="submit-btn" type="submit" disabled={submitting}>
              Submit
            </button>
          </div>
        </form>
      )}
    />
  );
}
