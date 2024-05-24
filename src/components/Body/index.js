import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      const showContentClassName = showContent
        ? 'display-content'
        : 'do-not-display-content'
      const showLeftNavbarClassName = showLeftNavbar
        ? 'display-left-navbar'
        : 'do-not-display-left-navbar'
      const showRightNavbarClassName = showRightNavbar
        ? 'display-right-navbar'
        : 'do-not-display-right-navbar'
      return (
        <div className="body-cont">
          <div className={showLeftNavbarClassName}>
            <h1 className="head">Left Navbar Menu</h1>
            <p>Item 1</p>
            <p>Item 2</p>
            <p>Item 3</p>
          </div>
          <div className={showContentClassName}>
            <h1 className="head">Content</h1>
            <p>Lorem ipsum dolor sit amet,consecutor adipising elit,sed to </p>
          </div>
          <div className={showRightNavbarClassName}>
            <h1>Right Navbar</h1>
            <p>Ad 1</p>
            <p>Ad 2</p>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
