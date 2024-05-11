import { BrowserRouter, Route, Switch } from "react-router-dom";
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/activities" component={Activities} />
          <Route path="/members" component={Members} />
          {/* <Route path="/contact" component={Contact} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
