export default (timestamp) => {
    return new Date(timestamp * 1000).toDateString()
}