import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white lg:px-40 px-4 py-6">
      {" "}
      {/* Giảm chiều cao tại đây */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="md:col-span-1 lg:col-span-2">
          <span className="text-lg font-semibold text-blue-500 py-2 uppercase">
            BMA
          </span>
          <p className="text-base my-4">Trân trọng cảm ơn !</p>
        </div>
        <div className="md:col-span-1 lg:col-span-1">
          <h2 className="text-lg font-semibold text-blue-500 py-2 uppercase">
            Contact
          </h2>
          <p className="text-base my-2">
            Email: clb.bma@student.ptithcm.edu.vn
          </p>
          <p className="text-base my-2">Phone: 091 682 49 27</p>
        </div>
        <div className="md:col-span-1 lg:col-span-1">
          <h2 className="text-lg font-semibold text-blue-500 py-2 uppercase">
            Follow us
          </h2>
          <div className="flex items-center">
            <a href="#" className="text-white hover:text-blue-500">
              <FaFacebookSquare className="text-2xl md:text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
