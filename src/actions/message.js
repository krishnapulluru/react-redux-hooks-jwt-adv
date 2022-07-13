import { SET_MESSAGE, CLEAR_MESSAGE } from "./types";

export const setMessage = (messsage) => ({
    type: SET_MESSAGE,
    payload: messsage
})

export const clearMessage = () => ({
    type: CLEAR_MESSAGE
})