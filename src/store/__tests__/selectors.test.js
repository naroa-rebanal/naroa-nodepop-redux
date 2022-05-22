import { getAdvert } from "../selectors";

//Test de selector

describe('getAvert', () => {
    it('should return an advert', () => {
      const advertId = '1';
      const adverts = [{ id: advertId }];
      const state = { adverts: { data: adverts } };
      expect(getAdvert(advertId)(state)).toEqual(adverts[0]);
    });
  
    it('should return undefined', () => {
      const advertId = '1';
      const adverts = [];
      const state = { adverts: { data: adverts } };
      expect(getAdvert(advertId)(state)).toBeUndefined();
    });
  });
  