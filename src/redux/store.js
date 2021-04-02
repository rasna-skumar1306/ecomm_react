import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { persistStore } from "redux-persist";

import rootReducer from "./rootReducer";

const middleWare = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleWare));

const persistor = persistStore(store);

export { store, persistor };
