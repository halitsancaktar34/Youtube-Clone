import axios from 'axios';

const options = {
    params: {
        geo: 'TR',
        lang: 'tr'
    },
    headers: {
        'X-RapidAPI-Key': '53bbfd6a45mshba00130ed68b464p12d86djsn5d5b28fac991',
        'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
    }
};

//   BaseURL
axios.defaults.baseURL = 'https://yt-api.p.rapidapi.com';

export const getData = async (path) => {
    try {
        return await axios.get(path, options)
    } catch (err) {
        console.log("Verileri çekerken hata oluştu.")
    }
}