import logo from './assets/images/logo.svg'
import board from './assets/images/board-layer-white-small.svg'
import styles from './Game.module.css'

function Game() {

  return (
    <div className={styles['game-container']}>
      <div className={styles['game-nav']}>
        <button className={styles['game-button']}>MENU</button>
        <img className={styles['logo']} src={logo} />
        <button className={styles['game-button']}>RESTART</button>
      </div>
      <div className={styles['game-scores-container']}>
      </div>
      <img className={styles['game-board']} src={board} />
    </div>
  )
}

export default Game
