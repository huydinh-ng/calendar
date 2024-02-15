import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import { getMonth, getWeek } from "./util";
import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import Week from "./components/Week";
import GlobalContext from "./context/GlobalContext";
import EventModal from "./components/EventModal";
function App() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const [currenWeek, setCurrentWeek] = useState(getWeek());
  const { view, weekIndex, monthIndex, showEventModal } =
    useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <React.Fragment>
      {showEventModal && <EventModal />}

      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          {view === "month" && <Month month={currenMonth} />}
          {view === "day" && <Week month={currenWeek} />}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
