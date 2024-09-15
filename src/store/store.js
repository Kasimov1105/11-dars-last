import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countriesSlice';
import selectedCountriesReducer from './selectedCountriesSlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    selectedCountries: selectedCountriesReducer, // Ensure this matches your slice name
  },
});

export default store;
