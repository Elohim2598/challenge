import { HANDLE_CLICK, HANDLE_TOGGLE } from './actionTypes'
import { HANDLE_RADIUS_CHANGER } from './actionTypes'
import { CENTER_POINT } from './actionTypes'

export const handleToggle =()=>{
    return {type: HANDLE_TOGGLE}
}

export const handleRadiusChanger=(payload)=>{
    return {type: HANDLE_RADIUS_CHANGER,
    payload
}
}

export const handleCenterPoint=(payload)=>{
    return {
        type: CENTER_POINT,
        payload
    }
}

export const handleClick= (payload)=>{
    return {
        type: HANDLE_CLICK,
        payload
    }
}