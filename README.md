# React Counter component

React counter component countdowns the time and performs the action passed in the props at the end.

## Features

- set the time to countdown
- set whether notification should appear and when
- reset timer manually
- pass own style and classes

## Usage

```
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
 ```

 - **ref** - reference to the component. It allows to trigger *resetTimer*,
 - **limit** - the time to countdown in seconds,
 - **style** - counter style,
 - **className** - counter class,
 - **onFinish** - action triggered when counter countdowns to 0,
 - **showCounter** - display the counter time,
 - **notificationText** - text in notification box,
 - **showNotification** - display the notification box,
 - **showNotificationTimeToEnd** - the remaining time when notificatino should be shown.

# Development

You can clone / download the React Counter component and adjust to your needs. Use following commands to get started developing:

- ```yarn dev``` - start server
- ```yarn docs:prod``` - generate documentation
- ```yarn eslint``` - Eslint
- ```yarn test``` - run tests

The React Counter Component was created based on the [React component boilerplate](https://github.com/markusenglund/react-npm-component-starter for more details).
