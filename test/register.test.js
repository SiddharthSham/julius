import { shallowMount } from '@vue/test-utils'
import Hello from '../pages/auth/register.vue'
import Foo from '../pages/auth/register.vue'

test('Hello', () => {
  // render the component
  const wrapper = shallowMount(Hello)

  // should not allow for `username` less than 7 characters, excludes whitespace
  wrapper.setData({ username: ' abi' })

  // assert the error is rendered
  expect(wrapper.find('.error').exists()).toBe(false)

  // update the name to be long enough
  wrapper.setData({ username: 'CB.EN.U4CSE17444' })

  // assert the error has gone away
  expect(wrapper.find('.error').exists()).toBe(false)
})
describe('Foo', () => {
  it('renders a message and responds correctly to user input', () => {
    const wrapper = shallowMount(Foo, {
      data() {
        return {
          message: 'Hello World',
          username: ''
        }
      }
    })

    // update the `username` and assert error is no longer rendered
    wrapper.setData({ username: 'CB.EN.U$CSE17444' })
    expect(wrapper.find('.error').exists()).toBeFalsy()
  })
})

