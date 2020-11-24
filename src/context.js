import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact =>
          contact.id !== action.payload)
      };
      case 'ADD_CONTACT':
        return {
          // création d'un nouveau tableau avec les données du submit (action.payload)
          // et les données déjà contenues dans notre state (...state.contacts)
          contacts: [action.payload, ...state.contacts]
        }
    default:
      return state;
  }
}

export class Provider extends Component {

  state = {
    contacts: [
      {
        id: 1,
        nom: 'José Garcia',
        email: 'jose@gmail.com',
        tel: '0605040302',
      },
      {
        id: 2,
        nom: 'Antoine Decaune',
        email: 'antoine@gmail.com',
        tel: '0604030201',
      },
      {
        id: 3,
        nom: 'Lee Nule',
        email: 'lee@gmail.com',
        tel: '0607080910',
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action))
    }
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;
