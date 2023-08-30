import logo from './assets/images/logo.svg'
import whiteBoard from './assets/images/board-layer-white-small.svg'
import blackBoard from './assets/images/board-layer-black-small.svg'
import player1 from './assets/images/player-one.svg'
import player2 from './assets/images/player-two.svg'
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
        <div className={styles['game-scores-player']}>
          <p className={styles['player-name']}>PLAYER 1</p>
          <p className={styles['player-score']}>0</p>
          <img className={styles['player1-img']} src={player1} />
        </div>
        <div className={styles['game-scores-player']}>
          <p className={styles['player-name']}>PLAYER 2</p>
          <p className={styles['player-score']}>0</p>
          <img className={styles['player2-img']} src={player2} />
        </div>
      </div>
      <div className={styles['game-board-container']}>
        <img className={styles['game-board-white']} src={whiteBoard} />
        <img className={styles['game-board-black']} src={blackBoard} />
      </div>
    </div>
  )
}

export default Game
