import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addPaleosoilPointError,
  addPaleosoilPointRequest,
  addPaleosoilPointSuccess,
} from './paleosoil-action';
import axios from 'axios';

axios.defaults.baseURL = 'https://paleosoil-backend.herokuapp.com/api/';

const fetchPaleosoilPoint = createAsyncThunk(
  'paleosoil/fetchPaleosoilPoint',
  async () => {
    fetchPaleosoilPoint.pending();
    try {
      const { data } = await axios.get('/paleosoil/ua');
      return data;
    } catch (error) {
      fetchPaleosoilPoint.rejected(error);
    }
  },
);

const deletePaleosoilPoint = createAsyncThunk(
  'paleosoil/deletePaleosoilPoint',
  async id => {
    deletePaleosoilPoint.pending();
    try {
      await axios.delete(`/paleosoil/ua/${id}`);
      return id;
    } catch (error) {
      deletePaleosoilPoint.rejected(error);
    }
  },
);

const addPaleosoilPoint = operation => async dispatch => {
  dispatch(addPaleosoilPointRequest());
  try {
    const { data } = await axios.post('/paleosoil/ua/add', operation);
    dispatch(addPaleosoilPointSuccess(data));
  } catch (error) {
    dispatch(addPaleosoilPointError(error.message));
  }
};

export { fetchPaleosoilPoint, deletePaleosoilPoint, addPaleosoilPoint };
