import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

//outlet must be used wherever we want to render the nested routes

export default Root;
