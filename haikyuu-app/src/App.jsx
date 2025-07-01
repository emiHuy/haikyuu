import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Characters from './pages/Characters'
import Teams from './pages/Teams'
import './css/App.css'

function App() {
  return (
    <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/characters" replace />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/teans" element={<Teams />} />
        </Routes>
    </Router>
  )
}

export default App
