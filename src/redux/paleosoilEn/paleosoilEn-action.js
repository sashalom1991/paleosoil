import { createAction } from '@reduxjs/toolkit';

const addPaleosoilPointEnRequest = createAction(
  'paleosoil/addPaleosoilPointEnRequest',
);
const addPaleosoilPointEnSuccess = createAction(
  'paleosoil/addPaleosoilPointEnSuccess',
);
const addPaleosoilPointEnError = createAction('paleosoil/addPaleosoilPointEn');

export {
  addPaleosoilPointEnError,
  addPaleosoilPointEnRequest,
  addPaleosoilPointEnSuccess,
};
