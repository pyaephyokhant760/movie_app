import { ActionType } from "../../action/action_types"

const initialState = {
    movies: [
        {
            name : "Pyae Phyo Khant",
        }
    ],
    movie: {}
}

export const movieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionType.FETCH_MOVIES:
            return { ...state, movies: payload }
        case ActionType.SELECT_MOVIE:
            return { ...state, movie: payload }
        case ActionType.REMOVE_SELECTED_MOVIE:
            return { ...state, movie: {} }
        default:
            return state
    }
}