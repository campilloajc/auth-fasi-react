import axios from 'axios';

const instanceSure = axios.create({
   baseURL: 'http://localhost:8080/',
   timeout: 2000,
 });

const httpPublicService = {
   get: (url, body) => instanceSure.get(url, body),
   post: (url, body) => instanceSure.post(url,body),
   put: (url, body) => instanceSure.put(url,body),
   delete: (url, body) => instanceSure.delete(url, body)
};

export default httpPublicService;