import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation/Navigation";
import FoodNavbar from "./components/FoodNavbar/FoodNavbar";
import { Route, Routes, useLocation } from "react-router-dom";
import LoadBreakfast from "./components/LoadBreakfast/LoadBreakfast";
import NotFound from "./components/NotFound/NotFound";
import { createContext, useEffect, useState } from "react";
import LoadLunch from "./components/LoadLunch/LoadLunch";
import LoadDinner from "./components/Dinner/LoadDinner/LoadDinner";
import Heading from "./components/Heading/Heading";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Detail from "./components/Detail/Detail";
import AddItems from "./components/AddItems/AddItems";
import Cart from "./components/Cart/Cart";
export const FoodLoad = createContext();
function App() {
  const [breakfasts, setBreakfasts] = useState([]);
  const [lunches, setLunches] = useState([]);
  const [dinners, setDinners] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetch(`https://boiling-tor-09845.herokuapp.com/breakfasts`)
      .then((res) => res.json())
      .then((data) => {
        setBreakfasts(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://boiling-tor-09845.herokuapp.com/lunches")
      .then((res) => res.json())
      .then((data) => setLunches(data));
  }, []);
  useEffect(() => {
    fetch("https://boiling-tor-09845.herokuapp.com/dinners")
      .then((res) => res.json())
      .then((data) => setDinners(data));
  }, []);
  const allFoods = { breakfasts, lunches, dinners };
  //Creating Context

  return (
    <FoodLoad.Provider value={allFoods}>
      <div className="App">
        {console.log(location?.state?.id)}
        <Navigation></Navigation>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Heading></Heading>
                <FoodNavbar></FoodNavbar>
                <LoadBreakfast></LoadBreakfast>
              </>
            }
          ></Route>
          <Route
            path="/breakfast"
            element={
              <>
                <Heading></Heading>
                <FoodNavbar></FoodNavbar>
                <LoadBreakfast></LoadBreakfast>
              </>
            }
          ></Route>
          <Route
            path="/lunch"
            element={
              <>
                <Heading></Heading>
                <FoodNavbar></FoodNavbar>
                <LoadLunch></LoadLunch>
              </>
            }
          ></Route>
          <Route
            path="/dinner"
            element={
              <>
                <Heading></Heading>
                <FoodNavbar></FoodNavbar>
                <LoadDinner></LoadDinner>
              </>
            }
          ></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/detail/:foodId" element={<Detail></Detail>}></Route>
          <Route path="/additems" element={<AddItems></AddItems>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
    </FoodLoad.Provider>
  );
}

export default App;
