import { configureStore } from "@reduxjs/toolkit";
import shopLoverReducer from "./shopLoverSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, shopLoverReducer);

export const store = configureStore({
  reducer: { shopLoverReducer: persistedReducer },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
