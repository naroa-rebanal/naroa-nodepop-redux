import { auth, defaultState } from "../reducers";
import { AUTH_LOGIN_SUCCESS, AUTH_LOGOUT } from "../types";

//test de un reducer

describe('auth', () => {
    it('should manage AUTH_LOGIN_SUCCESS action', () => {
      const action = {
        type: AUTH_LOGIN_SUCCESS,
      };
      const initialState = false;
      const result = auth(initialState, action);
      expect(result).toBe(true);
    });
    it('should manage AUTH_LOGOUT action', () => {
      const action = {
        type: AUTH_LOGOUT,
      };
      const initialState = true;
      const result = auth(initialState, action);
      expect(result).toBe(false);
    });
    it('should manage any action', () => {
      const action = {
        type: 'ANY',
      };
      const initialState = true;
      const result = auth(initialState, action);
      expect(result).toBe(initialState);
    });
    it('should manage default state', () => {
      const action = {
        type: 'ANY',
      };
      const initialState = undefined;
      const result = auth(initialState, action);
      expect(result).toBe(defaultState.auth);
    });
  });