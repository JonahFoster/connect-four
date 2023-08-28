import logo from './assets/images/logo.svg'
import styles from './MainMenu.module.css'

function MainMenu() {

  return (
    <div>
        <img className={styles['logo']} src={logo} />
    </div>
  )
}

export default MainMenu
