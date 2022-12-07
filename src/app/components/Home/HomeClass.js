import HttpMainSure from '../../services/httpMainSure';

export default class HomeClass {

   /**
    * autenticar
    * @param {{ identification:string }} objReq
     replace?: boolean;
    * * @param {(to: string, options?: {replace:boolean, state:any}) => void} navigate
    * @returns {Promise<{ data:{token:string}, status:number }>}
   */
    static getModuleSecurity = async (setState) => {

       const { userId } = this.getInfoLocalStorageJson();
   
       const response = await HttpMainSure.post("/core/modules", {userId});
 
       if(response.status === 200){
 
          setState(response.data)
       
       } 
      
    };
 

    static getInfoLocalStorageJson = () => {
      
     return JSON.parse( localStorage.getItem("userData") || "" );

    }
  
 
 }
 