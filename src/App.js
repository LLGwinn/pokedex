import './App.css';
import { dealHands, calculateScore} from './helpers';
import pokeData from './pokeData';
import Pokedex from './Pokedex';

function App() {
  const hands = dealHands(pokeData);
  const hand1Exp = hands.hand1.map(x => x.base_experience);
  const hand2Exp = hands.hand2.map(x => x.base_experience);

  console.log('HAND1', calculateScore(hand1Exp));
  console.log('HAND2', calculateScore(hand2Exp));

  calculateScore(hand1Exp) > calculateScore(hand2Exp) ?
    hands.hand1.isWinner=true : hands.hand2.isWinner=true;

  return (
    <div className="App">
      <h3>Pokegame</h3>
      <Pokedex hand={hands.hand1} isWinner={hands.hand1.isWinner} />
      <Pokedex hand={hands.hand2} isWinner={hands.hand2.isWinner} />
    </div>
  );
}

export default App;
