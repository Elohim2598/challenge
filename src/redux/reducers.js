import { HANDLE_CLICK, HANDLE_TOGGLE } from './actionTypes'
import { HANDLE_RADIUS_CHANGER } from './actionTypes'
import { CENTER_POINT } from './actionTypes'


const initialState = {toggleSwitchState: false, centerPoint: [-122.143936, 37.468319], drawerWidth: 210, handleRadiusState: 1
}

export const mapReducer = function (state=initialState, action){
    switch (action.type){
        case HANDLE_TOGGLE:
            return {...state, toggleSwitchState: !state.toggleSwitchState}
        case HANDLE_RADIUS_CHANGER:
            return {...state, handleRadiusState: (action.payload)}
        case CENTER_POINT:
            return {...state, centerPoint: [action.payload[0], action.payload[1]]}
        case HANDLE_CLICK:
            return {...state, handleClickState: (action.payload)}
        default:
            return state
        
    }
}
