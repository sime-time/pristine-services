import Accordion from 'react-bootstrap/Accordion';
import FAQuestions from '../assets/misc/Accordion.json';

const Sections = FAQuestions.Sections;


export default function FAQAccordion() {
    
    return (
        <div >
            {Sections.map(section => (
                    <Accordion >
                        {section.questions.map(question => (
                                <Accordion.Item eventKey={`${section.Header}-${question.id}`}>
                                    <Accordion.Header>{question.title}</Accordion.Header>
                                    <Accordion.Body>{question.body}</Accordion.Body>
                                </Accordion.Item>
                            ))}
                    </Accordion>
                    
        ))}
        
        </div>

        
    );

    
}
