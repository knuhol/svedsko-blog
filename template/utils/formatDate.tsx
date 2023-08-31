export const formatDate = (a) => {
  const dateCsCZFormatter = new Intl.DateTimeFormat('cs-CZ', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
  const timeCsCZFormatter = new Intl.DateTimeFormat('cs-CZ', {
    timeStyle: 'short'
  })
  const date = new Date(a)
  return `${dateCsCZFormatter.format(date)} (${timeCsCZFormatter.format(date)})`
}
