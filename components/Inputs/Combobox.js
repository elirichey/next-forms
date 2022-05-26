import { useState } from "react";
import { Form, Field } from "react-final-form";
import { required } from "../../utils/validation";
import Label from "../Label";

const testData = [
  "Trevor",
  "Ian",
  "Eli",
  "Abigail",
  "Kristin",
  "Margaret",
  "Cody",
  "Matt",
];

export default function Combobox(props) {
  const [selections, setSelections] = useState([]);

  const onSearch = async (values) => console.log("Submit Text", values.text);
  const onSubmit = async () => console.log("Selected Values", selections);

  return (
    <>
      <Form
        onSubmit={onSearch}
        initialValues={{ text: "" }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div className="combobox-input-container">
              <div className="combobox-input">
                <Field name="text" validate={required}>
                  {({ input, meta }) => (
                    <div className="input-field">
                      <Label
                        name="text"
                        label="Combo Box"
                        hasError={meta.error && meta.touched}
                      />
                      <input
                        {...input}
                        type="text"
                        placeholder="Search..."
                        className="text-input"
                        required={true}
                      />
                    </div>
                  )}
                </Field>
              </div>

              <div className="combobox-btn">
                <div className="submit-container">
                  <button
                    className="submit-btn"
                    type="submit"
                    disabled={submitting || pristine}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      />

      <div className="combobox-submit">
        <button
          className="submit-btn"
          onClick={onSubmit}
          disabled={selections.length === 0}
        >
          Submit Selections
        </button>
      </div>
    </>
  );
}
