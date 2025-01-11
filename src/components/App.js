import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Diplomas from "./Diplomas";
import Module from "./Module";
import Session from "./Session";
import Register from "./Register";
import Confirmation from "./Confirmation";
import Header from "./Header";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home title="Welcome to Republic Polytechnic" />} />
        <Route path="diplomas" element={<Diplomas />}>
          <Route path=":dipId" element={<Module />}>
            <Route path=":sessionId" element={<Session />} />
          </Route>
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="confirmed" element={<Confirmation />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>

      <footer className="container">
        &copy;2024 | <a href="https://www.rp.edu.sg/schools-courses">Republic Polytechnic</a>
      </footer>
    </div>
  );
}

export default App;
