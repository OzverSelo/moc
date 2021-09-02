export const USER='[USER]'
export const USER_LOGIN=`${USER} Set user as logged in` 
export const USER_LOGOUT=`${USER} Set user as log out` 


export const userLogin=()=>({
  type:USER_LOGIN,
  
})

export const userLogut=()=>({
  type:USER_LOGOUT,
  payload:{}
})

const UserActionCreators={
  userLogin,userLogut
}

export {UserActionCreators}