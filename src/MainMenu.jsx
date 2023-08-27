import logo from './assets/images/logo.svg'
import players from './assets/images/player-vs-player.svg'
import { Link } from 'react-router-dom';
import './MainMenu.css'

function MainMenu() {

  return (
    <nav>
      <img className='logo'src={logo} alt="" />
      <Link to="/game" className='pvp-button'>
        <p>PLAY VS PLAYER</p>
        <img className='pvp-button-img' src={players} alt="" />
      </Link>
      <Link to="/gamerules" className='rules-button'>
        <p>GAME RULES</p>
      </Link>
    </nav>
  )
}

export default MainMenu
