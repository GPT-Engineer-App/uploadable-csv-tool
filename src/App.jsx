import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Shop from "./pages/Shop.jsx";
import Maps from "./pages/Maps.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/maps" element={<Maps />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
