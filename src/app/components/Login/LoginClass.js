import HttpMainPublic from '../../services/httpMainPublic';

import { user } from '../../context/userSlice';

 class LoginClass {

   /**
    * autenticar
    * @param {{ identification:string }} objReq
     replace?: boolean;
    * * @param {(to: string, options?: {replace:boolean, state:any}) => void} navigate
    * @returns {Promise<{ data:{token:string}, status:number }>}
   */
    static authenticate = async (objReq, navigate, dispatch) => {
       
       const response = await HttpMainPublic.post("/login", objReq);
 
         if(response.status === 200){
       
          localStorage.setItem("userData", JSON.stringify(response.data));
 
          dispatch(user({ user: response.data, logout: true }))

          navigate("/home", { replace:true })
       
       } 
      
    };
 
  
 
 }
 

 export default LoginClass;