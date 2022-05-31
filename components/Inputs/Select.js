import { Form, Field } from "react-final-form";
import { required } from "../../utils/validation";
import Label from "../Label";

const options = ["Option 1", "Option 2", "Option 3"];

export function SelectForm(props) {
  const onSubmit = async (values) => {
    console.log("Submit Selection:::", values.selection);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Select
            name="selection"
            label="Selection *"
            initialValue="Option 2"
            options={options}
            validate={required}
            required={true}
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

export default function Select(props) {
  const { name, label, options, validate, required, initialValue } = props;

  return (
    <div className="input-field">
      <Field name={name} validate={validate} initialValue={initialValue}>
        {({ input, meta }) => (
          <div className="text_input_field">
            <Label
              name={name}
              label={label}
              hasError={meta.error && meta.touched}
            />
            <select {...input} required={required} className="text-input">
              <option />
              {options.map((item, i) => {
                return (
                  <option value={item} key={i}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        )}
      </Field>
    </div>
  );
}
