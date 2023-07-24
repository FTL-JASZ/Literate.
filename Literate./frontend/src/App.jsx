import { useEffect, useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import styles from "./page.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { Profile } from "./pages/Profile/Profile";
import { AuthorizeProvider } from "./contexts/authUser";
import { Home } from "./pages/Home/Home";
import "./App.css";
import Budget from "./pages/Budget/Budget";
export default function AppContainer() {
  // 2. Use at the root of your app
  return (
    <NextUIProvider>
      <AuthorizeProvider>
        <App />
      </AuthorizeProvider>
    </NextUIProvider>
  );
}
function App() {
  //usestates and variables
  const [isOpen, setIsOpen] = useState(false);
  //handler for making sidebar pop in and out
  function handleToggle() {
    setIsOpen(!isOpen);
  }
  return (
    <div className={styles.main}>
      <BrowserRouter forceRefresh={true}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Signup" element={<Signup />} />
          <Route
<
            path="/Profile"
            element={<Profile handleToggle={handleToggle} isOpen={isOpen} />}
          />
          <Route

            path="/Budget"
            element={<Budget handleToggle={handleToggle} isOpen={isOpen} />}
          />
          <Route
            path="/Home"
            element={<Home handleToggle={handleToggle} isOpen={isOpen} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
