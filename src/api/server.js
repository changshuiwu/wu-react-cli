import axios  from 'axios';
  
export default class Server {
    axios(method = 'GET', url = '', params = {}) {
        return new Promise((resolve, reject) => {
            if (typeof params !== 'object') params = {}
            let _options
            _options = {
                method,
                url,
                baseURL: '', 
                timeout: 3000,
                params: null,
                data: null,
                headers: null,
                withCredentials: true,
                ...params
            }
            axios.request(_options).then( (res) => {
                resolve(typeof res.data === 'object' ? res.data :JSON.parse(res.data))
            }, (error) => {
                if (error.response) {
                    reject(error.response.data)
                } else {
                    reject(error)
                }
            })
        })
    }
}