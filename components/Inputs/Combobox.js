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

export default function Combobox(props) {
  const [options, setOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  // 1. Search doesn't filter or anything for now
  //    but if you needed to filter, call api, whatever
  //    this is where you do it...
  // 2. You'd probably want to add loading state too
  const onSearch = async (values) => {
    console.log("Search: ", values.text);
    await callApiForOptions(); // Testing Only...
    setShowOptions(true);
  };
  const callApiForOptions = async () => {
    await new Promise((resolve) => resolve(setOptions(testData)));
  };

  const onSubmit = async (values) => {
    console.log("Selected Values", values.comboboxSelected);
  };

  // Sort Alphabetically
  options.sort((a, b) => a.localeCompare(b));

  return (
    <>
      <Form
        onSubmit={onSubmit}
        initialValues={{ text: "" }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div className="combobox-input-container">
              <div className="combobox-input">
                <Field name="text">
                  {({ input, meta }) => (
                    <div className="input-field">
                      <Label name="text" label="Combo Box" hasError={false} />

                      <div className="combobox-dropdown-options">
                        <input
                          {...input}
                          type="text"
                          placeholder='Type and click search to "Fetch" values...'
                          className="text-input"
                          onFocus={(e) => {
                            const { value } = e.target;
                            if (value !== "") return setShowOptions(true);
                          }}
                        />

                        {/* List dropdown */}
                        {options.length > 0 && showOptions ? (
                          <div className="list-options combobox-list">
                            <ul>
                              {options.map((item, i) => {
                                return (
                                  <li
                                    className={
                                      values.comboboxSelected &&
                                      values.comboboxSelected.includes(item)
                                        ? "option active"
                                        : "option"
                                    }
                                    key={i}
                                  >
                                    <Field
                                      name="comboboxSelected"
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
                    className="submit-btn"
                    onClick={() => onSearch(values.text)}
                  >
                    Search
                  </span>
                </div>
              </div>
            </div>

            <div className="combobox-submit">
              <button
                className="submit-btn"
                onClick={() => onSubmit(values)}
                disabled={
                  values.comboboxSelected &&
                  values.comboboxSelected.length === 0
                }
              >
                Submit Selections
              </button>
            </div>
          </form>
        )}
      />
    </>
  );
}
