import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Contacts from "./components/pages/Contacts";
import HowToBuy from "./components/pages/Howtobuy";
import Ecosystem from "./components/pages/Ecosystem";
import SignUp from "./components/pages/SignUp";
import Blog from "./components/pages/Blog";
import Footer from "./components/Footer";
import Roadmap from "./components/Roadmap";
import About from "./components/About";
import Nft from "./components/pages/NFT";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/home" exact element={<Home />}></Route>
          <Route path="/about-us" exact element={<About />}></Route>
          <Route path="/contacts" exact element={<Contacts />}></Route>
          <Route path="/how-to-buy" exact element={<HowToBuy />}></Route>
          <Route path="/ecosystem" exact element={<Ecosystem />}></Route>
          <Route path="/roadmap" exact element={<Roadmap />}></Route>
          <Route path="/blog" exact element={<Blog />}></Route>
          <Route path="/nft" exact element={<Nft />}></Route>
          <Route path="/sign-up" exact element={<SignUp />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
