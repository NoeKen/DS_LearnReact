import "./App.css";
// import { Routes } from "./routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Views/Home";
import About from "./Views/about/About";
import { NavBar } from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
