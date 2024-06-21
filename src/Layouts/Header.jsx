import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Components/Image/lg.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="flex justify-between items-center z-50 text-white bg-black lg:py-5 px-4 lg:px-20 py-4 border-b border-slate-800">
        <div className="flex items-center">
          <Link to="/" className="text-3xl lg:text-4xl font-bold">
            <img src={Logo} alt="Logo" className="h-9 w-auto lg:h-12 xl:h-18" />
          </Link>
        </div>
        <div className="lg:flex lg:items-center lg:ml-4">
          <button
            className="lg:hidden block text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul
            className={`lg:flex gap-8 ml-8 text-base ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <Link
                to="/"
                className="hover:text-blue-400 transition cursor-pointer"
              >
                Trang chủ
              </Link>
            </li>
            <li>
              <Link
                to="/activities"
                className="hover:text-blue-400 transition cursor-pointer"
              >
                Hoạt Động
              </Link>
            </li>
            <li>
              <Link
                to="/members"
                className="hover:text-blue-400 transition cursor-pointer"
              >
                Thành viên
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-400 transition cursor-pointer"
              >
                Liên hệ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
