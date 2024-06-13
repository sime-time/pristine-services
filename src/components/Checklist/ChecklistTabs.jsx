import Tab from 'react-bootstrap/cjs/Tab.js';
import Tabs from 'react-bootstrap/cjs/Tabs.js';
import ChecklistTable from './ChecklistTable.jsx';
import ChecklistData from './ChecklistData.json';

function CleaningChecklist() {
  return (
    <Tabs
      defaultActiveKey="standard"
      id="cleaning-checklists"
      transition={false}
      className="rounded-3 rounded-bottom-0 bg-primary-subtle fw-bold"
      variant="tabs"
      justify
    >
      <Tab eventKey="standard" title="Standard Clean" className="bg-white rounded-bottom border border-top-0">
        <ChecklistTable list={ChecklistData.Standard} />
      </Tab>
      <Tab eventKey="deep" title="Deep Clean" className="bg-white rounded-bottom border border-top-0">
        <ChecklistTable list={ChecklistData.Deep} />
      </Tab>
      <Tab eventKey="move-in-out" title="Move In/Out" className="bg-white rounded-bottom border border-top-0">
        <ChecklistTable list={ChecklistData.Deep} />
      </Tab>
      <Tab eventKey="airbnb-turnover" title="Airbnb Turnover" className="bg-white rounded-bottom border border-top-0">
        <ChecklistTable list={ChecklistData.Standard} />
      </Tab>
      <Tab eventKey="airbnb-deep" title="Airbnb Deluxe" className="bg-white rounded-bottom border border-top-0">
        <ChecklistTable list={ChecklistData.Deep} />
      </Tab>
    </Tabs>
  );
}

export default CleaningChecklist;