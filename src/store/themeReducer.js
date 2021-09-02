import {TOGGLE_THEME_BEGIN,TOGGLE_THEME_SUCCESS,TOGGLE_THEME_FAILURE} from './types'
import { selectedTheme } from "../constants";
import { lightTheme, darkTheme } from "../constants";

const initialState = {
    appTheme: selectedTheme,
    error: null
}

function beginTheme(state){
    return{
        ...state,
        error: null
    }
}

//  function toggleTheme(themeType) {
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

// function reducer(state=initialState,action){
//     switch (action.type) {
//         case START_TIMER:
//             return applyStartTimer(state)
//         case RESTART_TIMER:
//             return applyRestartTimer(state)
//         case ADD_SECOND:
//             return applyAddSecond(state)
//         default:
//             return state
//     }
// }


//Reducer

function themeReducer (state = initialState, action)  {
    switch (action.type) {
        case TOGGLE_THEME_BEGIN:
            return beginTheme(state)
        case TOGGLE_THEME_SUCCESS:
            return {
                ...state,
                appTheme: action.payload.selectedTheme
            }
        case TOGGLE_THEME_FAILURE:
            return {
                ...state,
                error: action.payload.error
            }
        default:
            return state
    }
}

export default themeReducer

 
// const themeReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case themeActionTypes.TOGGLE_THEME_BEGIN:
//             return {
//                 ...state,
//                 error: null
//             }
//         case themeActionTypes.TOGGLE_THEME_SUCCESS:
//             return {
//                 ...state,
//                 appTheme: action.payload.selectedTheme
//             }
//         case themeActionTypes.TOGGLE_THEME_FAILURE:
//             return {
//                 ...state,
//                 error: action.payload.error
//             }
//         default:
//             return state
//     }
// }

// export default themeReducer


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