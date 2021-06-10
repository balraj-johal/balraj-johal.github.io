import qs from 'qs';

//import declared action types
import {
    SELECT_ITEM
} from "./types";

export const selectItem = (id) => dispatch => {
    dispatch({
        type: SELECT_ITEM,
        payload: id
    });
}