import React from 'react'
import Pet from './Pet'
import uuid from 'uuid'

class PetBrowser extends React.Component {
  render() {
    return <div className="ui cards">
              {this.props.pets.map(pet => <Pet key={uuid()} pet={pet} onAdoptPet={this.props.onAdoptPet}/>)}
            </div>
  }
}

export default PetBrowser
