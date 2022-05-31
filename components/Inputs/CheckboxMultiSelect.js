import { Form, Field } from "react-final-form";

const options = ["Value 1", "Value 2", "Value 3"];

export function CheckboxMultiSelectForm(props) {
  const onSubmit = async (values) => {
    console.log("Submit Checkbox Muliselect:::", values.isChecked);
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ isChecked: [] }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <CheckboxMultiSelect
            name="isChecked"
            options={options}
            multiple={true}
            initialValues={[options[0], options[2]]}
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

export default function CheckboxMultiSelect(props) {
  const { name, options, multiple, initialValues } = props;

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
              <input
                {...input}
                type="checkbox"
                className="checkbox"
                checked={initialValues.some((x) => x === item)}
              />
            </label>
          </div>
        )}
      </Field>
    );
  });
}
