import React, { Component } from 'react'
import { render } from 'react-dom'
import CounterComponent from '../../lib'
import './styles.css'

class Demo extends Component {
  handleClick1 () {
    console.log('stop timer')
  }

  handleClick2 () {
    console.log('resume timer')
  }

  handleClick3 () {
    console.log('reset timer')
  }

  onFinish () {
    console.log('finished')
  }

  render () {
    return (
      <div>
        <h1>Demo with examples of the React Counter component</h1>
        <div className="">
          <button onClick={() => this.handleClick1()}>
            Pause timer
          </button>
          <button onClick={() => this.handleClick2()}>
            Resume timer
          </button>
          <button onClick={() => this.handleClick3()}>
            Reset timer
          </button>
          <button>
            Click here to exit
            <CounterComponent
              limit={10}
              style={{ background: 'green' }}
              className="my-class"
              onFinish={() => this.onFinish()}
            />
          </button>

        </div>
      </div>
    )
  }
}

render(<Demo />, document.getElementById('app'))
