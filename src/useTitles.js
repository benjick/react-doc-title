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
  let _titles = [{string: title}, ...titles]
  if (!append) {
    _titles.reverse()
  }
  useEffect(() => {
    const oldTitle = document.title
    return () => {
      document.title = oldTitle
    }
  }, [])
  useEffect(() => {
    const newTitle = joinTitles(_titles, divider)
    document.title = newTitle
  }, [titles])
  function unregister(id) {
    const index = titles.findIndex(item => item.id === id)
    if (index > -1) {
      titles.splice(index, 1)
      setTitles(titles)
    }
  }
  function register(object) {
    object.id = object.id ? object.id : uniqid()
    setTitles(_titles => [..._titles, object])
    return () => {
      unregister(object.id)
    }
  }
  return { register }
}

const {Provider, Context} = createContainer(useTitles)

export {Provider, Context}
