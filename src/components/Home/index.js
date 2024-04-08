import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const homeContainerClassName = isDarkTheme
        ? 'home-container dark-background'
        : 'home-container light-background'

      const homeHeadingClassName = isDarkTheme
        ? 'heading light-heading'
        : 'heading dark-heading'

      return (
        <div>
          <Navbar />
          <div className={homeContainerClassName}>
            <img className="home-image" src={homeImgUrl} alt="home" />
            <h1 className={homeHeadingClassName}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
