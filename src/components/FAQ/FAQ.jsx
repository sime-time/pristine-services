import Accordion from "react-bootstrap/cjs/Accordion.js";
import FAQSections from "./FAQSections.json";

function FAQ() {
  return (
    <div className="w-100 w-md-75">
      {FAQSections.map((section) => (
        <>
          <h2 className="fw-bold fs-2 pb-3 pt-5" id={section.htmlId}>{section.header}</h2>
          <Accordion className="bg-white">
            {section.items.map((item) => (
              <Accordion.Item eventKey={item.id} key={item.id} className="border-primary">
                <Accordion.Header><span className="fw-bold fs-5">{item.question}</span></Accordion.Header>
                <Accordion.Body><span className="fs-5">{item.answer}</span></Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </>
      ))}
    </div>
  );
}

export default FAQ;