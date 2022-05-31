import { Form, Field } from "react-final-form";
import { required } from "../../utils/validation";
import Label from "../Label";

export function DateForm(props) {
  const onSubmit = async (values) => console.log("Submit Text:::", values.text);

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ text: "" }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Date
            name="text"
            label="Date *"
            initialValue="initialValue"
            placeholder="Placeholder"
            validate={required}
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

export default function Date(props) {
  const { name, label, validate, required, placeholder, initialValue } = props;

  return (
    <Field name={name} initialValue={initialValue} validate={validate}>
      {({ input, meta }) => (
        <div className="input-field date">
          <Label
            name={name}
            label={label}
            hasError={meta.error && meta.touched}
          />
          <input
            {...input}
            type="date"
            placeholder={placeholder}
            className="text-input"
            required={required}
          />
        </div>
      )}
    </Field>
  );
}
