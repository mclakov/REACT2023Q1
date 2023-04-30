import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';

export function render(url: string) {
  return [
    store,
    (url: string, options: ReactDOMServer.RenderToPipeableStreamOptions) =>
      ReactDOMServer.renderToPipeableStream(
        <StaticRouter location={url}>
          <Provider store={store}>
            <App />
          </Provider>
        </StaticRouter>,
        options
      ),
  ];
}
