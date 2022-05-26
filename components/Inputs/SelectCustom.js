import { useRef, useState, useEffect } from "react";
// import { Form, Field } from "react-final-form";
import Label from "../Label";
// import { required, composeValidators, mustBeEmail } from "../../utils/validation";

export default function SelectCustom(props) {
  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState("(Select)");

  const onSubmit = async (values) => {
    console.log("Submit Selection", values.selection);
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
    <>
      <div className="input-field relative-index">
        <Label name="selection" label="Status" />
        <div className="select-input-container">
          <button
            className="select-input"
            onClick={() => setShowOptions(!showOptions)}
          >
            {selected}
            <span className={showOptions ? "indicator open" : "indicator"}>
              {`«`}
            </span>
          </button>

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

      {showOptions ? (
        <span
          className="select-external-listener"
          onClick={() => setShowOptions(false)}
        />
      ) : null}

      <div className="submit-container relative-index">
        <button className="submit-btn" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}
