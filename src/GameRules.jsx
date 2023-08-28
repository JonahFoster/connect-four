import styles from './GameRules.module.css'
import check from './assets/images/icon-check.svg'
import { Link } from 'react-router-dom';

function GameRules() {

  return (
    <section>
        <div className={styles['rules-container']}>
            <h1 className={styles[`rules-heading`]}>RULES</h1>
            <h2 className={styles[`rules-subheading`]}>OBJECTIVE</h2>
              <p className={styles[`rules-text`]}>Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).</p>
            <h2 className={styles[`rules-subheading`]}>HOW TO PLAY</h2>
              <ol className={styles[`rules-list`]}>
                <li>Red goes first in the first game.</li>
                <li>Players must alternate turns, and only one disc can be dropped in each turn.</li>
                <li>The game ends when there is a 4-in-a-row or a stalemate.</li>
                <li>The starter of the previous game goes second on the next game.</li>
              </ol>
            <Link to="/">
              <img src={check} className={styles['check-icon']}/>
            </Link>
        </div>
    </section>
  )
}

export default GameRules
