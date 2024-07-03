import { Link } from "react-router-dom";
import logo from '../../../assets/logo.svg'
import useAuth from "../../../hook/useAuth";

const NavBar = () => {
  const {user, logOut} = useAuth()
  const signOut = () => {
    logOut()
    .then(() => {})
    .catch(error => {
      console.log(error);
    })
  }

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      {
        user ? <>
        <li><Link to="/bookings">My Bookings</Link></li>
        <li><button onClick={signOut}>Log Out</button></li>
        </> : <li>
        <Link to="/login">Login</Link>
      </li>
      }
    </>
  );
  return (
    <div className="navbar bg-base-100 max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg font-medium"
          >
            {navItems}
          </ul>
        </div>
        <Link to='/'><img src={logo} alt="" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-medium">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="outline outline-1 outline-orange-600 py-3 px-6 rounded-lg text-orange-600 hover:bg-orange-600 hover:text-white font-medium duration-300 cursor-pointer">Appointment</a>
      </div>
    </div>
  );
};

export default NavBar;
