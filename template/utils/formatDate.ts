// credits: https://themeforest.net/item/qurno-minimal-blog-nextjs-template/36625633

export const formatDate = (date) => {
  const dateCsCZFormatter = new Intl.DateTimeFormat('cs-CZ', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return `${dateCsCZFormatter.format(new Date(date))}`
}
