import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userReducer from "./users";
// import pageReducer from "./page";
import paperReducer from "./paper";
import gifts from "./gifts";
import { watchGetGifts } from "./giftSaga";
import { watchGetPaper } from "./paperSaga";
import { all } from "redux-saga/effects";
import { watchGetUser } from "./userSaga";
const reducer = combineReducers({
    user: userReducer,
    // page: pageReducer,
    paper: paperReducer,
    gifts,
});
const sagaMiddleware = createSagaMiddleware();
const defaultMiddleware = getDefaultMiddleware();
function* rootSaga() {
    yield all([watchGetPaper(), watchGetGifts(), watchGetUser()]);
}
// export const store = configureStore({
//   reducer,
//   devTools: true,
//   middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
// });
const createStore = () => {
    const store = configureStore({
        reducer,
        devTools: true,
        middleware: [...defaultMiddleware, sagaMiddleware],
    });
    sagaMiddleware.run(rootSaga);
    return store;
};
export default createStore;
