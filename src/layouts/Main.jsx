import { Outlet } from "react-router-dom";
import NavBar from "../pages/Home/NavBar/NavBar";
import Footer from "../pages/Home/Footer/Footer";

const Main = () => {
  return (
    <div>
      <NavBar />
      <div className="min-h-screen max-w-7xl mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
