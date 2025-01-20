import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState: {
    items: [],
  },
  // Об'єкт case-редюсерів
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

// Експортуємо фабрики екшенів
export const { addContact, deleteContact } = contactsSlice.actions;

// Експортуємо редюсер слайсу
export default contactsSlice.reducer;
