import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./component/Home"


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/React_Task/" element={<Home/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
