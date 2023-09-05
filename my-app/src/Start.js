import React from "react";
import { Popup } from "./Popup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";

export const Start = () => {
  const [year, setYear] = useState(2021);

  const handleChange = (selectedYear) => {
    setYear(selectedYear);
  };

  return (
    <div className="App">
      {/* <DropdownButton id="dropdown-basic-button" title={year}>
        <Dropdown.Item onClick={() => handleChange(2021)}>2021</Dropdown.Item>
        <Dropdown.Item onClick={() => handleChange(2022)}>2022</Dropdown.Item>
        <Dropdown.Item onClick={() => handleChange(2023)}>2023</Dropdown.Item>
      </DropdownButton> */}
    </div>
  );
};
