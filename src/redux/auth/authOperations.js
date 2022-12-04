import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import cogoToast from 'cogo-toast';

axios.defaults.baseURL = process.env.REACT_APP_URL_BACKEND;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  '/auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/register', credentials);
      cogoToast.success('Success!');
      token.set(data.data.token);
      return data.data;
    } catch (error) {
      cogoToast.error(error.message);
      return rejectWithValue(error);
    }
  },
);

const login = createAsyncThunk(
  '/auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/login', credentials);
      token.set(data.token);
      cogoToast.success(`Hi! You are signed in with ${data.user.email}`, {
        position: 'top-right',
        hideAfter: 4,
      });
      return data;
    } catch (error) {
      cogoToast.error(
        `Sorry, but your email address or password is incorrect. Try again or ask for help!!!`,
        { position: 'top-right', hideAfter: 4 },
      );

      return rejectWithValue(error);
    }
  },
);

const logout = createAsyncThunk('/auth/logout', async () => {
  try {
    await axios.get('/auth/logout');
    token.unset();
    cogoToast.success(`Goodbye! Come again with new cuts!`, {
      position: 'top-right',
      hideAfter: 4,
    });
  } catch (error) {
    cogoToast.error(error, { position: 'top-right' });
    console.log(error);
  }
});

const fetchCurrentUser = createAsyncThunk(
  '/auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);

    try {
      const { data } = await axios.get('/auth/current');
      cogoToast.success('data');
      return data.user;
    } catch (error) {
      console.log(error);
      cogoToast.success(error.message);
    }
  },
);

const authOperations = {
  register,
  logout,
  login,
  fetchCurrentUser,
};
export default authOperations;
