import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from './context'
import Header from './components/interface/Header'
import Liste from './components/contact/Liste'
import AddContact from './components/contact/AddContact'

class App extends Component {

  render() {
    return (
      <Provider>
        <div className='App'>
          <Header />
          <div className="container">
            <AddContact />
            <Liste />
          </div>
        </div>
      </Provider>
    )
  }
}

export default App;
