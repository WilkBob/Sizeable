import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Progressify from "./pages/Progressify";
import Resize from "./pages/Resize";
import { Routes, Route } from "react-router-dom";
import Webp from "./pages/Webp";
import About from "./pages/About";
import ProgressifyReact from "./pages/ProgressifyReact";

function App() {
  return (
    <div className="min-h-screen flex flex-col text-rose-50 justify-between selection:bg-rose-200/20 selection:text-white space">
      <NavBar />
      <Routes>
        {/* Customary */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Tools */}
        <Route path="/resize" element={<Resize />} />
        <Route path="/progressify" element={<Progressify />} />
        <Route path="/webp" element={<Webp />} />
        <Route path="/progressify-react" element={<ProgressifyReact />} />

        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
