import { Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation"
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

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/article" element={<Article />}/>
        <Route path="/articleContent" element={<ArticleContent />}/>
        <Route path="/*" element={<NotFound />}/>
        <Route path="/course" element={<Course />}/>
        <Route path="/offlineClass" element={<OfflineClass />}/>
        <Route path="/invoice" element={<Invoice />}/>
        <Route path="/virtualAccount" element={<VirtualAccount />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
