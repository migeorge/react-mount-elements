export default function kebabToCamel (str: string): string {
  let parts: Array<string> = []
  const res: Array<string> = []

  if (str.indexOf('-') > -1) {
    parts = str.split('-')

    parts.forEach((current, index) => {
      const chars = current.split('')
      chars[0] = index === 0 ? chars[0].toLowerCase() : chars[0].toUpperCase()
      res.push(chars.join(''))
    })

    return res.join('')
  } else {
    return str
  }
}
