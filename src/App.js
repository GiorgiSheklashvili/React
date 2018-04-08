import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import SubmissionForm from './submissionForm';
import Game from './Game';
import History from './History';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      currentRound:{guess:'', botGuess: '', result: ''},
      rounds: [],
      neverWon:true
    }
  }
  handleGuessSubmit({guess}) {
    let bot = Math.floor((Math.random() * 3) + 1); //1-R, 2-P, 3-S
    const game = new Game();
    let result = game.check(guess, bot);
    if(result == 'you win'){
      this.setState({
        neverWon:false
      });  
    }
    let thisRound={guess: guess, botGuess: bot, result: result};
    this.setState({
      currentRound: thisRound,
      rounds: this.state.rounds.concat(thisRound)
    });
  }


  render() {
    return (
      <div className='app'>
      <SubmissionForm
          onSubmit={this
          .handleGuessSubmit
          .bind(this)}
          neverWon={this.state.neverWon}
          />
      <table style={{ width : '40%' }}>
      <thead>
        <tr>
        <th>You</th>
        <th>Computer</th> 
        <th>Result</th>
        </tr>
      </thead>
      
        <History rounds={this.state.rounds} />
      
      </table>
      </div>
    );
  }
}

export default App;
