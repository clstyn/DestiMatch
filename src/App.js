import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { ListPlaces } from "./pages/ListPlaces";
import { Profile } from "./pages/Profile";
import DestinationsContextProvider from "./context/destinationContext";

function App() {
  return (
    <DestinationsContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/places" element={<ListPlaces />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </DestinationsContextProvider>
  );
}

export default App;
