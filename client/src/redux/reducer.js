
import { DETAILS_USERS, ERROR, FETCH_USERS, LOADING } from "./actionType"


const initState = {
    loading: false,
    error: false,
    totalPages: 0,
    addedUsers: [],
    users: []
}

export const Reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case LOADING: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }

        case ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }
        case FETCH_USERS:
            return {
                ...state,
                loading: false,
                error: false,
                addedUsers: payload
            }

        case DETAILS_USERS:
            return {
                ...state,
                loading: false,
                error: false,
                totalPages: payload.users.length,
                users: payload
            }

        

        default: return state
    }
}