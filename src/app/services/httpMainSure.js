import httpSureService from '../config/http/httpSureService';

export default class HttpMainSure {

 /**
   * metodo http post
   * @param {{ }} objReq
   * @param {string} path
   * @returns {Promise<{ data:{}, status:number }>}
  */
   static post = (path ="" , objReq) => {
      return new Promise((resolve) => {
        httpSureService.post(path, objReq).then(response => {
              resolve(response);
          })
          .catch(error => {
              resolve(error.response);
          });
      });
   };

}