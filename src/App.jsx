import "./App.css";
import ProfileImageUpload from "./utils/MultipleImageUpload";
import SignInPage from "./component/SignInPage";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./component/LoginPage";
import ProfilePage from "./component/ProfilePage";
import ProtectedRoute from "./utlis/ProtectedRoute";
import HeroPage from "./component/HeroPage";
import DocumentationPage from "./template/DocumentationPage";
import HelpCenter from "./template/HelpCenter";
import BlogPage from "./template/BlogPage";
import ContactPage from "./template/ContactPage";
import PrivacyPolicyPage from "./template/PrivacyPolicyPage";
import Features from "./template/Features";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <ProfileImageUpload /> */}
        {/* <SignInPage /> */}
        {/* Display name: <input type="text" placeholder="Enter your name" />
        Bio: <textarea placeholder="Tell us about yourself"></textarea> */}
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/registration" element={<SignInPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* DocumentationPage */}
          <Route path="/documentation" element={<DocumentationPage />} />
          {/* HelpCenter */}
          <Route
            path="/help-center"
            element={<HelpCenter />}
          />
          {/* BlogPage */}
          <Route
            path="/blog"
            element={<BlogPage />}
          />
          {/* contact page */}
          <Route 
          path="/contact"
          element={<ContactPage />}
          />  

          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path='/features' element={<Features />} />
            <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
