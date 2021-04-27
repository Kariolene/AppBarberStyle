import {create} from 'apisauce';

const api2 = create({
baseURL: 'https://607a5bfdbd56a60017ba29de.mockapi.io/api',
});

api2.addResponseTransform(response =>{
    if (!response.ok) throw response;
});

export default api2;