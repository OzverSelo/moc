import { HANDLE_MANUAL_REGISTRY,MANUAL_REGISTRY_SUCCESS,MANUAL_REGISTERY_FAILURE, MANUAL_REGISTRY_FAILURE } from "./types"

 


function start_registry(payload){
    return{
        type:HANDLE_MANUAL_REGISTRY,
        payload
    }
}

function manual_registry_failure(){
    return{
        type:MANUAL_REGISTRY_FAILURE
    }
}

function manual_registry_success(){
    return{
        type:MANUAL_REGISTRY_SUCCESS,
        
    }
}

const registryactionCreators={
   start_registry,manual_registry_failure,manual_registry_success
}

export {registryactionCreators}