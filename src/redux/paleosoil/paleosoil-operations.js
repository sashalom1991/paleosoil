import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addPaleosoilPointError,
  addPaleosoilPointRequest,
  addPaleosoilPointSuccess,
} from './paleosoil-action';
import axios from 'axios';
import cogoToast from 'cogo-toast';

axios.defaults.baseURL = 'https://paleosoil-backend.herokuapp.com/api/';

const fetchPaleosoilPoint = createAsyncThunk(
  'paleosoil/fetchPaleosoilPoint',
  async () => {
    fetchPaleosoilPoint.pending();
    try {
      const lng = localStorage.getItem('lng') === 'en' ? 'en' : 'ua';
      const { data } = await axios.get(`/paleosoil/${lng}`);
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
    cogoToast.success('Success!');
  } catch (error) {
    dispatch(addPaleosoilPointError(error.message));
    cogoToast.error(error.message);
  }
};

export { fetchPaleosoilPoint, deletePaleosoilPoint, addPaleosoilPoint };
