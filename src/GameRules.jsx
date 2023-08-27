import './GameRules.css'

function GameRules() {

  return (
    <section>
        <div className='rules-container'>
            <h1>RULES</h1>
            <h2>OBJECTIVE</h2>
              <p>Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).</p>
            <h2>HOW TO PLAY</h2>
              <ol>
                <li>Red goes first in the first game.</li>
                <li>Players must alternate turns, and only one disc can be dropped in each turn.</li>
                <li>The game ends when there is a 4-in-a-row or a stalemate.</li>
                <li>The starter of the previous game goes second on the next game.</li>
              </ol>
        </div>
    </section>
  )
}

export default GameRules
