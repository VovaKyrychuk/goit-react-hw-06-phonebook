import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Початковий список контактів
const contacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

// Створення slice стану
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts },
  reducers: {
    // додає контакт до списку
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    // видаляє контакт зі списку
    deleteContact(state, action) {
      return {
        contacts: state.contacts.filter(
          contact => contact.name !== action.payload
        ),
      };
    },
  },
});

// Налаштування збереження стану для slice "contacts" за допомогою redux-persist
const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

// Створення редуктора для збереження стану контактів з використанням persistConfig
export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

// Експорт дій "addContact" та "deleteContact" зі slice
export const { addContact, deleteContact } = contactsSlice.actions;

// Експорт селектора "getAllContacts", який повертає всі контакти
export const getAllContacts = state => state.contacts;
