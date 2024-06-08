import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    mode: false,
  }
  onSubmit = () => {
    this.setState(prevState => ({mode: !prevState.mode}))
  }
  getContainerbox = () => {
    const {mode} = this.state
    return mode ? 'light-bg' : 'dark-bg'
  }
  getHeadingText = () => {
    const {mode} = this.state
    return mode ? 'dark-head' : 'light-head'
  }
  getButtonText = () => {
    const {mode} = this.state
    return mode ? 'Dark Mode' : 'Light Mode'
  }
  render() {
    const conatinerBox = this.getContainerbox()
    const heading = this.getHeadingText()
    const buttonText = this.getButtonText()
    return (
      <div className="main-bg">
        <div className={conatinerBox}>
          <h1 className={heading}>Click To Change Mode</h1>
          <button type="button" onClick={this.onSubmit}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
