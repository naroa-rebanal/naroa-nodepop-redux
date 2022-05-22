 import { fireEvent, render, screen } from '@testing-library/react';
 import '@testing-library/jest-dom/extend-expect';

 import { Provider } from 'react-redux';
import { authLogin } from '../../../../store/actions';
 import LoginPage from '../LoginPage';

 jest.mock('../../../../store/actions');

const state = {
    ui: {
      error: null,
       isLoading: false,
    },
  };

  const store = {
    getState: () => state,
    dispatch: jest.fn(),
    subscribe: () => {},
  };


describe('LoginPage', () => {
    
//test con snapshot testing
test('should test with snapshot', () => {
  
    const {container } = render(
      <Provider store={store}>
        <LoginPage />
      </Provider>,
    );

    expect(container).toMatchSnapshot();

})



//test de un componente
  test('should test the action authLogin', () => {
    authLogin.mockReturnValue('action');
   
    const email = 'test@mail.com';
    const password = '4567';

    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>,
    );

    const emailInput = screen.getByLabelText(/Email/);
    const passwordInput = screen.getByLabelText(/Password/);
    const submitButton = screen.getByRole('button');



    expect(submitButton).toBeDisabled();
     fireEvent.change(emailInput, { target: { value: email } });
     fireEvent.change(passwordInput, { target: { value: password } });

     expect(submitButton).not.toBeDisabled();

     fireEvent.click(submitButton);
     const credentials = authLogin.mock.calls[0][0];
     expect(credentials).toMatchObject({ email, password });
     expect(store.dispatch).toHaveBeenCalledWith('action');
   });

});


