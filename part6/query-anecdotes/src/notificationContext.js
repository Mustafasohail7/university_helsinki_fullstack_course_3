import { createContext, useReducer } from "react"

const notificationReducer = (state, action) => {
    switch(action.type){
        case 'SET_NOTIFICATION':
            return action.data
        case 'CLEAR_NOTIFICATION':
            return null
        default:
            return state
    }
}

const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {
    const [notification, notificationDispatch] = useReducer(notificationReducer, null)

    return (
        <NotificationContext.Provider value={{notification, notificationDispatch}}>
            {children}
        </NotificationContext.Provider>
    )
}

export default NotificationContext