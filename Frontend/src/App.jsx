
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from './pages/Register'




const App = () => {


  
  return (
     <div>
        <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/register" element={<Register/>}/>
      </Routes>
    <Footer/>
    </div>
  )
}

export default App