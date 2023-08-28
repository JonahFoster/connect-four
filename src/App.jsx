import MainMenu from './MainMenu.jsx'
import GameRules from './GameRules.jsx'
import Game from './Game.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className='app-container'>
        <Routes>
          <Route path="/gamerules" element={<GameRules />} />
          <Route path="/game" element={<Game />} />
          <Route path="/" element={<MainMenu />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
