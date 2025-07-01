import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Characters from './pages/Characters'

// import { useState } from 'react'
// import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </Router>
  )
}

export default App
