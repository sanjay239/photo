
import Constants from "../constants/constant";
import * as ActionTypes from "../constants/actionTypes";
import { beginAjaxCall, ajaxCallError } from "./ajaxStatusActions";
import HttpModel from "../models/HttpModel";
import axios from "axios";
export function loadPhotosSuccess(photos) {
  return { type: ActionTypes.LOAD_PHOTO_SUCCESS, photos };
}

export function loadPhotos(photo) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
 
    axios
      .get("http://jsonplaceholder.typicode.com/photos")
      .then(function(response) {
        dispatch(loadPhotosSuccess(response.data));
        //dispatch(endAjaxCall());
        return response;
      })
      .catch(function(error) {
        dispatch(ajaxCallError(error));
        throw error;
      })
      .then(function() {
        // always executed
      });
  };
}
