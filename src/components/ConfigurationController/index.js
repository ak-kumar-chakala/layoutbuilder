import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onClickShowContent = () => {
        onToggleShowContent()
      }

      const onClickLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onClickRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="config-cont">
          <h1>Layout</h1>
          <ul>
            <div>
              <input
                onChange={onClickShowContent}
                checked={showContent}
                id="context"
                type="checkbox"
              />
              <label htmlFor="context">Content</label>
            </div>
            <div>
              <input
                onChange={onClickLeftNavbar}
                checked={showLeftNavbar}
                id="leftNavbar"
                type="checkbox"
              />
              <label htmlFor="leftNavbar">Left Navbar</label>
            </div>
            <div>
              <input
                onChange={onClickRightNavbar}
                checked={showRightNavbar}
                id="rightNavbar"
                type="checkbox"
              />
              <label htmlFor="rightNavbar">Right Navbar</label>
            </div>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
