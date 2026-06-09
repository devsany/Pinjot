import "./App.css";
import ProfileImageUpload from "./utils/MultipleImageUpload";
import SignInPage from "./component/SignInPage";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
          <Route path="/registration" element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
