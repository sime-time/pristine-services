import Tab from 'react-bootstrap/cjs/Tab.js';
import Tabs from 'react-bootstrap/cjs/Tabs.js';
import CleanTypeCard from '../CleanTypes/CleanTypeCard.jsx';

function CleanTypeTabs() {
  const standardList = (
    <ul>
      <li>Designed for regular upkeep, our standard clean service covers all your essential tasks.</li>
      <li>Set up recurring cleans weekly, biweekly, or monthly.</li>
      <li><a href="/checklist">See our standard cleaning checklist.</a></li>
    </ul>
  );
  const deepList = (
    <ul>
      <li>Ideal for occasional, thorough cleanings going above and beyond a standard clean.</li>
      <li>Set up recurring deep cleans weekly, biweekly, or monthly.</li>
      <li><a href="/checklist">See our deep cleaning checklist.</a></li>
    </ul>
  );
  const moveList = (
    <ul>
      <li>Our ideal option for those in transition.</li>
      <li><a href="/checklist">See our moving clean checklist.</a></li>
    </ul>
  );
  const commercialList = (
    <ul>
      <li>Must initially call, text, email, or submit online form for a quote.</li>
      <li>Our representative will reach out to schedule a customized scope of work for your space.</li>
      <li>Recurring options available.</li>
    </ul>
  );
  const postConstructionList = (
    <ul>
      <li>After the dust settles and the construction is complete, let our team take care of the final touch.</li>
      <li>Must initially call, text, email, or submit online form for a quote.</li>
    </ul>
  );
  const turnoverList = (
    <ul>
      <li>Our team handles all aspects of turnover between guests. </li>
      <li>We leave no corner untouched to guarantee a welcoming ambiance for each arrival.</li>
      <li><a href="/checklist">See our turnover cleaning checklist.</a></li>
    </ul>
  );
  const deluxeList = (
    <ul>
      <li>We ensure this service brings your Airbnb back to its "factory" look.</li>
      <li><a href="/checklist">See our deep cleaning checklist.</a></li>
    </ul>
  );

  return (
    <Tabs
      defaultActiveKey="residential"
      id="clean-type-tabs"
      variant='pills'
      className='fs-4'
      justify
    >
      <Tab eventKey="residential" title="Residential" className="py-4">
        <CleanTypeCard title="Standard Clean" btnLabel="Book Now" btnHref={"/booking"} description={standardList} />
        <CleanTypeCard title="Deep Clean" btnLabel="Book Now" btnHref={"/booking"} description={deepList} />
        <CleanTypeCard title="Move in/out Clean" btnLabel="Book Now" btnHref={"/booking"} description={moveList} />
      </Tab>
      <Tab eventKey="commercial" title="Commercial" className="py-4">
        <CleanTypeCard title="Commercial / Office Clean" btnLabel="Get Quote" btnHref={"/contact"} description={commercialList} />
        <CleanTypeCard title="Post-Construction Clean" btnLabel="Get Quote" btnHref={"/contact"} description={postConstructionList} />
      </Tab>
      <Tab eventKey="airbnb" title="Airbnb" className="py-4">
        <CleanTypeCard title="Airbnb Turnover" btnLabel="Book Now" btnHref={"/booking"} description={turnoverList} />
        <CleanTypeCard title="Airbnb Deluxe Deep Clean" btnLabel="Book Now" btnHref={"/booking"} description={deluxeList} />
      </Tab>
    </Tabs>
  );
}
export default CleanTypeTabs;