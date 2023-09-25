import "./App.css";
import Biografia from "./views/Biografia";
import Exposicion from "./views/Exposicion";
import Landing from "./views/Landing";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/biografia" element={<Biografia />} />
        <Route path="/exposicion" element={<Exposicion />} />
      </Routes>
    </div>
  );
}

export default App;
