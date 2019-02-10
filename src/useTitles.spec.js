import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import {Provider, Title, useTitle} from './'

function useBoolean(initialValue) {
  if (typeof initialValue !== 'boolean') {
    throw new TypeError('I need a boolean')
  }
  const [value, setValue] = useState(initialValue)
  const toggle = () => setValue(!value)
  return [value, toggle]
}

function MyComponent() {
  useTitle('test3')
  return <p>😎</p>
}

let container

beforeEach(() => {
  document.title = 'Hooks are cool'
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

function TestComponent() {
  const [show, toggleShow] = useBoolean(true)
  const [provider, toggleProvider] = useBoolean(true)

  if (!provider) {
    return <p>What</p>
  }

  return (
    <div>
      <Provider title='react-title'>
        <Title string='test' />
        <Title string='test2' />
        <button id='toggle' type='button' onClick={toggleShow}>Toggle</button>
        <button id='provider' type='button' onClick={toggleProvider}>Toggle</button>
        {show && <MyComponent />}
      </Provider>
    </div>
  )
}

it('can change title', () => {
  act(() => {
    ReactDOM.render(
      <TestComponent />
      , container)
  })

  const toggle = container.querySelector('button#toggle')
  const toggleP = container.querySelector('button#provider')
  expect(document.title).toBe('test3 - test2 - test - react-title')
  act(() => {
    toggle.dispatchEvent(new MouseEvent('click', {bubbles: true}))
  })
  expect(document.title).toBe('test2 - test - react-title')
  act(() => {
    toggleP.dispatchEvent(new MouseEvent('click', {bubbles: true}))
  })
  expect(document.title).toBe('Hooks are cool')
})

it('can change title', () => {
  act(() => {
    ReactDOM.render(
      <Provider title='react-title' append divider=' > '>
        <Title string='test' />
      </Provider>
      , container)
  })
  expect(document.title).toBe('react-title > test')
})
