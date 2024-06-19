import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Shop from "./pages/Shop.jsx";
import Maps from "./pages/Maps.jsx";
import Zebras from "./pages/Zebras.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/zebras" element={<Zebras />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
