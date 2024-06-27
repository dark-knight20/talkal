import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import NavBar from './SharedComponents/NavBar/NavBar'
import DashBoard from './features/DashBoard/DashBoard'
import SideBar from './SharedComponents/SideBar/SideBar'
// DashBoard
// SideBar

function App() {


  return (
    <>
    <Router>
    <NavBar/>
    <SideBar/>
      <Routes>
        <Route path='/' element={<DashBoard/>}></Route>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
