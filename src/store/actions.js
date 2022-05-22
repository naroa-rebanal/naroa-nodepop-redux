import { ADVERTS_LOADED_FAILURE, ADVERTS_LOADED_REQUEST, ADVERTS_LOADED_SUCCESS, ADVERT_CREATED_FAILURE, ADVERT_CREATED_REQUEST, ADVERT_CREATED_SUCCESS, ADVERT_DELETE_FAILURE, ADVERT_DELETE_REQUEST, ADVERT_DELETE_SUCCESS, ADVERT_LOADED_FAILURE, ADVERT_LOADED_REQUEST, ADVERT_LOADED_SUCCESS, AUTH_LOGIN_FAILURE, AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT, TAGS_LOADED, UI_RESET_ERROR } from "./types";
import {getAreAdvertsLoaded, getAdvert} from './selectors';
import { delAdvert } from "../components/adverts/service";


export const authLoginRequest = () => ({
    type: AUTH_LOGIN_REQUEST,
  });
  
  export const authLoginSuccess = () => ({
    type: AUTH_LOGIN_SUCCESS,
  });
  
  export const authLoginFailure = error => ({
    type: AUTH_LOGIN_FAILURE,
    payload: error,
    error: true,
  });



  export const authLogin = credentials => {
    return async function (dispatch, _getState, { api, history }) {
      dispatch(authLoginRequest());
      try {
        await api.auth.login(credentials);
        dispatch(authLoginSuccess());
        const from = history.location.state?.from?.pathname || '/';
        history.replace(from);
      } catch (error) {
        dispatch(authLoginFailure(error));
      }
    };
  }



 export const authLogout = () => ({
     type: AUTH_LOGOUT,
 })


 export const advertsLoadedRequest = () => ({
  type: ADVERTS_LOADED_REQUEST,
});

export const advertsLoadedSuccess = adverts => ({
  type: ADVERTS_LOADED_SUCCESS,
  payload: adverts,
});

export const advertsLoadedFailure = error => ({
  type: ADVERTS_LOADED_FAILURE,
  payload: error,
  error: true,
});


export const advertsLoaded = () => {
  return async function (dispatch, getState, { api }) {
    const advertsLoaded = getAreAdvertsLoaded(getState());
    if (advertsLoaded) return;

    dispatch(advertsLoadedRequest());
    try {
      const adverts = await api.adverts.getLatestAdverts();
      dispatch(advertsLoadedSuccess(adverts));
    } catch (error) {
      dispatch(advertsLoadedFailure(error));
    }
  };
};





 export const advertLoadedRequest = () => ({
   type: ADVERT_LOADED_REQUEST,
 });

export const advertLoadedSuccess = advert => ({
  type: ADVERT_LOADED_SUCCESS,
  payload: advert,
});

export const advertLoadedFailure = error => ({
  type: ADVERT_LOADED_FAILURE,
  payload: error,
  error: true,
});





export const advertLoaded = advertId => {
  return async function (dispatch, getState, { api }) {
    const advertLoaded = getAdvert(advertId)(getState());
    if (advertLoaded) return;
    dispatch(advertLoadedRequest());
    try {
      const advert = await api.adverts.getAdvert(advertId);
      dispatch(advertLoadedSuccess(advert));
    } catch (error) {
      dispatch(advertLoadedFailure(error));
    }
  };
};








export const tagsLoaded = tags => ({
  type: TAGS_LOADED,
  payload: tags,
});





export const advertCreatedRequest = () => ({
  type: ADVERT_CREATED_REQUEST,
});


export const advertCreatedSuccess = advert => ({
  type: ADVERT_CREATED_SUCCESS,
  payload: advert,
});

export const advertCreatedFailure = error => ({
  type: ADVERT_CREATED_FAILURE,
  payload: error,
  error: true,
});


export const advertDeleteRequest = () => ({
  type: ADVERT_DELETE_REQUEST,
});


export const advertDeleteSuccess = adId => ({
  type: ADVERT_DELETE_SUCCESS,
   payload: adId,
});


export const advertDeleted = adId => {
  return async function (dispatch) {
    //const advertsLoaded = useSelector(getAdverts);
    dispatch(advertDeleteRequest());
    try {
      await delAdvert(adId);
      dispatch(advertDeleteSuccess(adId));
    } catch (error) {
      dispatch(advertDeleteFailure(error));
    }
  };
};






export const advertDeleteFailure = error => ({
  type: ADVERT_DELETE_FAILURE,
  payload: error,
  error: true,
});





export const uiResetError = () => ({
    type: UI_RESET_ERROR,
})

