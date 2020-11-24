import React, { Component } from 'react'
import Contact from './Contact'
import { Consumer } from '../../context'

class Liste extends Component {

  render() {
    return (
      <Consumer>
        {value => {
          return (
            <>
              {value.contacts.map(contact => (
                <Contact
                  key={contact.id}
                  id={contact.id}
                  nom={contact.nom}
                  email={contact.email}
                  tel={contact.tel}
                />
              ))}
            </>
          )
        }}
      </Consumer>
    )
  }
}

export default Liste;
