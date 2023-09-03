const slugify = (string) =>
  string
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/ /g, '-')
    .toLowerCase()

export { slugify }
