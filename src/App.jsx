import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation"
import NavigationIn from "./components/NavigationIn"
import Article from "./pages/Article/Article"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Footer from "./components/Footer"
import SignUp from "./pages/SignUp/SignUp"
import SignIn from "./pages/SignIn/SignIn"
import ArticleContent from "./pages/Article/ArticleContent"
import Course  from "./pages/course/Course"
import OfflineClass from "./pages/OfflineClass/OfflineClass"
import Invoice from "./pages/Invoice/Invoice"
import VirtualAccount from "./pages/VirtualAccount/VirtualAccount"
import Mentor from "./pages/Mentor/Mentor"
import MetodePembayaran from "./pages/MetodePembayaran/MetodePembayaran"
import Music from "./pages/OfflineClass/music";
import Art from "./pages/OfflineClass/Art";
import Dance from "./pages/OfflineClass/Dance";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Lakukan logika untuk memeriksa status login pengguna
    // Contoh sederhana untuk mendapatkan status login dari local storage
    const token = localStorage.getItem('token');
    if (token ) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <>
        {isAuthenticated ? (
          <NavigationIn />
        ) :  <Navigation />}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/article" element={<Article />}/>
        <Route path="/articleContent/:id" element={<ArticleContent />}/>
        <Route path="/*" element={<NotFound />}/>
        <Route path="/course" element={<Course />}/>
        <Route path="/offlineClass" element={<OfflineClass />}/>
        <Route path="/invoice" element={<Invoice />}/>
        <Route path="/virtualAccount" element={<VirtualAccount />}/>
        <Route path="/metodePembayaran" element={<MetodePembayaran />}/>
        <Route path="/mentor" element={<Mentor/>}/>
        <Route path="/music" element={<Music />} />
        <Route path="/art" element={<Art />} />
        <Route path="/dance" element={<Dance />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;