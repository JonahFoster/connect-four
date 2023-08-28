import logo from './assets/images/logo.svg'
import players from './assets/images/player-vs-player.svg'
import { Link } from 'react-router-dom';
import styles from './MainMenu.module.css'

function MainMenu() {

  return (
    <nav>
      <img className={styles['logo']}src={logo} alt="" />
      <Link to="/game" className={styles['pvp-button']}>
        <p>PLAY VS PLAYER</p>
        <img className={styles[`pvp-button-img`]} src={players} alt="" />
      </Link>
      <Link to="/gamerules" className={styles['rules-button']}>
        <p>GAME RULES</p>
      </Link>
    </nav>
  )
}

export default MainMenu
