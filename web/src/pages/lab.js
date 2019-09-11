import React, { Component } from 'react'
import styled from 'styled-components'

import '../styles/layout.css'

class lab extends Component {
  state = {
    darkMode: false,
    fontSize: 14
  }

  handleDarkMode = () => {
    this.setState({ darkMode: !this.state.darkMode })
    localStorage.setItem('dark__mode', !this.state.darkMode)
    console.log(localStorage.getItem('dark__mode'))
    }
  biggerFont = () => {
    this.state.fontSize < 24 && this.setState({fontSize: this.state.fontSize + 2})
    localStorage.setItem('font__size', this.state.fontSize + 2)
  }
  smallerFont = () => {
    this.state.fontSize > 12 && this.setState({fontSize: this.state.fontSize - 2})
    localStorage.setItem('font__size', this.state.fontSize)
  }

  componentDidMount(){
    localStorage.getItem('dark__mode') &&
      console.log(localStorage.getItem('dark__mode'))
      this.setState({ darkMode: JSON.parse(localStorage.getItem('dark__mode')) })
    localStorage.getItem('font__size') &&
      this.setState({fontSize: parseInt(localStorage.getItem('font__size'))})

  }

  render() {

    const { darkMode, fontSize } = this.state

    const myFont = `${fontSize.toString()}px`

    console.log(myFont)

    const BigDiv = styled.div`
      background-color: ${props => props.mode ? 'black' : 'white'};
      color: ${props => props.mode ? 'white' : 'black'};
      height: 100%;
      padding: 5rem;
    `
    const MyText = styled.p`
      font-size: ${props => props.font};
    `

    const MyTitle = styled.h1`
      margin: 0 !important;
      font-size: 4em;
    `

    return (
      <BigDiv mode={darkMode || undefined}>
        <MyTitle>This is a very big test.</MyTitle>
        <button onClick={(a) => this.handleDarkMode()}>The Darkmode</button>
        <button disabled={this.state.fontSize === 24 ? true : false} onClick={(b) => this.biggerFont()}>Font ++</button>
        <button disabled={this.state.fontSize === 10 ? true : false} onClick={(c) => this.smallerFont()}>Font --</button>
        <MyText font={myFont}>Aliqua deserunt cillum eu sunt consequat voluptate id mollit nostrud qui ipsum ex voluptate consectetur. Sit exercitation occaecat sunt duis minim duis quis do exercitation aliqua anim ad. Nulla amet aute adipisicing dolore qui dolore enim excepteur. Esse officia labore aliquip adipisicing excepteur mollit.</MyText>
        <h2>The Darkmode is {darkMode.toString()}</h2>     
      </BigDiv>
    )
  }
}

export default lab