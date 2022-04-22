import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation/Navigation";
import FoodNavbar from "./components/FoodNavbar/FoodNavbar";
import { Route, Routes } from "react-router-dom";
import LoadBreakfast from "./components/LoadBreakfast/LoadBreakfast";
import NotFound from "./components/NotFound/NotFound";
import { createContext, useEffect, useState } from "react";
import LoadLunch from "./components/LoadLunch/LoadLunch";
import LoadDinner from "./components/Dinner/LoadDinner/LoadDinner";
import Heading from "./components/Heading/Heading";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Detail from "./components/Detail/Detail";
export const FoodLoad = createContext();
function App() {
  const [breakfasts, setBreakfasts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/breakfasts")
      .then((res) => res.json())
      .then((data) => setBreakfasts(data));
  }, []);

  //Creating Context

  return (
    <FoodLoad.Provider value={breakfasts}>
      <div className="App">
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
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
    </FoodLoad.Provider>
  );
}

export default App;
