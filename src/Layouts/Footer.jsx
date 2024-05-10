import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="mb-4 md:mb-0">
          <span className="text-[22px] font-semibold text-blue-500 py2 uppercase">
            Logo
          </span>
          <p className="text-[16px] my-4">ádasdasdasdasdasd</p>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-[22px] font-semibold text-blue-500 py2 uppercase">
            Contact
          </h2>
          <p className="text-[16px] my-4">Email: youremail@gmail.com</p>
          <p className="text-[16px] my-4">Phone: 01231203</p>
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-blue-500 py2 uppercase">
            Follow us
          </h2>
          <div className="flex space-x-4 items-center">
            <a href="#" className="text-white hover:text-blue-500">
              <FaFacebookSquare className="text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
