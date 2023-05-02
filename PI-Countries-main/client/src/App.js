import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home/index"
import CreateActivity from "./components/CreateActivity/index";
import Detail from "./components/Detail/Detail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
          <Route index exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route path="/home/:id" component={Detail} />
          <Route path="/createActivity" component={CreateActivity} />
  
      </div>
    </BrowserRouter>
  );
}

export default App;
