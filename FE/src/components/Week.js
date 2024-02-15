import React from "react";
import Day from "./Day";
export default function Month({ month }) {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((day, i) => (
        <Day day={day} key={i} rowIdx={0} />
      ))}
    </div>
  );
}
