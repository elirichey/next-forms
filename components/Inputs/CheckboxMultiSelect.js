import { Form, Field } from "react-final-form";

export default function CheckboxMultiSelect(props) {
  const required = (value) => (value ? undefined : "Required");

  const onSubmit = async (values) => {
    console.log("Submit Checkbox Muliselect", values.isChecked);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="isChecked"
            value="Value One"
            validate={required}
            type="checkbox"
          >
            {({ input, meta }) => (
              <div className="checkbox-field">
                <label
                  className={meta.error ? "field-label-error" : "field-label"}
                >
                  Value One
                </label>

                <input {...input} type="checkbox" className="checkbox" />
                {meta.error && (meta.modified || meta.touched) && (
                  <span>{meta.error}</span>
                )}
              </div>
            )}
          </Field>

          <Field
            name="isChecked"
            value="Value Two"
            validate={required}
            type="checkbox"
          >
            {({ input, meta }) => (
              <div className="checkbox-field">
                <label
                  className={meta.error ? "field-label-error" : "field-label"}
                >
                  Value Two
                </label>

                <input {...input} type="checkbox" className="checkbox" />
                {meta.error && (meta.modified || meta.touched) && (
                  <span>{meta.error}</span>
                )}
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
