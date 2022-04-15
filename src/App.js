import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation/Navigation";
import FoodNavbar from "./components/FoodNavbar/FoodNavbar";
import { Route, Routes } from "react-router-dom";
import LoadBreakfast from "./components/LoadBreakfast/LoadBreakfast";
import NotFound from "./components/NotFound/NotFound";
import { createContext, useEffect, useState } from "react";
import Lunch from "./components/Lunch/Lunch";
import LoadLunch from "./components/LoadLunch/LoadLunch";
import LoadDinner from "./components/Dinner/LoadDinner/LoadDinner";
export const FoodLoad = createContext();
function App() {
  const [breakfasts, setBreakfasts] = useState([]);
  useEffect(() => {
    fetch("breakfast.json")
      .then((res) => res.json())
      .then((data) => setBreakfasts(data));
  }, []);
  const [lunches, setLunches] = useState([]);
  useEffect(() => {
    fetch("lunch.json")
      .then((res) => res.json())
      .then((data) => setLunches(data));
  }, []);
  const [dinners, setDinners] = useState([]);
  useEffect(() => {
    fetch("dinner.json")
      .then((res) => res.json())
      .then((data) => setDinners(data));
  }, []);

  const Foods = [breakfasts, lunches, dinners];
  return (
    <FoodLoad.Provider value={Foods}>
      <div className="App">
        <Navigation></Navigation>
        <FoodNavbar></FoodNavbar>
        <Routes>
          <Route
            path="/breakfast"
            element={<LoadBreakfast></LoadBreakfast>}
          ></Route>
          <Route path="/lunch" element={<LoadLunch></LoadLunch>}></Route>
          <Route path="/dinner" element={<LoadDinner></LoadDinner>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
    </FoodLoad.Provider>
  );
}

export default App;
