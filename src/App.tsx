import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage"; // Make sure the path is correct
import AboutMe from "./pages/AboutMe"; // Make sure the path is correct
import NavBar from "./components/NavBar";
import ContactPage from "./pages/ContactPage";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Route for the HomePage */}
        <Route path="/home" element={<HomePage />} />

        {/* Route for the AboutMe page */}
        <Route path="/about" element={<AboutMe />} />

        {/* Route for the ContactPage */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
