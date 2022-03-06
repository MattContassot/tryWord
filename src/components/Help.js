import React, { Component } from 'react';
import { connect } from 'react-redux';
import { renderHelp } from '../store/actions';

class Score extends Component {
  handleClick = () => {
    const { renderHelp } = this.props;

    return renderHelp(false);
  }

  render() {
    const firstTip = ['T', 'U', 'R', 'M', 'A'];
    const secondTip = ['V', 'I', 'O', 'L', 'A'];
    const thirdTip = ['P', 'U', 'L', 'G', 'A'];

    return (
      <section className="menu">
        <button id="closeHelp" onClick={ this.handleClick }>x</button>
        <div id="helpMenu">
          <p>Descubra a palavra certa em 6 tentativas.</p>
          <p>Depois de cada tentativa, as pelas mostram o quão perto você está da solução.</p>

          <div className="tip">
            { firstTip.map((letter, index) =>
              <p
                className={ letter === 'T' ? "helpWordBox helpCorrect" : "helpWordBox" }
                key={ index }
              >
                  {letter}
              </p>) }
          </div>
          <span className="tip">
            A letra <p className="helpWordBox helpCorrect helpInLine">T</p> faz parte da palavra e está na posição correta.
          </span>

          <div className="tip">
            { secondTip.map((letter, index) =>
              <p
                className={ letter === 'O' ? "helpWordBox helpIncludes" : "helpWordBox" }
                key={ index }
              >
                  {letter}
              </p>) }
          </div>
          <span className="tip">
            <span>A letra</span>
            <p className="helpWordBox helpIncludes helpInLine">O</p>
            <span>faz parte da palavra mas em outra posição.</span>
          </span>

          <div className="tip">
            { thirdTip.map((letter, index) =>
              <p
                className={ letter === 'G' ? "helpWordBox helpWrong" : "helpWordBox" }
                key={ index }
              >
                  {letter}
              </p>) }
          </div>
          <span className="tip">
            <span>A letra</span>
            <p className="helpWordBox helpWrong helpInLine">G</p>
            <span>não faz parte da palavra.</span>
          </span>

          <p>As palavras podem possuir letras repetidas</p>
          <br></br>
          <br></br>
          <br></br>
          <p>Palavras com acentos e ç ainda não foram implementadas, para jogar novamente basta recarregar a página</p>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  renderHelp: (payload) => dispatch(renderHelp(payload)),
});

export default connect(null, mapDispatchToProps)(Score);
