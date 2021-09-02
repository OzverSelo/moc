import { lightTheme, darkTheme } from "../constants";
import {TOGGLE_THEME_BEGIN,TOGGLE_THEME_SUCCESS,TOGGLE_THEME_FAILURE} from './types'

 

function toggleThemeBegin () {
   return{ type: TOGGLE_THEME_BEGIN}
}

function toggleThemeSuccess   () {
return {    type: TOGGLE_THEME_SUCCESS,}
 
}

function toggleThemeFailure (){
 return  {type: TOGGLE_THEME_FAILURE}
  
}

// export function toggleTheme(themeType) {
//     return dispatch => {
//         dispatch(toggleThemeBegin())

//         switch (themeType) {
//             case "dark":
//                 dispatch(toggleThemeSuccess(darkTheme))
//                 break;
//             case "light":
//                 dispatch(toggleThemeSuccess(lightTheme))
//                 break;
//             default:
//                 dispatch(toggleThemeFailure({ error: "Invalid theme type" }))
//                 break;
//         }
//     }
// }

const themeactionCreator={
    toggleThemeBegin,toggleThemeSuccess,toggleThemeFailure
}

export {themeactionCreator}