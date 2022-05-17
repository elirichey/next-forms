import { Form, Field } from "react-final-form";
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
            <Label name="selection" label="Status" />
            <Field
              name="selection"
              component="select"
              className="text-input"
              initialValue="Option 2"
            >
              <option />
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </Field>
          </div>

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
