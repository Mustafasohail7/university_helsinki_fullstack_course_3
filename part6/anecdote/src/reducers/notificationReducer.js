import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
    name: 'notification',
    initialState: 'This is test notification',
    reducers: {
        changeText(state,action){
            return action.payload
        },
        removeText(state,action){
            return ''
        }
    }
})

export const { changeText,removeText } = notificationSlice.actions
export default notificationSlice.reducer