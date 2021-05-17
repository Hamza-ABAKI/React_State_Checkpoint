import './App.css'
import React from 'react'
import imgSrc from '../src/elon-musk.jpeg'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      person: {
        imgSrc: imgSrc,
        fullName: 'Elon MUSK',
        profession: 'CEO of Tesla Motors',
        bio: 'Elon Musk is a South African-born American entrepreneur and businessman who founded X.com in 1999 (which later became PayPal), SpaceX in 2002 and Tesla Motors in 2003. ... Musk made headlines in May 2012, when SpaceX launched a rocket that would send the first commercial vehicle to the International Space Station.',
      },
      shows: false,
      count: 0,
    }
    this.showHide = this.showHide.bind(this)
  }

  tick = () =>
    this.setState({
      count: this.state.count + 1,
    })

  componentDidMount = () => (this.timer = setInterval(() => this.tick(), 1000))

  showHide() {
    this.setState((currentState) => ({ shows: !currentState.shows }))
    // console.log(this)
  }

  render() {
    let seconds = this.state.count
    function time(seconds) {
      const Hours = `0${Math.floor(seconds / (60 * 60))}`.slice(-2)
      const Minutes = `0${Math.floor((seconds / 60) % 60)}`.slice(-2)
      const Seconds = `0${Math.floor(seconds % 60)}`.slice(-2)
      return `${Hours}:${Minutes}:${Seconds}`
    }

    return (
      <div className='App'>
        {/* showHide Button */}
        <button onClick={this.showHide}>
          <h4>{this.state.shows ? 'Hide' : 'Show'} Profile</h4>
        </button>
        {/* Profile content */}
        {this.state.shows ? (
          <div className='profile'>
            <img src={this.state.person.imgSrc} alt='' />,
            <div className='txt'>
              <h3>Name: {this.state.person.fullName}</h3>
              <h3>Profession: {this.state.person.profession}</h3>
              <h4>Biography: </h4> <h5>{this.state.person.bio}</h5>
            </div>
          </div>
        ) : null}
        {/* Timer */}
        <div className='timer'>
          <h2>You've been here for {time(seconds)}</h2>
        </div>
      </div>
    )
  }
}

export default App
