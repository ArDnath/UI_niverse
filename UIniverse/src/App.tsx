import { Outlet } from "react-router-dom"
import Navbar from "./components/ui/Navbar"
import Footer from "./components/ui/Footer"
function App() {

  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
    
  )
}

export default App
