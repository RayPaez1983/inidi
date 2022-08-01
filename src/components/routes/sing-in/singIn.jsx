import {useEffect} from 'react'
import { getRedirectResult } from '@firebase/auth';
import {
  singInWithGooglePopup,
  createUserDocumentAuth,
 
} from "../../../utils/firebase/firebase.utils";
import {  Link } from "react-router-dom";
import "./singIn.scss";

const SingIn = () => {

//   useEffect( () => {
    

//   async const res = await getRedirectResult(auth);
//   if(res){ const userDecRef = await createUserDocumentAuth(res.user)}
// console.log(res, 'my new response');
//   }, [])
  
   const logInWithGoogle = async () => {
      console.log('click');
    const { user } = await singInWithGooglePopup();
    const userDocRef = await createUserDocumentAuth(user);
    console.log(user, "my response", userDocRef);
  };



  return (
    <div>
      <h1>Welcome to Indii</h1>

        
        <div className="container-singIn_buttons">
        <button><Link to="/sing-up">Sing Up</Link></button>
        <button><Link to="/sing-in">Sign In</Link></button>
        <button onClick={logInWithGoogle}>Sing In With Google</button>
        
        </div>
    
      
     
    </div>
  );
};

export default SingIn;
