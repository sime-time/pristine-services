function ContactInput({ type, id, placeholder, label, isRequired }) {
  return (
    <div className="form-floating col-sm-12 col-md-6">
      <input type={type} className="form-control" id={id} placeholder={placeholder} required={isRequired} />
      <label id={id}>{label}</label>
    </div>
  )
}

export default ContactInput; 