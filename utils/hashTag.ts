const hashTag = (tag: string) =>
  [...tag].reduce((result, char) => result + char.charCodeAt(0), 0) % 2

export { hashTag }
