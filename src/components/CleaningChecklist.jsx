import Tab from 'react-bootstrap/cjs/Tab.js';
import Tabs from 'react-bootstrap/cjs/Tabs.js';

import '../styles/global.css'; // Assuming this file contains your global styles

function FillExample() {
  const containerStyle = {
    width: '80%',
    margin: '20px auto',
    borderCollapse: 'collapse',
  };

  const thTdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  };

  const thStyle = {
    ...thTdStyle,
    backgroundColor: 'var(--accent)',
    color: 'white',
  };

  const checkmarkStyle = {
    color: 'green',
    fontWeight: 'bold',
  };

  const crossStyle = {
    color: 'red',
    fontWeight: 'bold',
  };

  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="Kitchen" title="Kitchen">
        <div>
          <h2>What We Clean</h2>
          <table style={containerStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Kitchen</th>
                <th style={thStyle}>Bathrooms</th>
                <th style={thStyle}>Bedrooms</th>
                <th style={thStyle}>Common Areas/Other</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={thTdStyle}>Remove cobwebs <span style={checkmarkStyle}>&#10003;</span></td>
                <td style={thTdStyle}>Remove cobwebs <span style={checkmarkStyle}>&#10003;</span></td>
                <td style={thTdStyle}>Remove cobwebs <span style={checkmarkStyle}>&#10003;</span></td>
                <td style={thTdStyle}>Remove cobwebs <span style={checkmarkStyle}>&#10003;</span></td>
              </tr>
              <tr>
                <td style={thTdStyle}>Dust light fixtures <span style={checkmarkStyle}>&#10003;</span></td>
                <td style={thTdStyle}>Dust light fixtures <span style={checkmarkStyle}>&#10003;</span></td>
                <td style={thTdStyle}>Dust light fixtures <span style={checkmarkStyle}>&#10003;</span></td>
                <td style={thTdStyle}>Dust light fixtures <span style={checkmarkStyle}>&#10003;</span></td>
              </tr>
              <tr>
                <td style={thTdStyle}>Dust baseboards <span style={checkmarkStyle}>&#10003;</span></td>
                <td style={thTdStyle}>Clean mirrors <span style={checkmarkStyle}>&#10003;</span></td>
                <td style={thTdStyle}>Dust baseboards <span style={checkmarkStyle}>&#10003;</span></td>
                <td style={thTdStyle}>Dust baseboards <span style={checkmarkStyle}>&#10003;</span></td>
              </tr>
              <tr>
                <td style={thTdStyle}>Clean appliance exteriors <span style={checkmarkStyle}>&#10003;</span></td>
                <td style={thTdStyle}>Clean sink & faucets <span style={checkmarkStyle}>&#10003;</span></td>
                <td style={thTdStyle}>Make beds <span style={checkmarkStyle}>&#10003;</span></td>
                <td style={thTdStyle}>Clean mirrors <span style={checkmarkStyle}>&#10003;</span></td>
              </tr>
              <tr>
                <td style={thTdStyle}>Clean cabinet exteriors <span style={checkmarkStyle}>&#10003;</span></td>
                <td style={thTdStyle}>Clean cabinet exteriors <span style={crossStyle}>&#10007;</span></td>
                <td style={thTdStyle}>Clean floors <span style={checkmarkStyle}>&#10003;</span></td>
                <td style={thTdStyle}>Clean windowsills <span style={checkmarkStyle}>&#10003;</span></td>
              </tr>
              <tr>
                <td style={thTdStyle}>Clean countertops <span style={checkmarkStyle}>&#10003;</span></td>
                <td style={thTdStyle}>Clean countertops <span style={checkmarkStyle}>&#10003;</span></td>
                <td style={thTdStyle}>Empty trash <span style={checkmarkStyle}>&#10003;</span></td>
                <td style={thTdStyle}>Empty trash <span style={checkmarkStyle}>&#10003;</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Tab>
      <Tab eventKey="Bathrooms" title="Bathrooms">
        Tab content for Profile
      </Tab>
      <Tab eventKey="Bedrooms" title="Bedrooms">
        Tab content for Loooonger Tab
      </Tab>
      <Tab eventKey="Common Areas/Garage" title="Common Areas/Garage">
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

export default FillExample;
