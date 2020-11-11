import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Liste from './components/Liste'

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Header />
        <div className="container">
          <Liste />
        </div>
      </div>
    )
  }
}

export default App;
