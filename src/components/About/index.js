import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const aboutContainerClassName = isDarkTheme
        ? 'about-container dark-background'
        : 'about-container light-background'

      const aboutHeadingClassName = isDarkTheme
        ? 'heading light-heading'
        : 'heading dark-heading'

      return (
        <div>
          <Navbar />
          <div className={aboutContainerClassName}>
            <img className="about-image" src={aboutImgUrl} alt="about" />
            <h1 className={aboutHeadingClassName}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
