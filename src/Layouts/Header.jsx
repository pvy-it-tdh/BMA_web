import { Link } from "react-router-dom";
import Logo from "../Components/Image/lg.png";

const Nav = () => {
  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-white bg-black lg:py-5 px-20 py-4 border-b border-slate-800">
        <div className="flex items-center flex-1">
          <Link to="/" className="text-3xl font-bold">
            <img
              src={Logo}
              alt="Logo"
              className="h-9 w-auto md:h-10 lg:h-12 xl:h-18"
            />
          </Link>
        </div>
        <div className="hidden lg:flex lg:items-center lg:flex-1 lg:justify-end lg:font-normal">
          <ul className="flex gap-8 mr-16 text-base">
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
