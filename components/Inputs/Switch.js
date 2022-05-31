import { Form, Field } from "react-final-form";
import Label from "../Label";

export function SwitchForm(props) {
  const onSubmit = async (values) =>
    console.log("Submit Switch:::", values.switch);

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Switch name="switch" label="Switch *" active={false} />

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

export default function Switch(props) {
  const { name, label, active } = props;

  return (
    <Field name={name} type="checkbox" initialValue={active}>
      {({ input, meta }) => (
        <div className="checkbox-field flex column pt-15">
          <Label label={label} hasError={meta.error && meta.touched} />
          <label className="switch">
            <input {...input} type="checkbox" className="checkbox" />
            <span className="switch-slider round" />
          </label>
        </div>
      )}
    </Field>
  );
}
