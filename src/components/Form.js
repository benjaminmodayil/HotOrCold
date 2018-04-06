import React from 'react'
import './game.css'

export default class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }
  }
  render() {
    return (
      <form action="" onSubmit={(e, value) => this.props.onSubmit(e, this.state.number)}>
        <label htmlFor="guess" />
        <input
          type="number"
          id="guess"
          name="guess"
          placeholder="Enter Your Guess"
          max="100"
          min="1"
          required
          onChange={e => this.setState({ number: e.target.valueAsNumber })}
        />
        <button>Guess</button>
      </form>
    )
  }
}
