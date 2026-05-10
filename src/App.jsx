import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Gear from './pages/Gear';
import { ThemeProvider } from './context/ThemeContext';
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="container">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/gear" element={<Gear />} />
            </Routes>
          </main>
          <SpeedInsights />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
