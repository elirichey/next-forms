import { Form, Field } from "react-final-form";

export default function Checkbox(props) {
  const onSubmit = async (values) => {
    console.log("Submit Checkbox:::", values.isChecked);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <RenderCheckbox name="isChecked" label="Do you agree?" />
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

function RenderCheckbox(props) {
  const { name, label } = props;

  return (
    <Field name={name} type="checkbox">
      {({ input, meta }) => (
        <div className="checkbox-field">
          <label className={meta.error ? "field-label-error" : "field-label"}>
            {label}
            <input {...input} type="checkbox" className="checkbox" />
          </label>

          {meta.error && (meta.modified || meta.touched) && (
            <span>{meta.error}</span>
          )}
        </div>
      )}
    </Field>
  );
}
