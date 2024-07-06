import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = ({ onDateSelect }) => {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date) => {
    setStartDate(date);
    onDateSelect(date);
  };

  return (
    <DatePicker selected={startDate} onChange={handleChange} />
  );
};

export default DatePickerComponent;