import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import '../styles/global.css'; // Assuming this file contains your global styles

function FillExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Home">
        <div>
          <h2>What We Clean</h2>
          <table className="checklist-container">
            <thead>
              <tr>
                <th>Kitchen</th>
                <th>Bathrooms</th>
                <th>Bedrooms</th>
                <th>Common Areas/Other</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Remove cobwebs <span className="checkmark">&#10003;</span></td>
                <td>Remove cobwebs <span className="checkmark">&#10003;</span></td>
                <td>Remove cobwebs <span className="checkmark">&#10003;</span></td>
                <td>Remove cobwebs <span className="checkmark">&#10003;</span></td>
              </tr>
              <tr>
                <td>Dust light fixtures <span className="checkmark">&#10003;</span></td>
                <td>Dust light fixtures <span className="checkmark">&#10003;</span></td>
                <td>Dust light fixtures <span className="checkmark">&#10003;</span></td>
                <td>Dust light fixtures <span className="checkmark">&#10003;</span></td>
              </tr>
              <tr>
                <td>Dust baseboards <span className="checkmark">&#10003;</span></td>
                <td>Clean mirrors <span className="checkmark">&#10003;</span></td>
                <td>Dust baseboards <span className="checkmark">&#10003;</span></td>
                <td>Dust baseboards <span className="checkmark">&#10003;</span></td>
              </tr>
              <tr>
                <td>Clean appliance exteriors <span className="checkmark">&#10003;</span></td>
                <td>Clean sink & faucets <span className="checkmark">&#10003;</span></td>
                <td>Make beds <span className="checkmark">&#10003;</span></td>
                <td>Clean mirrors <span className="checkmark">&#10003;</span></td>
              </tr>
              <tr>
                <td>Clean cabinet exteriors <span className="checkmark">&#10003;</span></td>
                <td>Clean cabinet exteriors <span className="cross">&#10007;</span></td>
                <td>Clean floors <span className="checkmark">&#10003;</span></td>
                <td>Clean windowsills <span className="checkmark">&#10003;</span></td>
              </tr>
              <tr>
                <td>Clean countertops <span className="checkmark">&#10003;</span></td>
                <td>Clean countertops <span className="checkmark">&#10003;</span></td>
                <td>Empty trash <span className="checkmark">&#10003;</span></td>
                <td>Empty trash <span className="checkmark">&#10003;</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="longer-tab" title="Loooonger Tab">
        Tab content for Loooonger Tab
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

export default FillExample;
