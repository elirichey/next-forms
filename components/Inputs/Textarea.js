import { Form, Field } from "react-final-form";
import { required } from "../../utils/validation";
import Label from "../Label";

export function TextareaForm(props) {
  const onSubmit = async (values) => {
    console.log("Submit Textarea:::", values.text);
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ text: "" }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Textarea
            name="text"
            label="Textarea Input"
            initialValue="initialValue"
            placeholder="Placeholder"
            validate={required}
            required={true}
            rows="4"
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

export default function Textarea(props) {
  const { name, label, placeholder, validate, required, rows, initialValue } =
    props;
  return (
    <Field name={name} initialValue={initialValue} validate={validate}>
      {({ input, meta }) => (
        <div className="input-field">
          <Label
            name={name}
            label={label}
            hasError={meta.error && meta.touched}
          />
          <textarea
            {...input}
            type="text"
            placeholder={placeholder}
            className="textarea"
            rows={rows}
            required={required}
          />
        </div>
      )}
    </Field>
  );
}
