import { createAction } from '@reduxjs/toolkit';

const addPaleosoilPointRequest = createAction(
  'paleosoil/addPaleosoilPointRequest',
);
const addPaleosoilPointSuccess = createAction(
  'paleosoil/addPaleosoilPointSuccess',
);
const addPaleosoilPointError = createAction('paleosoil/addPaleosoilPoint');

export {
  addPaleosoilPointError,
  addPaleosoilPointRequest,
  addPaleosoilPointSuccess,
};
