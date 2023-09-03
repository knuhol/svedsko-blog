const hashString = (tag: string) =>
  [...tag].reduce((result, char) => result + char.charCodeAt(0), 0) % 2

export { hashString }
