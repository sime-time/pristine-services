import ContactInput from "./ContactInput.jsx";

function ContactForm() {
  return (
    <form className="d-flex flex-column gap-4 h-100 w-100">
      <div className="d-flex gap-3 w-100">
        <ContactInput label="Full Name" type="text" id="name" placeholder="Full Name" />
        <ContactInput label="Email Address" type="email" id="email" placeholder="name@email.com" />
      </div>
      <div className="d-flex gap-3 w-100">
        <ContactInput label="Phone Number" type="tel" id="phone" placeholder="(123) 456-7890" />
        <ContactInput label="Business Name" type="text" id="business-name" placeholder="Company Co." />
      </div>
      <div className="d-flex gap-3 w-100">
        <ContactInput label="Business Address" type="text" id="business-address" placeholder="1234 Main St." />
        <ContactInput label="Suite #" type="text" id="suite-number" placeholder="567" />
      </div>
      <div className="d-flex gap-3 w-100">
        <ContactInput label="Square Footage (Est.)" type="number" id="square-footage" placeholder="2000" />
        <ContactInput label="Zip" type="number" id="zip-code" placeholder="12345" />
      </div>
      <div className="form-floating">
        <textarea className="form-control specific-h-150" placeholder="Leave any additional notes here" id="message"></textarea>
        <label for="message">Your Message (Optional)</label>
      </div>
    </form>
  );
}

export default ContactForm;