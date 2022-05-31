import { Form, Field } from "react-final-form";

const options = [
  { initialValue: false, name: "Value 1" },
  { initialValue: false, name: "Value 2" },
  { initialValue: true, name: "Value 3" },
];

export default function Radio(props) {
  const onSubmit = async (values) => {
    console.log("Submit Radio:::", values.value);
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ value: "Value 2" }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <RenderRadios name="value" options={options} />

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

function RenderRadios(props) {
  const { name, options } = props;

  return options.map((item, i) => {
    const { initialValue } = item;
    return (
      <Field
        name={name}
        initialValue={initialValue}
        type="radio"
        value={item}
        key={i}
      >
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
                {item.name}
                <input
                  name={input.name}
                  type="radio"
                  value={item.name}
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
