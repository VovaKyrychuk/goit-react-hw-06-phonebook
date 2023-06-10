import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';
import { contactsReducer } from './contactsSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// Створення Redux Store з використанням Toolkit
export const store = configureStore({
  reducer: {
    // Додавання reducer для обробки стану контактів
    contacts: contactsReducer,
    // Додавання reducer для обробки стану фільтру
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    // Налаштування серіалізації
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
