import "./App.css";
import { ShowTable } from "./ShowTable";
import { Start } from "./Start";
import { useState } from "react";
import { BasicCrud } from "./BasicCrud";
import { Popup } from "./Popup";
import Get from "./Get";
import Get1 from "./Get1";

function App() {
  // const [submittedData, setSubmittedData] = useState(null);
  // const handleFormSubmit = (data) => {
  //   setSubmittedData(data);
  // };

  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleFormSubmit = (formData) => {
    if (editIndex !== null) {
      const newData = [...data];
      newData[editIndex] = formData;
      setData(newData);
      setEditIndex(null);
    } else {
      setData([...data, formData]);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };
  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const handleSave = (index, editedData) => {
    if (index !== null) {
      // Save edited data
      const newData = [...data];
      newData[index] = editedData;
      setData(newData);
      setEditIndex(null);
    }
  };

  return (
    <div className="App">
      <Get onSubmit={handleFormSubmit} />
      <Get1
        data={data}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onSave={handleSave}
      />
      {/* <h1>Expense App</h1> <br />
      <Popup onSubmit={handleFormSubmit} />
      {submittedData && <ShowTable data={submittedData} />} */}
      {/* <BasicCrud />  */}
      {/* <h1>Expense App</h1> <br /> */}
      {/* <Popup onSubmit={addExpense} /> <br /> */}
      {/* <Start /> */}
      {/* <ShowTable data={expenseData} /> */}
    </div>
  );
}

export default App;
