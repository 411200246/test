import {initializeApp} from "firebase/app";
export const singOut= async()=>{

    try{
        await initializeApp.auth.singOut()

    
    }catch(e){
        throw new Error(e)
    }

}
    
