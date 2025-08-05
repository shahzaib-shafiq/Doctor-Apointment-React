import { useState } from 'react'
import { BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import Login from './Pages/Login'
import Register from './Pages/Register'
import {useSelector} from 'react-redux';
import Spinner from './Components/Spinner'
import ProtectedRoutes from './Components/ProtectedRoutes'
import PublicRoutes from './Components/PublicRoutes'
function App() {
  const {loading}=useSelector((state:any)=>state.alearts)

  return (

    <>
    <Router>
  {loading ?(<Spinner/>):(<Routes>
        {/* Route for homepage */}
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<ProtectedRoutes><HomePage/></ProtectedRoutes>} />
        
        <Route path="/login" element={<PublicRoutes> <Login /></PublicRoutes>} />
        <Route path="/register" element={<PublicRoutes><Register /></PublicRoutes>} />
        
      </Routes>)}
    </Router>
    </>
  )
}

export default App
