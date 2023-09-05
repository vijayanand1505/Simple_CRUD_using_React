import React from "react";
import { useState } from "react";

function Get1({ data, onEdit, onDelete, onSave }) {
  const [editedIndex, setEditedIndex] = useState(null);
  const [editedData, setEditedData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleEdit = (index) => {
    setEditedIndex(index);
    setEditedData(data[index]);
  };

  const handleSave = () => {
    onSave(editedIndex, editedData);
    setEditedIndex(null);
    setEditedData({ firstName: "", lastName: "" });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>
              {editedIndex === index ? (
                <input
                  type="text"
                  name="firstName"
                  value={editedData.firstName}
                  onChange={(e) =>
                    setEditedData({ ...editedData, firstName: e.target.value })
                  }
                />
              ) : (
                item.firstName
              )}
            </td>
            <td>
              {editedIndex === index ? (
                <input
                  type="text"
                  name="lastName"
                  value={editedData.lastName}
                  onChange={(e) =>
                    setEditedData({ ...editedData, lastName: e.target.value })
                  }
                />
              ) : (
                item.lastName
              )}
            </td>
            <td>
              {editedIndex === index ? (
                <input
                  type="email"
                  name="email"
                  value={editedData.email}
                  onChange={(e) =>
                    setEditedData({ ...editedData, email: e.target.value })
                  }
                />
              ) : (
                item.email
              )}
            </td>
            <td>
              {editedIndex === index ? (
                <>
                  <button onClick={handleSave}>Save</button>
                  <button onClick={() => handleEdit(null)}>Cancel</button>
                </>
              ) : (
                <>
                  <button onClick={() => handleEdit(index)}>Edit</button> &nbsp;
                  <button onClick={() => onDelete(index)}>Delete</button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Get1;
