import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import CounterComponent from '../../src/lib'

configure({ adapter: new Adapter() })

describe('<CounterComponent />', () => {
  describe('render()', () => {
    let wrapper
    let component

    beforeEach(() => {
      wrapper = shallow(<CounterComponent
        limit={120}
        className='my-class'
        showCounter
        notificationText={'Hurry up!'}
        showNotification
        showNotificationTimeToEnd={5}
      />)
      component = wrapper.dive()
    })

    it('renders the counter if flag is set', () => {
      expect(component.find('span').length).toEqual(1)
    })
  })
})
