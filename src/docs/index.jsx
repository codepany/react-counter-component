import React, { Component } from 'react'
import { render } from 'react-dom'
import CounterComponent from '../../lib'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { atomDark } from 'react-syntax-highlighter/styles/prism'
import './styles.css'
import './localStyles.css'

class Demo extends Component {
  resetTimer1() {
    if (this.counterCmp) {
      this.counterCmp.resetTimer()
    }
  }

  onFinish1() {
    alert('[Counter - Example 1] The end!')
  }

  handleAnyClick() {
    if (this.counterCmp2) {
      this.counterCmp2.resetTimer()
    }
  }

  render() {
    return (
      <div className='demo-examples-page' onClick={() => this.handleAnyClick()}>
        <header className='page-header'>
          <h1>REACT COUNTER COMPONENT</h1>
          <p className='description'>React counter component countdowns the time and performs the action passed in a props.</p>
          <section>
            <p>Features:</p>
            <ul>
              <li>sets the time value,</li>
              <li>control a notification about running up time,</li>
              <li>reset timer,</li>
              <li>pass own style and classes.</li>
            </ul>
          </section>
          <div className='links text-center'>
            <a href='https://github.com/codepany/react-counter-component.git' className='btn btn-github'>Open GitHub</a>
          </div>
        </header>

        <section className='section-1'>
          <header>
            <h2>Example 1</h2>
            <p className='description'>
              Timer counts down and displays the notification 5 seconds before end.
            </p>
          </header>

          <div className='flex-row'>
            <div className='flex-col text-center buttons-col'>
              <button
                className='btn btn-blue'
                onClick={() => this.resetTimer1()}>
                Reset timer
              </button>
            </div>

            <div className='flex-col text-center'>
              <CounterComponent
                ref={counter => { this.counterCmp = counter }}
                limit={10}
                style={{
                  fontSize: '72px',
                  fontWeight: 'bold'
                }}
                className='my-class'
                onFinish={() => this.onFinish1()}
                showCounter
                notificationText={'Hurry up!'}
                showNotification
                showNotificationTimeToEnd={5}
              />
              <span className='seconds-label'>seconds</span>
            </div>

          </div>
        </section>

        <section className='section-1'>
          <header>
            <h2>Example 2</h2>
            <p className='description'>
              The counter can be used to trigger an action in case of inactivity on the page.
              Just click anywhere on the page to reset the counter.
            </p>
          </header>

          <div className='flex-row'>
            <div className='flex-col text-center buttons-col'>
              <label><b>Click anywhere!</b></label>
            </div>

            <div className='flex-col text-center'>
              <CounterComponent
                ref={counter2 => { this.counterCmp2 = counter2 }}
                limit={120}
                style={{
                  fontSize: '72px',
                  fontWeight: 'bold'
                }}
                className='my-class'
                onFinish={() => this.onFinish1()}
                showCounter
                notificationText={'Hurry up!'}
                showNotification
                showNotificationTimeToEnd={5}
              />
              <span className='seconds-label'>seconds</span>
            </div>

          </div>
        </section>

        <section className='section-1'>
          <header>
            <h2>Usage</h2>
            <p><b>CounterComponent</b></p>
            <ul className='styled-code'>
              <li><code>ref</code> - reference to the component allows to trigger <b>resetTimer</b> [line 3]</li>
              <li><code>limit</code> - time to countdown in seconds</li>
              <li><code>style</code> - counter style</li>
              <li><code>className</code> - counter class</li>
              <li><code>onFinish</code> - action triggered when counter countdowns to 0</li>
              <li><code>showCounter</code> - display the remaining time</li>
              <li><code>notificationText</code> - text to display in notification box</li>
              <li><code>showNotification</code> - show the notification</li>
              <li><code>showNotificationTimeToEnd</code> - the remaining time when notificatino should be shown</li>
            </ul>
          </header>
          <SyntaxHighlighter language='jsx' style={atomDark} showLineNumbers>
            {
              'resetTimer() {\n' +
              '  if(this.counterCmp) {\n' +
              '    this.counterCmp.resetTimer()\n' +
              '  }\n' +
              '}\n' +
              '\n' +
              'handleAnyClick() {\n' +
              '  if(this.counterCmp) {\n' +
              '    this.counterCmp.resetTimer()\n' +
              '  }\n' +
              '}\n' +
              '\n' +
              '(...)\n' +
              '\n' +
              '<div className=\'demo-examples-page\' onClick={() => this.handleAnyClick()}>\n' +
              '\n' +
              ' (...)\n' +
              '\n' +
              ' <CounterComponent\n' +
              '  ref={counter => { this.counterCmp = counter }}\n' +
              '  limit={120}\n' +
              '  style={{\n' +
              '    fontSize: \'72px\',\n' +
              '    fontWeight: \'bold\'\n' +
              '   }}\n' +
              '   className=\'my-class\'\n' +
              '   onFinish={() => this.onFinish()}\n' +
              '   showCounter\n' +
              '   notificationText={\'Hurry up!\'}\n' +
              '   showNotification={true}\n' +
              '   showNotificationTimeToEnd={5}\n' +
              ' />' +
              '\n' +
              '(...)\n' +
              '\n' +
              '</div>'
            }
          </SyntaxHighlighter>
        </section>

      </div>
    )
  }
}

render(<Demo />, document.getElementById('app'))
