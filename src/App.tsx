import "./index.css"
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import { SignUp } from "./components/authentication/SignUpWrapper";


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
    </>
  )
}

export default App
