import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickChangeTheme = () => {
        toggleTheme()
      }

      const websiteLogoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const textClassName = isDarkTheme
        ? 'link-item light-text'
        : 'link-item dark-text'

      const changeBackground = isDarkTheme
        ? 'navbar-container navbar-dark-background'
        : 'navbar-container navbar-light-background'

      return (
        <div className={changeBackground}>
          <img
            className="website-logo"
            src={websiteLogoUrl}
            alt="website logo"
          />
          <ul className="home-about-cont">
            <li className="navbar-item">
              <Link className={textClassName} to="/">
                Home
              </Link>
            </li>

            <li className="navbar-item">
              <Link className={textClassName} to="/about">
                About
              </Link>
            </li>
          </ul>
          <button
            className="theme-button"
            onClick={onClickChangeTheme}
            data-testid="theme"
            type="button"
          >
            <img className="theme-logo" src={themeUrl} alt="theme" />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
