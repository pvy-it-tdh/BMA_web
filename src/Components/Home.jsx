import Nav from "../Layouts/Header";

import Banner from "./Banner";

const Home = () => {
  return (
    <div >
    <Nav/>
    <Banner/>
    </div>
    // <section className="home" id="home">
    //   <div className="hero">
    //     <h2>Giới thiệu về CLB</h2>
    //     <p>Nội dung giới thiệu về CLB, mục đích, sứ mệnh, v.v.</p>
    //   </div>
    //   <div className="call-to-action">
    //     <a href="#activities" className="btn">
    //       Tham gia hoạt động
    //     </a>
    //   </div>
    // </section>
  );
};

export default Home;
