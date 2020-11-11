import React, { Component } from 'react'
import Contact from './Contact'

class Liste extends Component {

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
    ]
  }

  render() {
    return (
      <div>
        {this.state.contacts.map(contact => (
          <Contact
            nom={contact.nom}
            email={contact.email}
            tel={contact.tel}
            key={contact.id}
          />
        ))}
      </div>
    )
  }
}

export default Liste;
