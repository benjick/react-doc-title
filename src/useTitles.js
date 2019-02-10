import { useState, useEffect } from 'react'
import createContainer from 'constate'
import uniqid from 'uniqid'

const joinTitles = (titles, divider) => titles
  .map(item => item.string)
  .filter(item => item)
  .join(divider)

const useTitles = ({
  title = '', divider = ' - ', append = false
}) => {
  const [titles, setTitles] = useState([])
  function unregister(id) {
    const index = titles.findIndex(item => item.id === id)
    if (index > -1) {
      titles.splice(index, 1)
      setTitles(titles)
    }
  }
  function register(object) {
    const _titles = titles.slice()
    object.id = object.id ? object.id : uniqid()
    console.log(titles, object)
    _titles.push(object)
    setTitles(_titles)
    return () => {
      unregister(object.id)
    }
  }
  let _titles = [{string: title}, ...titles]
  if (!append) {
    _titles.reverse()
  }
  const newTitle = joinTitles(_titles, divider)
  useEffect(() => {
    const oldTitle = document.title
    return () => {
      document.title = oldTitle
    }
  }, [])
  useEffect(() => {
    document.title = newTitle
  }, [newTitle])
  return { register }
}

const {Provider, Context} = createContainer(useTitles)

export {Provider, Context}
