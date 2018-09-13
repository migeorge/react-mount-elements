import kebabToCamel from './kebabToCamel'

interface IPropsMap {
  [key: string]: string
}

export default function DOMElementDataProps (el: HTMLElement | null): IPropsMap {
  const props: IPropsMap = {}

  if (el) {
    for (const attrName in el.attributes) {
      if (el.attributes.hasOwnProperty(attrName)) {
        const attr = el.attributes[attrName]

        if (attr.name.indexOf('data-props') === 0) {
          const name = kebabToCamel(attr.name.replace('data-props-', ''))
          props[name] = attr.value
        }
      }
    }
  }

  return props
}
