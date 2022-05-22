// import { BrowserRouter as Router } from 'react-router-dom';
import { unstable_HistoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';



const Root = ({children, store, history }) => (
<Provider store={store}>
  <Router history={history}>{children}</Router>
</Provider>
);

export default Root;