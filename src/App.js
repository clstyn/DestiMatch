import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { Home1 } from "./pages/Home1";
import { Profile } from "./pages/Profile";
import { Recommend } from "./pages/Recommend";
import { About } from "./pages/About";
import DestinationsContextProvider from "./context/destinationContext";

function App() {
  return (
    <Router>
      <DestinationsContextProvider>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/places" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/recommend" element={<Recommend />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </DestinationsContextProvider>
    </Router>
  );
}

export default App;
