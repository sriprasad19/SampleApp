import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import counterReducer from "../reducer/counterReducer";
import homeReducer from "../reducer/homeReducer";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const reducers = combineReducers({
    counter: counterReducer,
    home: homeReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)

export const dispatch = store.dispatch;
export const getState = store.getState; 









// const diaryPersistConfig = {
//     key: 'diary',
//     storage: storage,
//     keyPrefix: '',
//     blacklist: ['loading', 'uploadModalVisible', 'monthModalVisible', 'editModalVisible', 'entryUploading', 'deleteEntryDisabled']
// };

// const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
//     blacklist: ['diary'],
// };

// const persistedReducer = persistReducer(persistConfig, combineReducers({
//     auth: persistReducer(authPersistConfig, authReducer),
//     diary: persistReducer(diaryPersistConfig, diaryReducer)
// }))


// import { legacy_createStore as createStore, applyMiddleware} from 'redux'
// import { createLogger } from 'redux-logger';
// import { persistStore, persistReducer } from 'redux-persist';

// import rootReducer from "../reducer";

// const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
//     whitelist: ['authReducer'],
//     blacklist: [],
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = createStore(persistedReducer, applyMiddleware(createLogger()) )
// let persistor = persistStore(store)

// export {store, persistor} ;