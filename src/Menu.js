import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Menu extends Component {
  render() {
    return (
      <div>
        <Link to='/'>Main</Link>
        <Link to='/about'>About</Link>
        <Link to='/grid'>Grid</Link>
      </div>
    )
  }
}

export default Menu