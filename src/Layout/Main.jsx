import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";


const Main = () => {
  const location = useLocation();
  // console.log("Path location", location);
  const loginPath = location.pathname.includes("login");
  const signupPath = location.pathname.includes("signup");
 const noHeaderFooter = loginPath || signupPath;
  return (
    <div>
      {noHeaderFooter || <Navbar />}
      <Outlet />
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;
