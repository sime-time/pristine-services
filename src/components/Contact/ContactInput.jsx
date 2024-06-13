function ContactInput({ type, id, placeholder, label }) {
  return (
    <div className="form-floating flex-fill">
      <input type={type} className="form-control" id={id} placeholder={placeholder} />
      <label id={id}>{label}</label>
    </div>
  )
}

export default ContactInput; 