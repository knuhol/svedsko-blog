const getNumberOfPostsText = (numberOfPosts) => {
  if (numberOfPosts === 1) {
    return 'publikovaný článek'
  }

  if (numberOfPosts > 1 && numberOfPosts < 5) {
    return 'publikované články'
  }

  return 'publikovaných článků'
}

export { getNumberOfPostsText }
