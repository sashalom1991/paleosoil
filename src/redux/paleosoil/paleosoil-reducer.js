import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  fetchPaleosoilPoint,
  deletePaleosoilPoint,
} from './paleosoil-operations';

const items = createReducer([], {
  [fetchPaleosoilPoint.fulfilled]: (_, { payload }) => payload,
  [deletePaleosoilPoint.fulfilled]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload),
});

const loading = createReducer(false, {
  [fetchPaleosoilPoint.pending]: () => true,
  [fetchPaleosoilPoint.fulfilled]: () => false,
  [fetchPaleosoilPoint.rejected]: () => false,

  [deletePaleosoilPoint.pending]: () => true,
  [deletePaleosoilPoint.fulfilled]: () => false,
  [deletePaleosoilPoint.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchPaleosoilPoint.rejected]: (_, action) => action.payload,
  [fetchPaleosoilPoint.pending]: () => null,

  [deletePaleosoilPoint.rejected]: (_, action) => action.payload,
  [deletePaleosoilPoint.pending]: () => null,
});

export default combineReducers({ items, loading, error });
