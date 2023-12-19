import "./App.css";
import Create from "./Create";

import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from "./Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/edit/:id" element={<Update/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
