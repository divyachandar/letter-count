// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {letterCount: 0}

  onUpdateLetterCount = event => {
    this.setState({letterCount: event.target.value.length})
  }

  render() {
    const {letterCount} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <div className="calculator-container">
            <h1 className="card-caption">Calculate the Letters you enter</h1>
            <div className="input-phrase-container">
              <label className="phrase-label" htmlFor="inputLabel">
                Enter the phrase
              </label>
              <input
                type="text"
                id="inputLabel"
                className="phrase-text"
                placeholder="Enter the phrase"
                onChange={this.onUpdateLetterCount}
              />
            </div>
            <p className="count-text">No.of letters: {letterCount}</p>
          </div>

          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image-container"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
