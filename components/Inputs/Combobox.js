import { useState } from "react";
import { Form, Field } from "react-final-form";
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

export function ComboboxForm(props) {
  const [showOptions, setShowOptions] = useState(false);

  const onSearch = async (values) => {
    console.log("Search:::", values);
    setShowOptions(true);
  };

  const onSubmit = async (values) => {
    console.log("Selected Values:::", values.comboboxSelected);
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ text: null }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Combobox
            searchName="text"
            optionName="comboboxSelected"
            label="Combo Box"
            values={values}
            options={testData}
            searchPlaceholder='Type and click search to "Fetch" values...'
            showOptions={showOptions}
            setShowOptions={setShowOptions}
            onSearch={onSearch}
          />

          <div className="combobox-submit">
            <button
              className="submit-btn"
              disabled={
                values.comboboxSelected && values.comboboxSelected.length === 0
              }
            >
              Submit Selections
            </button>
          </div>
        </form>
      )}
    />
  );
}

export default function Combobox(props) {
  const {
    optionName,
    searchName,
    values,
    options,
    label,
    onSearch,
    searchPlaceholder,
    showOptions,
    setShowOptions,
  } = props;

  // Sort Alphabetically
  options.sort((a, b) => a.localeCompare(b));

  return (
    <div className="combobox-input-container">
      <div className="combobox-input">
        <Field name={searchName}>
          {({ input, meta }) => (
            <div className="input-field">
              <Label name={searchName} label={label} hasError={false} />

              <div className="combobox-dropdown-options">
                <input
                  {...input}
                  type="text"
                  placeholder={searchPlaceholder}
                  className="text-input"
                  onFocus={(e) => {
                    const { value } = e.target;
                    if (value !== "") return setShowOptions(true);
                  }}
                />
              </div>

              {/* List dropdown */}
              {options.length > 0 && showOptions ? (
                <div className="list-options combobox-list">
                  <ul>
                    {options.map((item, i) => {
                      return (
                        <li
                          className={
                            values &&
                            values.comboboxSelected &&
                            values.comboboxSelected.includes(item)
                              ? "option active"
                              : "option"
                          }
                          key={i}
                        >
                          <Field
                            name={optionName}
                            value={item}
                            type="checkbox"
                            multiple={true}
                          >
                            {({ input, meta }) => (
                              <div className="checkbox-field combobox">
                                <label className="field-label">
                                  {item}
                                  <input
                                    {...input}
                                    type="checkbox"
                                    className="checkbox"
                                  />
                                </label>
                              </div>
                            )}
                          </Field>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : null}
            </div>
          )}
        </Field>
      </div>

      {/* List Dropdown - Background Listener */}
      {showOptions ? (
        <span
          className="select-external-listener"
          onClick={() => setShowOptions(false)}
        />
      ) : null}

      <div className="combobox-btn">
        <div className="submit-container">
          <span
            className={
              values.text && values.text ? "submit-btn" : "submit-btn disabled"
            }
            onClick={
              values.text && values.text !== "" ? () => onSearch(values) : null
            }
          >
            Search
          </span>
        </div>
      </div>
    </div>
  );
}
