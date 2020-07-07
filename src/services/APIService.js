import axios from 'axios';

class APIService {
    
    getProducts() { 
        return axios.get('./data.json')
    }

    getUnFilteredData() { 
        return axios.get('./data.json')
    }
}

export default new APIService();