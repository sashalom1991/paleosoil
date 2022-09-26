import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  fetchPaleosoilEnPoint,
  deletePaleosoilEnPoint,
} from './paleosoilEn-operations';

const items = createReducer([], {
  [fetchPaleosoilEnPoint.fulfilled]: (_, { payload }) => payload,
  [deletePaleosoilEnPoint.fulfilled]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload),
});

const loading = createReducer(false, {
  [fetchPaleosoilEnPoint.pending]: () => true,
  [fetchPaleosoilEnPoint.fulfilled]: () => false,
  [fetchPaleosoilEnPoint.rejected]: () => false,

  [deletePaleosoilEnPoint.pending]: () => true,
  [deletePaleosoilEnPoint.fulfilled]: () => false,
  [deletePaleosoilEnPoint.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchPaleosoilEnPoint.rejected]: (_, action) => action.payload,
  [fetchPaleosoilEnPoint.pending]: () => null,

  [deletePaleosoilEnPoint.rejected]: (_, action) => action.payload,
  [deletePaleosoilEnPoint.pending]: () => null,
});

export default combineReducers({ items, loading, error });
