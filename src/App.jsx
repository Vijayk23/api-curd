import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Create from "./Create";
import Update from "./Update";
import Read from "./Read";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
        <Route path="/read/:id" element={<Read />}></Route>
      </Routes>
    </>
  );
}

export default App;
