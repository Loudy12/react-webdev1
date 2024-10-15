import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importing necessary components from react-router-dom
import HomePage from "./pages/HomePage"; // Importing the HomePage component
import AboutMe from "./pages/AboutMe"; // Importing the AboutMe component
import ProjectsPage from "./pages/ProjectsPage"; 
import NavBar from "./components/NavBar"; // Importing the NavBar component
import ContactPage from "./pages/ContactPage"; // Importing the ContactPage component

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Route for the HomePage */}
        <Route path="/home" element={<HomePage />} />

        {/* Route for the AboutMe page */}
        <Route path="/about" element={<AboutMe />} />

        {/* Route for the ProjectsPage */}
        <Route path="/projects" element={<ProjectsPage />} /> {/* Adding route for ProjectsPage */}

        {/* Route for the ContactPage */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App; // Exporting the App component
