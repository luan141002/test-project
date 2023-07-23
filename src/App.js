import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboardview from "./components/Dashboardview";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="flex">
      <div className="basis-[12%] h-[100vh]">
        <Sidebar />
      </div>
      <div className="basis-[88%] border">
        <Dashboardview />
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default App;
