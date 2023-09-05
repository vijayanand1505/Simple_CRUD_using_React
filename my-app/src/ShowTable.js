import React from "react";
import Table from "react-bootstrap/Table";

export const ShowTable = ({ data }) => {
  return (
    <div>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Expense</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.expense}</td>
              <td>{item.amount}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
