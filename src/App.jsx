import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Layouts/Header";
import Home from "./Components/Home";
import Activities from "./Components/Activities";
import Members from "./Components/Activities";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Home/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/activities" element={<Activities/>} />
          <Route path="/members" element={<Members/>} />
          {/* <Route path="/contact" component={Contact} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
