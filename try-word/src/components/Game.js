import React, { Component } from 'react';

class Game extends Component {
  constructor() {
    super();
  }

  render() {
    let wordLine = [];
    
    for (let i = 0; i < 5; i += 1) {
      wordLine.push(
        <input
          key={ i }
          type="text"
          className="wordBox"
          maxLength="1"
          pattern="[A-Za-z]"
        />
      )
    }

    return (
      <main>
        {
          wordLine.map((letra) => letra)
        }
      </main>
    );
  }
}

export default Game;
