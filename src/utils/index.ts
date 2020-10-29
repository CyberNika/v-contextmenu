type ClassNames =
  | string
  | (string | undefined | null)[]
  | { [key: string]: boolean }

export const classnames = (value: ClassNames) => {
  if (typeof value === 'string') return value.trim()

  if (Array.isArray(value)) {
    return value
      .filter((item) => Boolean(item?.trim()))
      .map((item) => item?.trim())
      .join(' ')
  }

  return Object.keys(value).reduce((acc, key, index) => {
    if (key && value[key]) {
      acc += index ? ` ${key}` : key
    }

    return acc
  }, '')
}
