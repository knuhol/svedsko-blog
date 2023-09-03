// credits: https://themeforest.net/item/qurno-minimal-blog-nextjs-template/36625633

export const truncateString = (str, max) => {
  if (str === undefined) {
    return ''
  }

  return str.length < max ? str : `${str.substr(0, str.substr(0, max - 3).lastIndexOf(' '))}...`
}
