import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import './scss/style.scss'
import DetailProduct from "./pages/detail-product/DetailProduct"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<DetailProduct/>}/>
      </Routes>
    </>
  )
}

export default App
