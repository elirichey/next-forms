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
  const [selections, setSelections] = useState([]);

  const getResults = async () => {
    await new Promise((resolve) => resolve(setOptions(testData)));
  };

  const onSearch = async (values) => {
    await getResults();
    setShowOptions(true);
  };

  const onSubmit = async () => console.log("Selected Values", selections);

  // Sort Alphabetically
  options.sort((a, b) => a.localeCompare(b));

  return (
    <>
      <Form
        onSubmit={onSearch}
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
                          placeholder="Search..."
                          className="text-input"
                          onFocus={(e) => {
                            if (e.target.value !== "") {
                              return setShowOptions(true);
                            }
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
                                      selections.includes(item)
                                        ? "option active"
                                        : "option"
                                    }
                                    key={i}
                                  >
                                    <button
                                      onClick={() => {
                                        if (!selections.includes(item)) {
                                          // Item
                                          setSelections([...selections, item]);
                                        } else {
                                          // Remove item
                                          let filteredSelections = [];
                                          [...selections].map((x) => {
                                            if (x !== item) {
                                              filteredSelections.push(x);
                                            }
                                          });
                                          setSelections(filteredSelections);
                                        }
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
