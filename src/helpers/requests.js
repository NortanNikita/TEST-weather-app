const apiKey = 'a793e47f5d4bfd3345fc5e775e0846c4'
const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?'
const apiUrlWeek = 'https://api.openweathermap.org/data/2.5/onecall?exclude=hourly,minutely,alerts&'

async function getData(period = 'day',data = {}) {
    const response = await fetch((period == 'week' ? apiUrlWeek : apiUrl) + new URLSearchParams({...data,appid:apiKey}));
    if(response.status == 404 || response.status == 400) {
         return response.json().then(json => {
             throw new Error(json.message)
         });
    }
    return response.json();
}

export const FETCH_CITY_WEATHER = (q) => getData('day', { q })
export const FETCH_CITY_WEATHER_WEEK = (data) => getData('week',{...data})