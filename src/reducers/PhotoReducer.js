import * as ActionTypes from '../constants/actionTypes';
import initialState from './initialState';

export default function photos(state = initialState.photos, action) {
    switch (action.type) {
        case ActionTypes.LOAD_PHOTO_SUCCESS:
            return action.photos;

        default:
            return state;
    }
}