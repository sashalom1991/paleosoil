import { createAction } from '@reduxjs/toolkit';

// ua
const addPaleosoilPointRequest = createAction(
  'paleosoil/addPaleosoilPointRequest',
);
const addPaleosoilPointSuccess = createAction(
  'paleosoil/addPaleosoilPointSuccess',
);
const addPaleosoilPointError = createAction('paleosoil/addPaleosoilPoint');

// // en
// const addPaleosoilPointEnRequest = createAction(
//   'paleosoil/addPaleosoilPointEnRequest',
// );
// const addPaleosoilPointEnSuccess = createAction(
//   'paleosoil/addPaleosoilPointEnSuccess',
// );
// const addPaleosoilPointEnError = createAction('paleosoil/addPaleosoilPointEn');

export {
  addPaleosoilPointError,
  addPaleosoilPointRequest,
  addPaleosoilPointSuccess,
  // addPaleosoilPointEnRequest,
  // addPaleosoilPointEnSuccess,
  // addPaleosoilPointEnError,
};
