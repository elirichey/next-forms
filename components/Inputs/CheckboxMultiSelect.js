import { Form, Field } from "react-final-form";

const options = ["Value 1", "Value 2"];

export default function CheckboxMultiSelect(props) {
  const onSubmit = async (values) => {
    console.log("Submit Checkbox Muliselect:::", values.isChecked);
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ isChecked: [] }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <RenderMultiselect
            name="isChecked"
            options={options}
            multiple={true}
          />

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

function RenderMultiselect(props) {
  const { name, options, multiple } = props;

  return options.map((item, i) => {
    return (
      <Field
        name={name}
        value={item}
        type="checkbox"
        multiple={multiple}
        key={i}
      >
        {({ input, meta }) => (
          <div className="checkbox-field">
            <label
              className={
                meta.error && meta.touched ? "field-label-error" : "field-label"
              }
            >
              {item}
              <input {...input} type="checkbox" className="checkbox" />
            </label>
          </div>
        )}
      </Field>
    );
  });
}
