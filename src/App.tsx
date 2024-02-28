import "./index.css"
import { Routes, Route } from "react-router-dom";
import Test from "./components/Home";



function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Test />} />
    </Routes>
    </>
  )
}

export default App
