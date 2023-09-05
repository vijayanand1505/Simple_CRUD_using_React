import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
  });

  const handleCreate = () => {
    const newData = {
      name: "John Doe",
      age: 30,
    };
    setData(newData);
  };

  const handleRead = () => {
    alert(JSON.stringify(data));
  };

  const handleUpdate = () => {
    data.name = "Jane Doe";
    data.age = 35;
    setData(data);
  };

  const handleDelete = () => {
    setData({});
  };

  return (
    <div>
      <h1>CRUD Operations</h1>
      <input
        type="text"
        placeholder="Name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Age"
        value={data.age}
        onChange={(e) => setData({ ...data, age: e.target.value })}
      />
      <button onClick={handleCreate}>Create</button>
      <button onClick={handleRead}>Read</button>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default App;
