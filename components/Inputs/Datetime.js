import { Form, Field } from "react-final-form";
import { combineDateTime } from "../../utils/format-datetime";
import { required } from "../../utils/validation";
import Label from "../Label";
import Date from "./Date";
import Time from "./Time";

export function DatetimeForm(props) {
  const onSubmit = async (values) => {
    const { date, time, datetime } = values;
    const payload = await combineDateTime(date, time);
    console.log("Submit Datetime:::", payload);
  };

  const confirmBothDateAndTime = (val) => {
    if (val && val.date) return () => required(val.date);
    if (val && val.time) return () => required(val.time);
  };

  // Example Prop Values
  const initialDate = "1990-12-13";
  const initialTime = "16:20";

  const initialDateTime = async () => {
    return await combineDateTime(initialDate, initialTime);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <div className="datetime-input">
            <DatetimeInput
              name="datetime"
              label=""
              initialValue={initialDateTime}
              validate={required}
            />
          </div>

          <div className="datetime-container">
            <Date
              name="date"
              label="Date *"
              initialValue={initialDate}
              validate={confirmBothDateAndTime}
              required={true}
            />

            <Time
              name="time"
              label="Time *"
              initialValue={initialTime}
              validate={confirmBothDateAndTime}
              required={true}
            />
          </div>

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

export default function DatetimeInput(props) {
  const { name, label, validate, required, initialValue } = props;

  return (
    <Field name={name} initialValue={initialValue} validate={validate}>
      {({ input, meta }) => (
        <div className="input-field">
          <Label
            name={name}
            label={label}
            hasError={meta.error && meta.touched}
          />
          <input
            {...input}
            type="datetime-local"
            className="text-input"
            required={required}
          />
        </div>
      )}
    </Field>
  );
}
