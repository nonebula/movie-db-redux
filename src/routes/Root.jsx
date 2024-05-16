import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

//outlet must be used whereever we want to render the nested routes

export default Root;
