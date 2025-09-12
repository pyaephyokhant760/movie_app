import { ActionType } from "../action_types"

export const fetchMovie = (movies) => {
    return {
        type : ActionType.FETCH_MOVIES,
        payload : movies
    }
}

export const selectedMovie = (movie) => {
    return {
        type : ActionType.SELECT_MOVIE,
        payload : movie
    }
}
export const removeSelectedMovie = () => {
    return {
        type : ActionType.REMOVE_SELECTED_MOVIE,
    }
}