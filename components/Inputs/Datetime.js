import { Form, Field } from "react-final-form";
import { required } from "../../utils/validation";
import Date from "./Date";
import Time from "./Time";

export function DatetimeForm(props) {
  const onSubmit = async (values) => {
    const { date, time } = values;
    console.log("Submit Datetime:::", values);
  };

  const confirmBothDateAndTime = (val) => {
    if (val && val.date) return () => required(val.date);
    if (val && val.time) return () => required(val.time);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <div className="datetime-container">
            <Date
              name="date"
              label="Date *"
              initialValue="1990-12-13"
              validate={confirmBothDateAndTime}
              required={true}
            />

            <Time
              name="time"
              label="Time *"
              initialValue="16:20"
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
