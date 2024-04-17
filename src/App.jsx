// import AddressForm from "./components/Blog"
import './App.css'
import Navbar from "./components/Navbar"
import {Routes, Route} from "react-router-dom"
import { Home } from "./pages/Home"
import { RegisterPage } from './pages/RegisterPage'
import { BlogPage } from './pages/BlogPage'
import About from './pages/About'

export const App = () => {
  return (
      
    <div className="container">
      <Navbar/>
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/RegisterPage" element={<RegisterPage/>}/>
        <Route path="/BlogPage" element={<BlogPage/>}/>
        <Route path="/About" element={<About/>}/>
        


      </Routes>


    </div>

  )
}
