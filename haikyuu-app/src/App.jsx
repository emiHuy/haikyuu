import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { teams } from './data/data';
import NavBar from './components/NavBar';
import Characters from './pages/Characters';
import Teams from './pages/Teams';
import TeamRoster from './pages/TeamRoster';
import './css/App.css';

function App() {
  return (
    <Router>
      <NavBar />
        <Routes>
          <Route path='/' element={<Navigate to='/characters' replace />} />
          <Route path='/characters' element={<Characters />} />
          <Route path='/teams' element={<Teams />} />
          {teams.map((t) => (
            <Route
              key={t.id}
              path={`/teams/${t.name.toLowerCase().replace(' ', '-')}`}
              element={<TeamRoster team={t} />}
            />
          ))
          }
        </Routes>
    </Router>
  )
}

export default App
