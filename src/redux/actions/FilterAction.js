import { togol_Brand } from "../actionTypes/actionTypes"

export const Add_filter = (name)=>{
    return {
        type: togol_Brand ,
        payload: name
    }
}
export const Add_stoke = ()=>{
    return {
        type: "toggle_stock" ,
    }
}