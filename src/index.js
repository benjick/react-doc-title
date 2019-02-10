import { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import {Provider, Context} from './useTitles'

export function useTitle(string) {
  const context = useContext(Context)
  useEffect(() => context.register({string}), [])
}

export function Title({string}) {
  useTitle(string)
  return null
}

Title.propTypes = {
  string: PropTypes.string.isRequired
}

export {Provider}
