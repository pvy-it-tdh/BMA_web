import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-white bg-black lg:py-5 px-20 py-4 border-b border-slate-800">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">BMA</span>
        </div>
        <div className="hidden lg:flex lg:items-center lg:flex-1 lg:justify-end lg:font-normal">
          <ul className="flex gap-8 mr-16 text-base">
            <Link spy={true} smooth={true} to="Home">
              <li className="hover:text-blue-400 transition cursor-pointer">
                Trang chủ
              </li>
            </Link>
            <Link spy={true} smooth={true} to="About">
              <li className="hover:text-blue-400 transition cursor-pointer">
                Hoạt Động
              </li>
            </Link>
            <Link spy={true} smooth={true} to="Services">
              <li className="hover:text-blue-400 transition cursor-pointer">
                Thành viên
              </li>
            </Link>
            <Link spy={true} smooth={true} to="Contact">
              <li className="hover:text-blue-400 transition cursor-pointer">
                Liên hệ
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
