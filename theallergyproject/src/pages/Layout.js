import { Outlet, Link } from "react-router-dom";
import logo from "../assets/allergy-logo.jpeg"

const Layout = () => {
  return (
    <>
      <nav>
        <a href="/home"> <img className="App-logo" src={logo}/> </a>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;