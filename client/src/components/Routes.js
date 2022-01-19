import { Route } from "react-router-dom";
import Songs from "./Songs"
import Contact from "./Contact";
import Login from "./Login";
import Home from "./Home";
import About from "./About";


const Routes = () => {
  return (
    <>
      <Route path="/" exact component={Home}></Route> 
      <Route path="/songs" component={Songs}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/about" exact component={About}></Route>
       <Route path="/contact" component={Contact}></Route>
    </>
  );
};

export default Routes;
