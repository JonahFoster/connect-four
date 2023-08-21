import logo from './assets/images/logo.svg'
import players from './assets/images/player-vs-player.svg'

function MainMenu() {

  return (
    <nav>
      <img className='logo'src={logo} alt="" />
        <div className='list-items'>
            <div className='players-button'>
                <p>PLAYER VS PLAYER</p>
                <img src={players} alt="" />
            </div>
            <div className='rules-button'>
                <p>GAME RULES</p>
            </div>
        </div>
    </nav>
  )
}

export default MainMenu
