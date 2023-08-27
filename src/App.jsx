import MainMenu from './MainMenu.jsx'
import GameRules from './GameRules.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className='app-container'>
        <Routes>
          <Route path="/gamerules" element={<GameRules />} />
          <Route path="/game" element={<div>Game Component Placeholder</div>} />
          <Route path="/" element={<MainMenu />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
