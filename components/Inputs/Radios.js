import { Form, Field } from "react-final-form";

const options = ["Value 1", "Value 2", "Value 3"];

export function RadiosForm(props) {
  const onSubmit = async (values) => {
    console.log("Submit Radio:::", values.value);
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ value: "Value 2" }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Radios name="value" options={options} />

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

export default function Radios(props) {
  const { name, options } = props;

  return options.map((item, i) => {
    return (
      <Field name={name} type="radio" value={item} key={i}>
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
                {item}
                <input
                  name={input.name}
                  type="radio"
                  value={item}
                  checked={input.checked}
                  onChange={input.onChange}
                  className="radio"
                />
              </label>
            </div>
          );
        }}
      </Field>
    );
  });
}
