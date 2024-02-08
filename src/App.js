import Header from "../src/Components/Header";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Careers from "./Components/Careers";
import Technology from "./Components/Technology";
import About from "./Components/About";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          ></Route>
          <Route path="/about-us" element={<About />}></Route>
          <Route path="/technology" element={<Technology />}></Route>
          <Route path="/contact-us" element={<Contact />}></Route>
          <Route path="/careers" element={<Careers />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
