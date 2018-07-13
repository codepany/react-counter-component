import React, { Component } from 'react'
import styled from 'styled-components'

const Counter = styled.span`
  color: red;
  background: blue;
  width: 100px;
`

class CounterComponent extends Component {
  constructor (props) {
    super(props)

    this.timer = 0
    this.state = {
      visible: props.visible || false,
      startTime: new Date(),
      time: 0,
      triggered: false
    }
  }

  componentDidMount () {
    // Set up timer
    this.timer = setTimeout(() => {
      const elapsedTime = Math.floor((new Date() - new Date(this.state.startTime)) / 1000)
      if (elapsedTime > this.props.limit) {
        // Trigger action
        if (this.state.triggered === false) {
          this.props.onFinish()
        }
        this.setState({
          triggered: true
        })
      }
      this.setState({
        time: elapsedTime
      })
      this.componentDidMount()
    }, 1000)
  }

  componentWillUnmount () {
    // Remove timer
    clearTimeout(this.timer)
  }

  handleClick = () => {
    console.log('Click!')
  }

  render () {
    // const { color, children } = this.props;
    let leftTime = this.props.limit - this.state.time
    if (leftTime < 0) {
      leftTime = 0
    }
    return (
      <Counter
        onClick={this.handleClick}
        className={this.props.className}
        style={this.props.style}>
        {String(leftTime)}
      </Counter>
    )
  }
}

export default CounterComponent
