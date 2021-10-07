import { Provider } from 'react-redux';
import Routing from 'routes/Routing';
import { store } from 'store';
import './App.css';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
}

export default App;
