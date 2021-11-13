import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import rootReducer from "./store";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
