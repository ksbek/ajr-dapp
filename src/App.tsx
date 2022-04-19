import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import ProjectPage from "./pages/Project";
import TeamPage from "./pages/Team";

function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </div>
  );
}

export default App;
