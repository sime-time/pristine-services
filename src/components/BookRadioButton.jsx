function BookRadioButton({ name, id, label }) {
  return (
    <>
      <input type="radio" name={name} className="btn-check" id={id} />
      <label className="btn btn-outline-primary" for={id}>{label}</label>
    </>
  );
}

export default BookRadioButton;