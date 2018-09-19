import * as React from 'react'
import * as ReactDOM from 'react-dom'

import DOMElementDataProps from './lib/DOMElementDataProps'

interface ITargetMap {
  [key: string]: React.ComponentClass
}

/**
 * @method reactMountElements
 * @param targetMap {ITargetMap} An object that maps element ids to the react component that should render there.
 */
export default function reactMountElements (targetMap: ITargetMap) {
  const mount = () => {
    for (const id in targetMap) {
      if (targetMap.hasOwnProperty(id)) {
        const el = document.getElementById(id)
        const props = DOMElementDataProps(el)
        const Component = React.createElement(targetMap[id], props)

        if (el) {
          ReactDOM.render(Component, el)
        }
      }
    }
  }

  document.addEventListener('DOMContentLoaded', mount)
  document.addEventListener('turbolinks:load', mount)
}
