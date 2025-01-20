import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  // Ім'я слайсу
  name: "filters",
  // Початковий стан редюсера слайсу
  initialState: {
    name: "",
  },
  // Об'єкт case-редюсерів
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

// Експортуємо фабрики екшенів
export const { changeFilter } = filtersSlice.actions;

// Експортуємо редюсер слайсу
export default filtersSlice.reducer;
