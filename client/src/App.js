import "./App.css";
import Biografia from "./views/Biografia";
import Home from "./views/Home";
import Landing from "./views/Landing";
import Form from "./views/Form";
import Colibries from "./views/Colibries";
import DetailColeccion from "./views/DetailColeccion";
import DetailColibri from "./views/DetailColibri";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/biografia" element={<Biografia />} />
        <Route path="/home" element={<Home />} />
        <Route path="/información" element={<Form />} />
        <Route path="/colibries" element={<Colibries />} />
        <Route path="/detailColeccion/:id" element={<DetailColeccion />} />
        <Route path="/detailColibri/:id" element={<DetailColibri />} />
      </Routes>
    </div>
  );
}

export default App;
