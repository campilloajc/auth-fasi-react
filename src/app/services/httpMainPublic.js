import httpPublicService from '../config/http/httpPublicService';

 class HttpMainPublic {

 /**
   * metodo http post
   * @param {{ }} objReq
   * @param {string} path
   * @returns {Promise<{ data:{}, status:number }>}
  */
   static post = (path ="" , objReq) => {
      return new Promise((resolve) => {
         httpPublicService.post(path, objReq).then(response => {
              resolve(response);
          })
          .catch(error => {
              resolve(error.response);
          });
      });
   };

}

export default HttpMainPublic;