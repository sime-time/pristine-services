function BookingRadio({ name, id, label }) {
  return (
    <>
      <input type="radio" name={name} className="btn-check" id={id} />
      <label className={`btn btn-outline-primary btn-lg py-3 rounded-0 ${name == "clean-type" ? 'col-md' : 'col'}`} htmlFor={id}>
        {label}
      </label>
    </>
  );
}

export default BookingRadio;