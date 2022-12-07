import { useState } from 'react';


/**
 * 
 * @param {{ password:string, email:string, amount:string, description:string }} objState 
 * @returns {{state:objState, setState:Function, handleChange:Function}}
 */
export const useForm = ( objState ) => {

   const [ state, setState ] = useState(objState);

   const handleChange = (e) => {

      const { name, value } = e.target;

      setState(prev => ({ ...prev, [name]:value}));

   }

   return { state, setState, handleChange };

}