import "./index.css"
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import { SignUp } from "./components/authentication/SignUpWrapper";
import LoginPage from "./components/authentication/LoginPage";


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
    </>
  )
}

export default App
