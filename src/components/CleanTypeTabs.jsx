import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function CleanTypeTabs() {
  return (
    <Tabs
      defaultActiveKey="residential"
      id="clean-type-tabs"
      justify
    >
      <Tab eventKey="residential" title="Residential" className="d-flex flex-column align-items-center">
        <div className="card m-5 w-md-50">
          <div className="card-body d-flex justify-content-around px-0 py-4">
            <div className="d-flex flex-column justify-content-between">
              <h2 className="card-title">Standard Clean</h2>
              <div><a href="/booking" className="btn btn-primary btn-lg">Book Now</a></div>
            </div>
            <div className="d-flex flex-column">
              <ul>
                <li><a href="/checklist">See our cleaning checklist</a></li>
              </ul>
            </div>

          </div>
        </div>
      </Tab>
      <Tab eventKey="commercial" title="Commercial">
        <h1>Comm</h1>
      </Tab>
    </Tabs>
  );
}
export default CleanTypeTabs;