import ContactInput from "./ContactInput.jsx";

function ContactForm() {

  return (
    <form className="row row-md-col-2 h-100 w-100 mb-5 pb-4 g-2 needs-validation">
      <ContactInput label="Full Name" type="text" id="name" placeholder="Full Name" isRequired={true} />
      <ContactInput label="Email Address" type="email" id="email" placeholder="name@email.com" isRequired={true} />
      <ContactInput label="Phone Number" type="tel" id="phone" placeholder="(123) 456-7890" isRequired={true} />
      <ContactInput label="Business Name" type="text" id="business-name" placeholder="Company Co." isRequired={true} />
      <ContactInput label="Business Address" type="text" id="business-address" placeholder="1234 Main St." isRequired={true} />
      <ContactInput label="Suite #" type="text" id="suite-number" placeholder="567" isRequired={false} />
      <ContactInput label="Zip" type="number" id="zip-code" placeholder="12345" isRequired={true} />
      <ContactInput label="Square Footage (Est.)" type="number" id="square-footage" placeholder="2000" isRequired={true} />
      <div className="form-floating col-12">
        <textarea className="form-control specific-h-150" placeholder="Leave any additional notes here" id="message"></textarea>
        <label for="message">Your Message</label>
      </div>
      <div className="col-12">
        <button type="submit" className="col-12 btn btn-primary btn-lg py-3">Submit</button>
      </div>
    </form>
  );
}

export default ContactForm;