import React from 'react'

class Pet extends React.Component {
  constructor(props) {
    super()
    this.name = props.pet.name
    this.age = props.pet.age
    this.weight = props.pet.weight
    this.type = props.pet.type
    this.gender = props.pet.gender
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
          {this.gender === 'female' ? '♀ ' : '♂ ' }
            {this.name}
          </a>
          <div className="meta">
            <span className="date">{this.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.age}</p>
            <p>Weight: {this.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted ? 
          <button className="ui disabled button">Already adopted</button>
          :
          <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
          }
        </div>
      </div>
    )
  }
}

export default Pet
