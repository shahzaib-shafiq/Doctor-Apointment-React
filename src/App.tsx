import { useState } from 'react'
import { BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import Login from './Pages/Login'
import Register from './Pages/Register'
function App() {
  return (
    <>
    <Router>
     <Routes>
        {/* Route for homepage */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
    </Router>
    </>
  )
}

export default App
