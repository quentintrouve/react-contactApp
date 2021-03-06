import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from './context'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/interface/Header'
import Liste from './components/contact/Liste'
import AddContact from './components/contact/AddContact'
import APropos from './components/pages/APropos'
import Home from './components/pages/Home'
import Erreur from './components/pages/Erreur'

class App extends Component {

  render() {
    return (
      <Provider>
        <Router>
          <div className='App'>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/liste' component={Liste} />
                <Route exact path='/ajouter' component={AddContact} />
                <Route exact path='/apropos' component={APropos} />
                <Route component={Erreur} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
