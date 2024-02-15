import React, { useContext, useState, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";
import axios from "axios";

export default function Labels() {
  const { labels, updateLabel } = useContext(GlobalContext);
  console.log(labels);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:5000/event`);
      const data = await res.data;
      setData(data);
    };
    fetchData().catch(console.error);
  }, [data]);
  console.log(data);
  return (
    <React.Fragment>
      <p className="text-gray-500 font-bold mt-10">Label</p>
      {labels.map(({ label: lbl, checked }, idx) => (
        <label key={idx} className="items-center mt-3 block">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => updateLabel({ label: lbl, checked: !checked })}
            className={`form-checkbox h-5 w-5 text-${lbl}-400 rounded focus:ring-0 cursor-pointer`}
          />
          <span className="ml-2 text-gray-700 capitalize">{lbl}</span>
        </label>
      ))}
    </React.Fragment>
  );
}
