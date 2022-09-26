import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addPaleosoilPointEnError,
  addPaleosoilPointEnRequest,
  addPaleosoilPointEnSuccess,
} from './paleosoilEn-action';
import axios from 'axios';
import cogoToast from 'cogo-toast';

axios.defaults.baseURL = process.env.REACT_APP_URL_BACKEND;

const fetchPaleosoilEnPoint = createAsyncThunk(
  'paleosoil/fetchPaleosoilEnPoint',
  async () => {
    fetchPaleosoilEnPoint.pending();
    try {
      const { data } = await axios.get(`/paleosoil/en`);
      const enData = data;
      return enData;
    } catch (error) {
      fetchPaleosoilEnPoint.rejected(error);
    }
  },
);

const deletePaleosoilEnPoint = createAsyncThunk(
  'paleosoil/deletePaleosoilEnPoint',
  async id => {
    deletePaleosoilEnPoint.pending();
    try {
      await axios.delete(`/paleosoil/en/${id}`);
      return id;
    } catch (error) {
      deletePaleosoilEnPoint.rejected(error);
    }
  },
);

const addPaleosoilEnPoint = operation => async dispatch => {
  dispatch(addPaleosoilPointEnRequest());
  try {
    const { data } = await axios.post('/paleosoil/en/add', operation);
    dispatch(addPaleosoilPointEnSuccess(data));
    cogoToast.success('Success!');
  } catch (error) {
    dispatch(addPaleosoilPointEnError(error.message));
    cogoToast.error(error.message);
  }
};

export { fetchPaleosoilEnPoint, deletePaleosoilEnPoint, addPaleosoilEnPoint };
