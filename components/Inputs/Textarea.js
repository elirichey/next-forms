import { Form, Field } from "react-final-form";
import { required } from "../../utils/validation";
import Label from "../Label";

export default function Textarea(props) {
  const onSubmit = async (values) => {
    console.log("Submit Textarea", values.text);
  };

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
                  label="Textarea Input"
                  hasError={meta.error && meta.touched}
                />
                <textarea
                  {...input}
                  type="text"
                  placeholder="Placeholder"
                  className="textarea"
                  rows="4"
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
