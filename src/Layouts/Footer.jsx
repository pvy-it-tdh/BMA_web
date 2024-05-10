import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white lg:px-40 px-4 py-10" style={{height:"180px"}}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="mb-4 ml-7 md:mb-0">
          <span className="text-[22px] font-semibold text-blue-500 py2 uppercase">
            BMA
          </span>
          <p className="text-[16px] my-4">Trân trọng cảm ơn !</p>
        </div>
        <div className="mb-4 ml-25 md:mb-0">
          <h2 className="text-[22px] font-semibold text-blue-500 py2 uppercase">
            Contact
          </h2>
          <p className="text-[16px] my-2">
            Email: clb.bma@student.ptithcm.edu.vn
          </p>
          <p className="text-[16px] my-2">Phone: 091 682 49 27</p>
        </div>
        <div className="mb-4 md:mb-0 ml-10">
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
