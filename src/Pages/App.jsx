import About from "./About";
import Todo from "./todo";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
