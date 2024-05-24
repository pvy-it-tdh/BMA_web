import { useState, useEffect } from "react";
import BMA from "./Image/BMA.jpg"; // Corrected import
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-screen bg-zinc-900 lg:px-56 px-10 lg:py-0 py-50 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <div className="h-full lg:py-0 flex flex-col justify-center lg:items-start items-center text-white">
        <h1
          data-aos="fade-right"
          className="text-[40px] font-semibold mb-2 leading-normal"
        >
          Welcome to
        </h1>
        <h1
          data-aos="fade-right"
          className="text-[52px] font-semibold mb-8 leading-normal"
        >
          <span className="text-blue-400">BMA</span>
        </h1>
        <p data-aos="fade-left" className="text-[25px]">
          BMA ( Business Marketing Accounting ) <br />
          CLB thuộc Khoa QTKD2 - Học viện Công nghệ Bưu chính Viễn thông cơ sở
          tại TP. Hồ Chí Minh.
        </p>
      </div>
      <img
        src={BMA}
        className="rounded-full border-2 p-1 computer-img"
        alt=""
        data-aos="fade-up"
        style={{
          width: "500px",
          height: "290px",
          objectFit: "cover",
          transition: "transform 0.3s ease-in-out",
          boxShadow: isHovered ? "0 0 15px rgb(63, 114, 165)" : "none",
          transform: isHovered ? "scale(1.5)" : "scale(1)",
          borderRadius: "0",
          marginLeft: "20px", // Adjusted margin-left value
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </div>
  );
};

export default Banner;
