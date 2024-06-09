import Tab from 'react-bootstrap/cjs/Tab.js';
import Tabs from 'react-bootstrap/cjs/Tabs.js';
import ChecklistTable from './ChecklistTable.jsx';
import ChecklistData from './ChecklistData.json';

function CleaningChecklist() {
  return (
    <Tabs
      defaultActiveKey="kitchen"
      id="cleaning-checklists"
      transition={false}
      className="fs-5 rounded-3 rounded-bottom-0 bg-primary-subtle"
      variant="tabs"
      justify
    >
      <Tab eventKey="kitchen" title="Kitchen" className="bg-white rounded-bottom border border-top-0">
        <ChecklistTable data={ChecklistData.Kitchen} />
      </Tab>
      <Tab eventKey="bathrooms" title="Bathrooms" className="bg-white rounded-bottom border border-top-0">
        <ChecklistTable data={ChecklistData.Bathrooms} />
      </Tab>
      <Tab eventKey="bedrooms" title="Bedrooms" className="bg-white rounded-bottom border border-top-0">
        <ChecklistTable data={ChecklistData.Bedrooms} />
      </Tab>
      <Tab eventKey="common-areas" title="Common" className="bg-white rounded-bottom border border-top-0">
        <ChecklistTable data={ChecklistData.Common} />
      </Tab>
    </Tabs>
  );
}

export default CleaningChecklist;