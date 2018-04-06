import React from 'react'
import './game.css'
import Form from './Form'

export default class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentNum: '',
      mostRecentGuess: '',
      guesses: [],
      isClose: '',
      message: 'Make your Guess!',
      answer: Math.floor(Math.random() * 100) + 1
    }
  }

  inputHandler(e, value) {
    e.preventDefault()
    e.currentTarget.reset()
    this.setState(
      {
        currentNum: value,
        prevNum: this.state.guesses[this.state.guesses.length - 1],
        guesses: [...this.state.guesses, value]
      },
      () => {
        if (this.state.prevNum)
          Math.abs(this.state.answer - this.state.prevNum) <
          Math.abs(this.state.answer - value)
            ? this.setState({ message: 'Colder' })
            : this.setState({ message: 'Warmer' })
        if (value === this.state.answer) this.setState({ message: 'You won!' })
      }
    )
  }

  render() {
    let pastGuesses = this.state.guesses.map((item, index) => (
      <span key={index}>{item}</span>
    ))

    return (
      <div>
        <div className="container__degree">
          <p>{this.state.message}</p>
        </div>
        <div className="container__form-wrapper">
          <Form
            curr={this.state.guesses}
            onSubmit={(e, value) => this.inputHandler(e, value)}
          />
          <p>
            Guess #<span className="guess__number">{this.state.guesses.length}</span>!
          </p>
        </div>
        <div className="container__past-guesses">{pastGuesses}</div>
      </div>
    )
  }
}
