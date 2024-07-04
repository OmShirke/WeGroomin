import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Saloon from "./pages/saloon/Saloon";
import List from "./pages/list/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saloons" element={<List />} />
        <Route path="/saloon/:id" element={<Saloon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
