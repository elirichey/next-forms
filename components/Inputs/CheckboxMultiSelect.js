import { Form, Field } from "react-final-form";

export default function CheckboxMultiSelect(props) {
  const onSubmit = async (values) => {
    console.log("Submit Checkbox Muliselect", values.isChecked);
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ isChecked: [] }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="isChecked"
            value="Value One"
            type="checkbox"
            multiple={true}
          >
            {({ input, meta }) => (
              <div className="checkbox-field">
                <label
                  className={
                    meta.error && meta.touched
                      ? "field-label-error"
                      : "field-label"
                  }
                >
                  Value One
                  <input {...input} type="checkbox" className="checkbox" />
                </label>
              </div>
            )}
          </Field>

          <Field name="isChecked" value="Value Two" type="checkbox">
            {({ input, meta }) => (
              <div className="checkbox-field">
                <label
                  className={
                    meta.error && meta.touched
                      ? "field-label-error"
                      : "field-label"
                  }
                >
                  Value Two
                  <input {...input} type="checkbox" className="checkbox" />
                </label>
              </div>
            )}
          </Field>

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
