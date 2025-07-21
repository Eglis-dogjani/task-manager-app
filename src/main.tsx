import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './i18n.ts'; //Languagial Support
import { store } from './store';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Toaster position='top-center' />
    <App />
  </Provider>
);
