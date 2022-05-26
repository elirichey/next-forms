import { Form, Field } from "react-final-form";

export default function Radio(props) {
  const onSubmit = async (values) => console.log("Submit Radio", values.value);

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ value: "Value 2" }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Field name="value" type="radio" value="Value 1">
            {({ input, meta }) => {
              return (
                <div className="radio-field">
                  <label
                    className={
                      meta.error && meta.touched
                        ? "field-label-error"
                        : "field-label"
                    }
                  >
                    Value 1
                    <input
                      name={input.name}
                      type="radio"
                      value="Value 1"
                      checked={input.checked}
                      onChange={input.onChange}
                      className="radio"
                    />
                  </label>
                </div>
              );
            }}
          </Field>

          <Field name="value" type="radio" value="Value 2">
            {({ input, meta }) => {
              return (
                <div className="radio-field">
                  <label
                    className={
                      meta.error && meta.touched
                        ? "field-label-error"
                        : "field-label"
                    }
                  >
                    Value 2
                    <input
                      name={input.name}
                      type="radio"
                      value="Value 2"
                      checked={input.checked}
                      onChange={input.onChange}
                      className="radio"
                    />
                  </label>
                </div>
              );
            }}
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
