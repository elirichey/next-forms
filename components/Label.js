export default function Label(props) {
  const { label, name, hasError } = props;
  const labelStyle = hasError ? "field_label_error" : "field_label";

  return (
    <label htmlFor={name} className={labelStyle}>
      {label}
    </label>
  );
}
