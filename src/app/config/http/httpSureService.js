import axios from 'axios';

const getLocalStorageJson  = () => {
   
   const hasData = localStorage.getItem('userData');

   if(hasData){
      return JSON.parse(hasData)
   }

   return hasData
}

let instanceSure = axios.create({
   baseURL: 'http://localhost:8080/api/',
   timeout: 2000,
 });

 instanceSure.interceptors.request.use((config) => {
   
   const security = getLocalStorageJson();

   if (security) {
      config.headers.Authorization = 'Bearer ' + security.token;
   }

   return config;
},
   error => {
       return Promise.reject(error);
   }
);


const httpSureService = {
   get: (url, body) => instanceSure.get(url, body),
   post: (url, body) => instanceSure.post(url,body),
   put: (url, body) => instanceSure.put(url,body),
   delete: (url, body) => instanceSure.delete(url, body)
};

export default httpSureService;
