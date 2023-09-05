import React from "react";
import { useState } from "react";

export const BasicCrud = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
  });

  const handleCreate = (e) => {
    //e.preventDefault();
    const newData = {
      name: e.target.value,
      age: e.target.value,
    };
    setData(newData);
  };

  const handleRead = () => {
    alert(JSON.stringify(data));
  };

  const handleUpdate = () => {
    setData({
      name: "vijay anand",
      age: 24,
    });
  };

  const handleDelete = () => {
    setData({
      name: "",
      age: "",
    });
  };

  return (
    <div>
      <h1>CRUD Operations</h1> <br />
      <input
        type="text"
        placeholder="name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <br /> <br />
      <input
        type="text"
        placeholder="age"
        value={data.age}
        onChange={(e) => setData({ ...data, age: e.target.value })}
      />
      <br /> <br />
      <button onClick={handleCreate}>Create</button> &nbsp;
      <button onClick={handleRead}>Read</button> &nbsp;
      <button onClick={handleUpdate}>Update</button> &nbsp;
      <button onClick={handleDelete}>Delete</button> &nbsp;
      <br /> <br />
      <div>
        <h1>Data</h1>
        Name : {data.name} <br />
        Age : {data.age}
      </div>
    </div>
  );
};
