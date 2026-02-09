import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Navbaar from "./components/Navbaar";
import { ShopProvider } from "./context/ShopContext";

function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbaar />
          
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;
