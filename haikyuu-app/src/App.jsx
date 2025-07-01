import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Characters from './pages/Characters'
import Teams from './pages/Teams'

// import { useState } from 'react'
// import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/characters" replace />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/teans" element={<Teams />} />
      </Routes>
    </Router>
  )
}

export default App
