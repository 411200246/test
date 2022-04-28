import {initializeApp} from "firebase/app";

export const singIn= async (email,password)=>{
try{

    const result= await initializeApp.auth().singInWithEmailAndPassWord(email,password);
    return {};

}catch(e){
    throw new Error(e)
}
}

    
