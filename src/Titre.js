import React from 'react'
import PropTypes from 'prop-types'

function Titre(props) {
  return (
    <div>
      <h1>Bienvenue {props.name}.</h1>
    </div>
  )
}

Titre.propTypes = {
  name: PropTypes.string.isRequired
}

export default Titre;
