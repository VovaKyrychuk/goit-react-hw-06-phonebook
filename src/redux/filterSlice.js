import { createSlice } from '@reduxjs/toolkit';

// Створення slice стану з назвою "filter"
export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    // Визначення дії "filterContact", яка приймає стан та дію (payload) як параметри
    filterContact(state, action) {
      // Оновлення стану зі значенням з дії (payload), після видалення зайвих пробілів
      return (state = action.payload.trim());
    },
  },
});

// Експорт дії "filterContact" зі slice
export const { filterContact } = filterSlice.actions;

// Експорт селектора "getFilter", який повертає значення зі стану "filter"
export const getFilter = state => state.filter;
