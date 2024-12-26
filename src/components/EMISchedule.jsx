import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EMISchedule = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [scheduleType, setScheduleType] = useState("Calendar Year wise");

  return (
    <div className="bg-white p-4 rounded shadow-md mt-4 flex items-center">
      <span className="text-gray-700 mr-2">
        Schedule showing EMI payments starting from
      </span>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="MMM yyyy"
        showMonthYearPicker
        className="border rounded p-2 w-40 mx-2"
      />
      <button className="border rounded p-2 flex items-center justify-center">
        <span role="img" aria-label="calendar">
          📅
        </span>
      </button>
      <select
        value={scheduleType}
        onChange={(e) => setScheduleType(e.target.value)}
        className="border rounded p-2 mx-2"
      >
        <option>Calendar Year wise</option>
        <option>Monthly</option>
        <option>Quarterly</option>
      </select>
    </div>
  );
};

export default EMISchedule;
