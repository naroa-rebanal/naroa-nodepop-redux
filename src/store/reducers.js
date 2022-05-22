import { ADVERTS_LOADED_FAILURE, ADVERTS_LOADED_REQUEST, ADVERTS_LOADED_SUCCESS, ADVERT_CREATED_FAILURE, ADVERT_CREATED_REQUEST, ADVERT_CREATED_SUCCESS, ADVERT_DELETE_FAILURE, ADVERT_DELETE_SUCCESS, ADVERT_LOADED_FAILURE, ADVERT_LOADED_REQUEST, ADVERT_LOADED_SUCCESS, AUTH_LOGIN_FAILURE, AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT, TAGS_LOADED, UI_RESET_ERROR} from "./types";



export const defaultState = {
    auth: false,
    adverts: {
        loaded:false,
        data:[],
    },
    tags:[],
    ui: {
        isLoading: false,
        error: null,
    },
}


export const auth = (state = defaultState.auth, action) => {
    switch(action.type){
        case AUTH_LOGIN_SUCCESS:
            return true;
        case AUTH_LOGOUT:
            return false;
        default:
            return state;
    }
};


export const adverts = (state = defaultState.adverts, action)=> {
    switch(action.type){
        case ADVERTS_LOADED_SUCCESS:
            return { loaded: true, data: action.payload };
        case ADVERT_LOADED_SUCCESS:
            return { ...state, data: [...state.data, action.payload] };
        case ADVERT_CREATED_SUCCESS:
            return { ...state, data: [action.payload, ...state.data]};
        case ADVERT_DELETE_SUCCESS:
            console.log('dentro'); //solo adverts y su load
            const idAnuncio = action.payload; // el id
            const anuncios = state.data; //solo los adverts data
            const newState = anuncios.filter(object =>{
                return object.id !== idAnuncio;
            });
            console.log(newState); //solo adverts y su load
            return {data: newState};

            default:
            return state;
    }
};

export const tags = (state = defaultState.tags, action) =>{
    switch(action.type){
        case TAGS_LOADED:
        return action.payload;
        default:
            return state;
    }
}

export const ui = ( state = defaultState.ui, action) => {

    switch(action.type){
        case AUTH_LOGIN_REQUEST:
        case ADVERTS_LOADED_REQUEST:
        case ADVERT_LOADED_REQUEST:
        case ADVERT_CREATED_REQUEST:
            return { ...state, isLoading:true, error: null};
        case AUTH_LOGIN_SUCCESS:
        case ADVERTS_LOADED_SUCCESS:
        case ADVERT_LOADED_SUCCESS:
        case ADVERT_CREATED_SUCCESS:
            return { ...state, isLoading:false};
        case AUTH_LOGIN_FAILURE:
        case ADVERTS_LOADED_FAILURE:
        case ADVERT_LOADED_FAILURE:
        case ADVERT_CREATED_FAILURE:
        case ADVERT_DELETE_FAILURE:
            return { ...state, isLoading:false, error: action.payload};
        case UI_RESET_ERROR:
            return {...state, error:null}
        default:
            return state;
    }

};





