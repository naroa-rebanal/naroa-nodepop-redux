export const getIsLogged = state => state.auth;

export const getAdverts = state => state.adverts.data;

export const getAreAdvertsLoaded = state => state.adverts.loaded;




 export const getAdvert = advertId => state => state.adverts.data.find(advert => advert.id ===advertId);

export const getUi = state => state.ui;