import { useState, useEffect } from 'react'
import createContainer from 'constate'
import uniqid from 'uniqid'

const joinTitles = (titles, divider) =>
  titles
    .map((item) => item.string)
    .filter((item) => item)
    .join(divider)

const useTitles = ({ title = '', divider = ' - ', append = false }) => {
  const [titles, setTitles] = useState([])

  useEffect(() => {
    const oldTitle = document.title
    return () => {
      document.title = oldTitle
    }
  }, [])

  useEffect(() => {
    let allTitles = [{ string: title }, ...titles]
    if (!append) {
      allTitles.reverse()
    }
    document.title = joinTitles(allTitles, divider)
  }, [titles, divider])

  function register(object) {
    object.id = object.id ? object.id : uniqid()
    setTitles((state) => [...state, object])
    return function unregister() {
      const id = object.id
      setTitles((state) => state.filter((item) => item.id !== id))
    }
  }
  return { register, titles }
}

const { Provider, Context } = createContainer(useTitles)

export { Provider, Context }
