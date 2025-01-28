// import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "../src/components/NavBar/NavBar";
import Footer from "../src/components/Footer/Footer";
import WelcomePage from "./routes/WelcomePage/WelcomePage";
import MainPage from './routes/MainPage/MainPage';
import WatchList from './routes/WatchList/WatchList';
import Detail from './routes/Detail/Detail'; 
import Aboutus from "./routes/Aboutus/Aboutus";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;