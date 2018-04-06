import React from 'react'
import Header from './Header'
import Game from './Game'
import './container.css'
export default function Container(props) {
  return (
    <main>
      <Header />
      <div className="container">
        <h1>HOT or COLD</h1>
        <Game />
      </div>
    </main>
  )
}
