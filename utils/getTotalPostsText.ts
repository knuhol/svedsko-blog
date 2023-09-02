const getTotalPostsText = (numberOfPosts) => {
    if (numberOfPosts === 1) {
        return `Celkem 1 článek`
    }

    if (numberOfPosts > 1 && numberOfPosts < 5) {
        return `Celkem ${numberOfPosts} články`
    }

    return `Celkem ${numberOfPosts} článků`
}

export { getTotalPostsText }
