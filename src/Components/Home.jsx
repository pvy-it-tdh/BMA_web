import Footer from "../Layouts/Footer";
import Nav from "../Layouts/Header";

import Banner from "./Banner";
import Members from "./Member";

const Home = () => {
  return (
    <div >
    <Nav/>
    <Banner/>
    <Members/>
    <Footer/>
    </div>
  );
};

export default Home;
