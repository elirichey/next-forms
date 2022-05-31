import { useState } from "react";
import { Form, Field } from "react-final-form";
import Label from "../Label";
import {
  required,
  composeValidators,
  cannotBeValue,
} from "../../utils/validation";

export function SelectCustomForm(props) {
  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState("(Select)");

  const onSubmit = async (values) => {
    // Only return a non-null value because this component renders twice...
    //   1. State update for "selected"
    //   2. Field Input update
    if (!values.selection) return;
    console.log("Submit Selection:::", values.selection);
  };

  const options = [
    "Option A",
    "Option B",
    "Option C",
    "Option D",
    "Option E",
    "Option F",
    "Option G",
    "Option H",
  ];

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <SelectCustom
            name="selection"
            label="Custom Select *"
            options={options}
            values={values}
            selected={selected}
            setSelected={setSelected}
            validate={composeValidators(required, cannotBeValue)}
            showOptions={showOptions}
            setShowOptions={setShowOptions}
          />

          {/* Submit */}
          <div className="submit-container relative-index">
            <button
              className="submit-btn"
              onClick={onSubmit}
              disabled={submitting || values.selection === "(Select)"}
            >
              Submit
            </button>
          </div>
        </form>
      )}
    />
  );
}

export default function SelectCustom(props) {
  const {
    name,
    label,
    options,
    validate,
    showOptions,
    setShowOptions,
    selected,
    setSelected,
  } = props;

  return (
    <>
      <div className="input-field relative-index">
        {/* Hidden Input */}
        <Field name={name} validate={validate} initialValue={selected}>
          {({ input, meta }) => (
            <div className="input-field">
              <Label
                name={name}
                label={label}
                hasError={meta.error && meta.touched}
              />
              <input
                {...input}
                type="hidden" // REQUIRED FOR CUSTOM SELECT
                required={true}
              />
            </div>
          )}
        </Field>

        <div className="select-input-container">
          {/* Main Selector */}
          <button
            className="select-input"
            onClick={() => setShowOptions(!showOptions)}
          >
            {selected}
            <span className={showOptions ? "indicator open" : "indicator"}>
              {`«`}
            </span>
          </button>

          {/* List dropdown */}
          {showOptions ? (
            <div className="list-options">
              <ul>
                {options.map((item, i) => {
                  return (
                    <li className="option" key={i}>
                      <button
                        onClick={() => {
                          setSelected(item);
                          setShowOptions(false);
                        }}
                      >
                        {item}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
        </div>
      </div>

      {/* List Dropdown - Background Listener */}
      {showOptions ? (
        <span
          className="select-external-listener"
          onClick={() => setShowOptions(false)}
        />
      ) : null}
    </>
  );
}
