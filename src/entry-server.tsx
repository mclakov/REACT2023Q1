import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from 'App';
import { Provider } from 'react-redux';
import { store } from './store/store';

export function render(url: string) {
  return ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );
}
