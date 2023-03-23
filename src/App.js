
import './index.css';
import store from './lib/store';

import { Provider } from 'react-redux';
import InboxScreen from './components/InboxScreen';

function App() {
 return (
  <Provider store={store}>
    <InboxScreen />
    <p style={{opacity: 0}}>learn react</p>
  </Provider>
 );
}
export default App;