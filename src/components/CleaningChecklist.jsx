import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function FillExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Home">
      <body>
    <h2>What We Clean</h2>
    <table class="checklist-container">
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
                <td>Remove cobwebs <span class="checkmark">&#10003;</span></td>
                <td>Remove cobwebs <span class="checkmark">&#10003;</span></td>
                <td>Remove cobwebs <span class="checkmark">&#10003;</span></td>
                <td>Remove cobwebs <span class="checkmark">&#10003;</span></td>
            </tr>
            <tr>
                <td
                    >Dust light fixtures <span class="checkmark">&#10003;</span
                    ></td
                >
                <td
                    >Dust light fixtures <span class="checkmark">&#10003;</span
                    ></td
                >
                <td
                    >Dust light fixtures <span class="checkmark">&#10003;</span
                    ></td
                >
                <td
                    >Dust light fixtures <span class="checkmark">&#10003;</span
                    ></td
                >
            </tr>
            <tr>
                <td>Dust baseboards <span class="checkmark">&#10003;</span></td>
                <td>Clean mirrors <span class="checkmark">&#10003;</span></td>
                <td>Dust baseboards <span class="checkmark">&#10003;</span></td>
                <td>Dust baseboards <span class="checkmark">&#10003;</span></td>
            </tr>
            <tr>
                <td
                    >Clean appliance exteriors <span class="checkmark"
                        >&#10003;</span
                    ></td
                >
                <td
                    >Clean sink & faucets <span class="checkmark">&#10003;</span
                    ></td
                >
                <td>Make beds <span class="checkmark">&#10003;</span></td>
                <td>Clean mirrors <span class="checkmark">&#10003;</span></td>
            </tr>
            <tr>
                <td
                    >Clean cabinet exteriors <span class="checkmark"
                        >&#10003;</span
                    ></td
                >
                <td
                    >Clean cabinet exteriors <span class="cross">&#10007;</span
                    ></td
                >
                <td>Clean floors <span class="checkmark">&#10003;</span></td>
                <td
                    >Clean windowsills <span class="checkmark">&#10003;</span
                    ></td
                >
            </tr>
            <tr>
                <td
                    >Clean countertops <span class="checkmark">&#10003;</span
                    ></td
                >
                <td
                    >Clean countertops <span class="checkmark">&#10003;</span
                    ></td
                >
                <td>Empty trash <span class="checkmark">&#10003;</span></td>
                <td>Empty trash <span class="checkmark">&#10003;</span></td>
            </tr>
        </tbody>
    </table>
</body>

<style>
    body {
        font-family: Arial, sans-serif;
    }
    .checklist-container {
        width: 80%;
        margin: 20px auto;
        border-collapse: collapse;
    }
    .checklist-container th,
    .checklist-container td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }
    .checklist-container th {
        background-color: var(--accent);
        color: white;
    }
    .checkmark {
        color: green;
        font-weight: bold;
    }
    .cross {
        color: red;
        font-weight: bold;
    }
</style>

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