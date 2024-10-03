import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Loading from "./components/Loading";
import Tools from "./pages/Tools";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const ProgressifyReact = lazy(() => import("./pages/ProgressifyReact"));

function App() {
  return (
    <div className="min-h-screen flex flex-col text-rose-50 justify-between selection:bg-rose-200/20 selection:text-white space">
      <NavBar />
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Customary */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Image Tool */}
          <Route path="/tools/:tool" element={<Tools />} />
          <Route path="/tools" element={<Tools />} />
          {/* Image Library*/}
          <Route path="/progressify-react" element={<ProgressifyReact />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
