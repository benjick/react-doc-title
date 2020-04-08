import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import {Provider, Title, useTitle} from './'

const click = new MouseEvent('click', {bubbles: true})

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
      <Provider title='react-doc-title'>
        <Title string='test' />
        <Title string={show ? 'test2-show' : 'test2'} />
        <button id='toggle' type='button' onClick={toggleShow}>Toggle</button>
        <button id='provider' type='button' onClick={toggleProvider}>Toggle</button>
        {show && <MyComponent />}
      </Provider>
    </div>
  )
}

function TestNestingComponent() {
  const [show, toggleShow] = useBoolean(false)

  return (
    <Provider title='react-doc-title'>
      <Title string='test' />
      <Title string='test2' />
      <button id='toggle' type='button' onClick={toggleShow}>Toggle</button>
      {show &&
        <Provider title='bar'>
          <Title string='test' />
        </Provider>}
    </Provider>
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
  expect(document.title).toBe('test3 - test2-show - test - react-doc-title')
  act(() => { toggle.dispatchEvent(click) })
  expect(document.title).toBe('test2 - test - react-doc-title')
  act(() => { toggle.dispatchEvent(click) })
  expect(document.title).toBe('test3 - test2-show - test - react-doc-title')
  act(() => { toggleP.dispatchEvent(click) })
  expect(document.title).toBe('Hooks are cool')
})

it('can use other settings', () => {
  act(() => {
    ReactDOM.render(
      <Provider title='react-doc-title' append divider=' > '>
        <Title string='' />
        <Title string='test' />
      </Provider>
      , container)
  })
  expect(document.title).toBe('react-doc-title > test')
})

it.skip('can fall back to orginal title as base', () => {
  act(() => {
    ReactDOM.render(
      <Provider>
        <Title string='' />
        <Title string='test' />
      </Provider>
      , container)
  })
  expect(document.title).toBe('test - Hooks are cool')
})

it('can handle nesting of Providers', () => {
  act(() => {
    ReactDOM.render(
      <TestNestingComponent />
      , container)
  })
  const toggle = container.querySelector('button#toggle')
  expect(document.title).toBe('test2 - test - react-doc-title')
  act(() => { toggle.dispatchEvent(click) })
  expect(document.title).toBe('test - bar')
  act(() => { toggle.dispatchEvent(click) })
  expect(document.title).toBe('test2 - test - react-doc-title')
})
