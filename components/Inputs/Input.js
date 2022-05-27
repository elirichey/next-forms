import { Form, Field } from "react-final-form";
import { required } from "../../utils/validation";
import Label from "../Label";

export default function Input(props) {
  const onSubmit = async (values) => console.log("Submit Text:::", values.text);

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ text: "" }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <RenderPhoneInput
            name="text"
            label="Text Input *"
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

function RenderPhoneInput(props) {
  const { name, label, validate, required, placeholder } = props;

  return (
    <Field name={name} validate={validate}>
      {({ input, meta }) => (
        <div className="input-field">
          <Label
            name={name}
            label={label}
            hasError={meta.error && meta.touched}
          />
          <input
            {...input}
            type="text"
            placeholder={placeholder}
            className="text-input"
            required={required}
          />
        </div>
      )}
    </Field>
  );
}
