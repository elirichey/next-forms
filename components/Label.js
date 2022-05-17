export default function Label(props) {
  const { label, name, hasError } = props;
  const labelStyle = hasError ? "field-label-error" : "field-label";

  return (
    <label htmlFor={name} className={labelStyle}>
      {label}
    </label>
  );
}
