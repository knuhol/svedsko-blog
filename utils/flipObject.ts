const flipObject = (data) =>
  Object.fromEntries(Object.entries(data).map(([key, value]) => [value, key]))

export { flipObject }
