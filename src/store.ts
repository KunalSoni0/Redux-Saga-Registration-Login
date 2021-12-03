import UserSaga from "./sagas/registerSaga"
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";


const sagaMiddleware = createSagaMiddleware();
//const middleware = [sagaMiddleware];

const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(UserSaga);

export type RootStore = ReturnType<typeof reducers>

export default store;
//const store = createStore();