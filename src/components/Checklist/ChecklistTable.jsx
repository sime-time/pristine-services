import Table from "react-bootstrap/cjs/Table.js";
import { FaCheck, FaXmark } from "react-icons/fa6";
import React from 'react';

function ChecklistTable({ list }) {
  return (
    <div className="px-md-5 pb-3">
      <Table striped hover>

        {Object.entries(list).map(([subListName, subList], index) => (
          <React.Fragment key={index}>
            <thead>
              <tr><th colSpan="2" className="text-start fs-3 pt-4">{subListName}</th></tr>
            </thead>
            <tbody className="border-start border-end">
              {Object.entries(subList).map(([task, isIncluded], subIndex) => (
                <tr key={subIndex} className="fs-5">
                  <td>{task}</td>
                  <td className="text-center">{isIncluded ? <FaCheck className="text-success" /> : <FaXmark className="text-danger" />}</td>
                </tr>
              ))}
            </tbody>
          </React.Fragment>
        ))}

      </Table>
    </div>
  );
}

export default ChecklistTable;