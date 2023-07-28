import Sidebar from "./views/global/MySidebar";
import Topbar from "./views/global/Topbar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./views/dashboard";
import MySidebar from "./views/global/MySidebar";
import CurrentClass from "./views/class";
import Timetable from "./views/timetable";
import Attendence from "./views/attendence";
import Register from "./views/register";

function Main() {
  return (
    <div className="app">
      <MySidebar />
      <main className="content">
        <Topbar />

        <Routes>
          <Route path="/*" element={<Dashboard />} />
          <Route path="class" element={<CurrentClass />} />
          <Route path="timetable" element={<Timetable />} />
          <Route path="attendence" element={<Attendence />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </main>
    </div>
  );
}

export default Main;
