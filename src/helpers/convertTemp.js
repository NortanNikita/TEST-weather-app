export default (temp) => {
    return temp ? (temp - 273).toFixed(0) + '°C' : null
}