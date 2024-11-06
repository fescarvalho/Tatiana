import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import "./App.css";

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
