export const getLocalStorageJson  = () => {
   
   const hasData = localStorage.getItem('userData');

   if(hasData){
      return JSON.parse(hasData)
   }

   return hasData
}