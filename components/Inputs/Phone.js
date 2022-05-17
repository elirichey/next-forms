import { Form, Field } from "react-final-form";
import Label from "../Label";

export default function Phone(props) {
  const required = (value) => (value ? undefined : "Required");
  const composeValidators = (...validators) => {
    return (value) =>
      validators.reduce(
        (error, validator) => error || validator(value),
        undefined
      );
  };
  const mustBePhone = async (val) => {
    const numb = val.match(/\d/g);
    numb = numb.join("");
    if (numb.length < 10) return "Invalid Phone Number";
    else return undefined;
  };

  const onSubmit = async (values) => console.log("Submit Phone", values.phone);

  /************** Start # ***************/
  /************* Formatting *************/
  const isNumericInput = (event) => {
    const key = event.keyCode;
    return (
      (key >= 48 && key <= 57) || // Allow number line
      (key >= 96 && key <= 105) // Allow number pad
    );
  };

  const isModifierKey = (event) => {
    const key = event.keyCode;
    return (
      event.shiftKey === true ||
      key === 35 ||
      key === 36 || // Allow Shift, Home, End
      key === 8 ||
      key === 9 ||
      key === 13 ||
      key === 46 || // Allow Backspace, Tab, Enter, Delete
      (key > 36 && key < 41) || // Allow left, up, right, down
      // Allow Ctrl/Command + A,C,V,X,Z
      ((event.ctrlKey === true || event.metaKey === true) &&
        (key === 65 || key === 67 || key === 86 || key === 88 || key === 90))
    );
  };
  const enforceFormat = (event) => {
    // Input must be of a valid number format or a modifier key, and not longer than ten digits
    if (!isNumericInput(event) && !isModifierKey(event)) event.preventDefault();
  };
  const formatToPhone = (e) => {
    if (isModifierKey(e)) return;
    const input = e.target.value.replace(/\D/g, "").substring(0, 10); // First ten digits of input only
    const areaCode = input.substring(0, 3);
    const middle = input.substring(3, 6);
    const last = input.substring(6, 10);

    if (input.length > 6) e.target.value = `(${areaCode}) ${middle} - ${last}`;
    else if (input.length > 3) e.target.value = `(${areaCode}) ${middle}`;
    else if (input.length > 0) e.target.value = `(${areaCode}`;
  };
  /************** End # ***************/
  /************ Formatting ************/

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="phone"
            initialValues={{ phone: "" }}
            validate={composeValidators(required, mustBePhone)}
          >
            {({ input, meta }) => (
              <div className="input-field">
                <Label
                  name="phone"
                  label="Phone Number"
                  hasError={meta.error && meta.touched}
                />
                <input
                  {...input}
                  type="phoneNumber"
                  placeholder="Phone Number"
                  maxLength="16"
                  className="text-input"
                  onKeyUp={formatToPhone}
                  onKeyDown={enforceFormat}
                  required={true}
                />
              </div>
            )}
          </Field>

          <div className="submit-container">
            <button
              className="submit-btn"
              type="submit"
              disabled={submitting || pristine}
            >
              Submit
            </button>
          </div>
        </form>
      )}
    />
  );
}
