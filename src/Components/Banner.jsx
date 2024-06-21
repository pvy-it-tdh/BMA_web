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
    <div className="h-screen bg-zinc-900 lg:px-56 px-10 lg:py-0 py-10 lg:text-start text-center flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-28">
      <div className="flex flex-col justify-center items-center lg:items-start text-white">
        <h1
          data-aos="fade-right"
          className="text-3xl lg:text-4xl font-semibold mb-2 leading-normal"
        >
          Welcome to
        </h1>
        <h1
          data-aos="fade-right"
          className="text-5xl lg:text-6xl font-semibold mb-8 leading-normal"
        >
          <span className="text-blue-400">BMA</span>
        </h1>
        <p data-aos="fade-left" className="text-lg lg:text-xl">
          BMA ( Business Marketing Accounting ) <br />
          CLB thuộc Khoa QTKD2 - Học viện Công nghệ Bưu chính Viễn thông cơ sở
          tại TP. Hồ Chí Minh.
        </p>
      </div>
      <img
        src={BMA}
        className="rounded-lg border-2 p-1 computer-img"
        alt=""
        data-aos="fade-up"
        style={{
          maxWidth: "90%",
          height: "auto",
          objectFit: "cover",
          transition: "transform 0.3s ease-in-out",
          boxShadow: isHovered ? "0 0 15px rgb(63, 114, 165)" : "none",
          transform: isHovered ? "scale(1.1)" : "scale(1)",

          marginLeft: "0", // Adjusted margin-left value to 0
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </div>
  );
};

export default Banner;
