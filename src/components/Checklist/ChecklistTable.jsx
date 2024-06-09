import Table from "react-bootstrap/cjs/Table.js";
import { FaCheck, FaXmark } from "react-icons/fa6";
import "../../styles/table.css";

function ChecklistTable({ data }) {
  return (
    <div className="px-md-3 py-3">
      <Table striped hover responsive="md">
        <thead>
          <tr>
            <th></th>
            <th>Standard Clean</th>
            <th>Deep Clean</th>
            <th>Moving Clean</th>
            <th>Airbnb Turnover</th>
            <th>Airbnb Deep</th>
          </tr>
        </thead>
        <tbody>
          {data.map((task, index) => (
            <tr key={index}>
              <th>{task.task}</th>
              <td>{task.standard_clean ? <FaCheck className="text-success" /> : (task.standard_clean === false ? <FaXmark className="text-danger" /> : "N/A")}</td>
              <td>{task.deep_clean ? <FaCheck className="text-success" /> : (task.deep_clean === false ? <FaXmark className="text-danger" /> : "N/A")}</td>
              <td>{task.moving_clean ? <FaCheck className="text-success" /> : (task.moving_clean === false ? <FaXmark className="text-danger" /> : "N/A")}</td>
              <td>{task.airbnb_turnover ? <FaCheck className="text-success" /> : (task.airbnb_turnover === false ? <FaXmark className="text-danger" /> : "N/A")}</td>
              <td>{task.airbnb_deep ? <FaCheck className="text-success" /> : (task.airbnb_deep === false ? <FaXmark className="text-danger" /> : "N/A")}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ChecklistTable;