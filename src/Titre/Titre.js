import React from 'react'
import PropTypes from 'prop-types'
import './Titre.css'

function Titre(props) {
  let toggle = false;
  return (
    <div>
      <h1 style={{ color: toggle ? 'red' : 'orange', fontSize: '40px' }}>Bienvenue {props.name}.</h1>
    </div>
  )
}

Titre.propTypes = {
  name: PropTypes.string.isRequired
}

export default Titre;
