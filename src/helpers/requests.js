const apiKey = 'a793e47f5d4bfd3345fc5e775e0846c4'
const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?'

async function getData(data = {}) {
    const response = await fetch(apiUrl + new URLSearchParams({...data,appid:apiKey}));
    return await response.json();
}

export const FETCH_CITY_WEATHER = (q) => getData({ q })
