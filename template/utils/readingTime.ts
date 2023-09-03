// credits: https://themeforest.net/item/qurno-minimal-blog-nextjs-template/36625633

export const readingTime = (content) => {
  const WPS = 275 / 60

  let images = 0
  const regex = /\w/

  let words = content.split(' ').filter((word) => {
    if (word.includes('<img')) {
      images += 1
    }
    return regex.test(word)
  }).length

  let imageAdjust = images * 4
  let imageSecs = 0
  let imageFactor = 12

  while (images) {
    imageSecs += imageFactor
    if (imageFactor > 3) {
      imageFactor -= 1
    }
    images -= 1
  }

  const minutes = Math.ceil(((words - imageAdjust) / WPS + imageSecs) / 60)

  if (minutes === 1) {
    return `${minutes} minutu`
  }

  if (minutes > 1 && minutes < 5) {
    return `${minutes} minuty`
  }

  return `${minutes} minut`
}
