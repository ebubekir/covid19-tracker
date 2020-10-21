import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate} } = await axios.get(url);
        return  { confirmed, recovered, deaths, lastUpdate };
    } 
    catch (error) {

    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get('https://covid19.mathdro.id/api/daily');
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
        return modifiedData;
            // return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    } catch (error) {
        console.log("Error");
    }
}

export const countries = async () => {
    try {
        
    } catch (error) {
        
    }
}