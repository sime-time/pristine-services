function BookingRadio({ name, id, label, setter }) {
  function handleCheck() {
    setter(prevData => ({ ...prevData, [name]: label }));
  }

  return (
    <>
      <input type="radio" name={name} id={id} value={id} className="btn-check" onInput={handleCheck} />
      <label className={`btn btn-outline-primary btn-lg py-3 rounded-0 ${name == "clean-type" ? 'col-md' : 'col'}`} htmlFor={id}>
        {label}
      </label>
    </>
  );
}

export default BookingRadio;