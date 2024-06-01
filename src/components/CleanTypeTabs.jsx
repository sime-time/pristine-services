import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CleanTypeCard from './CleanTypeCard.jsx';

function CleanTypeTabs() {
  return (
    <Tabs
      defaultActiveKey="residential"
      id="clean-type-tabs"
      variant='pills'
      className='fs-4'
      justify
    >
      <Tab eventKey="residential" title="Residential" className="py-4">
        <CleanTypeCard title="Standard Clean" btnLabel="Book Now" btnHref={"/booking"} />
      </Tab>
      <Tab eventKey="commercial" title="Commercial" className="py-4">
        <CleanTypeCard title="Commercial Clean" btnLabel="Get Quote" btnHref={"/contact"} />
      </Tab>
      <Tab eventKey="airbnb" title="Airbnb" className="py-4">
        <CleanTypeCard title="Airbnb Turnover" btnLabel="Book Now" btnHref={"/booking"} />
      </Tab>
    </Tabs>
  );
}
export default CleanTypeTabs;