import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Forms from "./pages/Forms";
import Ts from "./pages/Ts";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <BrowserRouter>
          <nav className="flex space-x-4 p-4 bg-amber-200 mb-8">
            <Link to="/">Home</Link>
            <Link to="/forms">forms</Link>
            <Link to="/ts">ts</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/ts" element={<Ts />} />
          </Routes>
        </BrowserRouter>
      </div>
      {/* <ComplexReactHookForm /> */}
    </>
  );
}

export default App;
