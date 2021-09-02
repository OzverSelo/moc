import auth from '@react-native-firebase/auth';
import React, { useState } from 'react'
import { Text } from 'react-native-paper'

export function createUser(email,password)
{ 
    const [error,setError]=useState('')
    auth()
    .createUserWithEmailAndPassword(email,password)
    .then((userObject)=>console.log(userObject.user))
    .catch((error)=>{
                        switch (error.code) 
                        {
                            case 'auth/invalid-email':
                            case 'auth/email-already-in-use':
                            setError(error.message)
                            break;
                        }
 
                    })
                    console.log(error)
       return error             
}

export default createUser