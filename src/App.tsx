import { Routes, Route } from "react-router-dom";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import LandingPage from './pages/LandingPage';
import Roadmap from "./pages/Roadmap";
import MaintenancePage from './pages/MaintenancePage';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
