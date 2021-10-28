function truncateName(data) {
    if (data.length > 20) {
        const trunc = data.substring(0, 20) + '...'
        return trunc
        } else return data
}