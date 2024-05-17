import Accordion from 'react-bootstrap/Accordion';
import FAQuestions from '../assets/misc/Accordion.json';
import ACccordion from './Accordion.astro';
const Sections = FAQuestions.Sections;


export default function FAQAccordion() {
    
    return (
        <div >
            {Sections.map(section => (
                <div class={section.Header}>
                <h4>{section.Header}</h4>
                    <Accordion defaultActiveKey={`${section.Header}-0`} >
                        {section.questions.map(question => (
                                <Accordion.Item eventKey={`${section.Header}-${question.id}`}>
                                    <Accordion.Header>{question.title}</Accordion.Header>
                                    <Accordion.Body>{question.body}</Accordion.Body>
                                </Accordion.Item>
                            ))}
                    </Accordion>
                    </div>
                    
        ))}
        
        </div>

        
    );

    
}
