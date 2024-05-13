import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Activities from "./Components/Activities";
import Member from "./Components/Member";
import Nav from "./Layouts/Header";
import Footer from "./Layouts/Footer";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/members" element={<Member />} />
          {/* <Route path="/contact" component={Contact} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
