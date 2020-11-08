import { Component } from 'react';
import Titre from './Titre';

class App extends Component {

  state = {
    name1: "Hugo",
    name2: "Jules",
    name3: "Eva"
  }

  render() {
    return (
      <div className="App">
        <Titre name={this.state.name1} />
        <Titre name={this.state.name2} />
        <Titre name={this.state.name3} />
      </div>
    );
  }
}


export default App;
