import {useEffect} from 'react'
import { getRedirectResult } from '@firebase/auth';

import {  Link } from "react-router-dom";
import SingInForm from '../../sign-in/singInForm'
import "./singIn.scss";

const SingIn = () => {

//   useEffect( () => {
    

//   async const res = await getRedirectResult(auth);
//   if(res){ const userDecRef = await createUserDocumentAuth(res.user)}
// console.log(res, 'my new response');
//   }, [])
  
 



  return (
    <div>
      <h1>Welcome to Indii</h1>
      <SingInForm/>
        
        <div className="container-singIn_buttons">
        <button><Link to="/sing-up">Sing Up</Link></button>
        <button><Link to="/sing-in">Sign In</Link></button>
       
        
        </div>
    
      
     
    </div>
  );
};

export default SingIn;
