
// import { HANDLE_MANUAL_REGISTRY,MANUAL_REGISTRY_SUCCESS,MANUAL_REGISTERY_FAILURE } from "./types"
// import { Alert } from "react-native";
// import {Platform} from 'react-native'
// import {auth} from '../../config';


// const initialState={
//    email:null,
//    name:null,
//    password:null,
//    token:null,
//    error:null,
//    completed:false
// }

// //helper functions

// async function apply_start_registry (state){

//     await  auth
//       .createUserWithEmailAndPassword(state.email,state.password)
//       .then(()=>{  onAuthStateChanged(user=>
//                                       {
//                                       if(user){
//                                      console.log(user) 
//                                       }
//                                     }
//                               )        })
//       .catch((error)=>{Alert.alert(error)})
     
//       return{...state}
// }

 


// //Reducer

// function manual_registry(state=initialState,action){
   
//     switch (action.type) {
//         case HANDLE_MANUAL_REGISTRY:
//             return apply_start_registry(action.payload)
//         case MANUAL_REGISTRY_SUCCESS:
//             return{...state,completed:false}  
//         case MANUAL_REGISTERY_FAILURE:
//             return{...state,error:action.payload,completed:false}        
//         default:
//             return state
//     }
// }


// export default manual_registry



   