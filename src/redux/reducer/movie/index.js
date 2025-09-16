import { ActionType } from "../../action/action_types"

const initialState = {
    movies: [],
    movie: {}
}

export const movieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionType.FETCH_MOVIES:
            return { ...state, movies: payload }
        case ActionType.SELECT_MOVIE:
            return { ...state, movie: payload }
        
        default:
            return state
    }
}