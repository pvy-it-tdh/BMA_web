import Home from "./Components/Home";
// import Activities from "./Components/Activities";
// import Members from "./Components/Members";
// import Contact from "./Components/Contact";


function App() {
  return (
    <div className="bg-slate-900">
      <Home />
      {/* <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activities" element={<Activities />} />
          <Route path="/members" element={<Members />} />
          <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
