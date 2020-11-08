import { Component } from 'react';
import Titre from './Titre';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Titre name="Hugo">
          hey
        </Titre>
        <Titre name="Jules">
          hi
        </Titre>
        <Titre name="Eva">
          ha
        </Titre>
      </div>
    );
  }
}


export default App;
