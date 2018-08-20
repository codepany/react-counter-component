import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Counter = styled.span`
  width: 100px;
`

const NotificationBox = styled.div`
  position: fixed;
  top: 25px;
  right: 25px;
  width: 200px;
  padding: 10px;
  background: #EE0A4E;
  color: #fff;
  font-size: 13px;
  border-radius: 4px;
  -webkit-box-shadow: 0px 0px 8px -2px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 8px -2px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 8px -2px rgba(0,0,0,0.75);
  &:hover {
    opacity: .9;
    cursor: pointer;
  }
`

class CounterComponent extends Component {
  constructor(props) {
    super(props)

    this.timer = 0
    this.state = {
      startTime: new Date(),
      time: 0,
      triggered: false,
      showNotificationTimeToEnd:
        props.showNotificationTimeToEnd ? props.showNotificationTimeToEnd : 5,
      showNotificationBox: false,
      notificationClosed: false
    }
  }

  componentDidMount() {
    let newState = {}
    // Set up timer
    this.timer = setTimeout(() => {
      const elapsedTime = Math.floor((new Date() - new Date(this.state.startTime)) / 1000)
      // Check if notificationBox should appear
      if (elapsedTime + this.state.showNotificationTimeToEnd > this.props.limit &&
        this.props.showNotification) {
        newState.showNotificationBox = true
      }
      // Check if time elapsed
      if (elapsedTime > this.props.limit) {
        // Trigger action
        if (this.state.triggered === false) {
          this.props.onFinish()
        }
        newState.triggered = true
      }
      newState.time = elapsedTime
      // Set state finally:
      this.setState(newState)
      this.componentDidMount()
    }, 1000)
  }

  componentWillUnmount() {
    // Remove timer
    clearTimeout(this.timer)
  }

  // Reset timer
  resetTimer() {
    this.setState({ startTime: new Date(), notificationClosed: false, showNotificationBox: false, triggered: false })
  }

  render() {
    let leftTime = this.props.limit - this.state.time
    if (leftTime < 0) leftTime = 0
    return (
      <Counter
        className={this.props.className}
        style={this.props.style}>
        {this.props.showCounter && String(leftTime)}
        { this.state.showNotificationBox &&
          !this.state.triggered &&
          !this.state.notificationClosed &&
          <NotificationBox
            onClick={() => this.setState({ showNotificationBox: false, notificationClosed: true })}
          >
            {this.props.notificationText}
          </NotificationBox>

        }
      </Counter>
    )
  }
}

CounterComponent.propTypes = {
  className: PropTypes.string,
  limit: PropTypes.number,
  onFinish: PropTypes.func,
  notificationText: PropTypes.any,
  showCounter: PropTypes.bool,
  showNotification: PropTypes.bool,
  showNotificationTimeToEnd: PropTypes.number,
  style: PropTypes.object
}

export default CounterComponent
