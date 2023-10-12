import "./App.css";
import Biografia from "./views/Biografia";
import Home from "./views/Home";
import Landing from "./views/Landing";
import Form from "./views/Form";
import Detail from "./views/Detail";
import Colibries from "./views/Colibries";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/biografia" element={<Biografia />} />
        <Route path="/home" element={<Home />} />
        <Route path="/información" element={<Form />} />
        <Route path="/detalle/:id" element={<Detail />} />
        <Route path="/colibries" element={<Colibries />} />
      </Routes>
    </div>
  );
}

export default App;
