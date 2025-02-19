import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AllNews from "./components/AllNews";
// import Footer from "./components/Footer";
import TopHeadlines from "./components/TopHeadlines";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryNews from "./components/CountryNews";
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [count, setCount] = useState(0)
  return (
    <ThemeProvider>
      <div className="app w-full">
        <BrowserRouter>
          <nav>
            <ThemeToggle />
            {/* Other nav items */}
          </nav>
          <Header />
          <Routes>
            <Route path="/" element={<AllNews />} />
            <Route path="/top-headlines/:category" element={<TopHeadlines />} />
            <Route path="/country/:iso" element={<CountryNews />} />
          </Routes>
          {/* <Cards />  */}
          {/* <Footer />   */}
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;