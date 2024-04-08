import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundContainerClassName = isDarkTheme
        ? 'not-found-container dark-background'
        : 'not-found-container light-background'

      const textClassName = isDarkTheme ? 'light-heading' : 'dark-heading'

      return (
        <div>
          <Navbar />
          <div className={notFoundContainerClassName}>
            <img
              className="not-found-image"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />
            <h1 className={`not-found-heading ${textClassName}`}>
              Lost Your Way?
            </h1>
            <p className={`not-found-para ${textClassName}`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
