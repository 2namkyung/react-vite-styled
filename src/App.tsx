import { Provider } from 'react-redux';
import { setupStore } from './store';
import Router from './router';

function App() {
  return (
    <Provider store={setupStore()}>
      <Router />
    </Provider>
  );
}

export default App;
