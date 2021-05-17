import './App.css'
import React from 'react'
import imgSrc from '../src/elon-musk.jpeg'

class App extends React.Component {
  constructor() {
    super()

    this.person = {
      imgSrc: <img src={imgSrc} alt='' />,
      fullName: 'Elon MUSK',
      profession: 'CEO of Tesla Motors',
      bio: 'Elon Musk is a South African-born American entrepreneur and businessman who founded X.com in 1999 (which later became PayPal), SpaceX in 2002 and Tesla Motors in 2003. ... Musk made headlines in May 2012, when SpaceX launched a rocket that would send the first commercial vehicle to the International Space Station.',
    }

    this.state = {
      shows: false,
      count: 0,
    }
    this.showHide = this.showHide.bind(this)
  }

  tick() {
    this.setState({
      count: this.state.count + 1,
    })
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000)
  }

  showHide = () =>
    this.setState((currentState) => ({ shows: !currentState.shows }))

  render() {
    return (
      <div className='App'>
        <button onClick={this.showHide}>
          <h4>{this.state.shows ? 'Hide' : 'Show'} Profile</h4>
        </button>

        {this.state.shows ? (
          <div className='profile'>
            {this.person.imgSrc}
            <div className='txt'>
              <h3>Name: {this.person.fullName}</h3>
              <h3>Profession: {this.person.profession}</h3>
              <h4>Biography: </h4> <h5>{this.person.bio}</h5>
            </div>
          </div>
        ) : null}

        <div className='timer'>
          <h2>You've been here for {this.state.count} seconds !</h2>
        </div>
      </div>
    )
  }
}

export default App
