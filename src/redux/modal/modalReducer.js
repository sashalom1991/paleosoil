import { createReducer } from '@reduxjs/toolkit';
import { openModal, closeModal } from './modalAction';

const setTrue = () => true;
const setFalse = () => false;

const modalStatus = createReducer(false, {
  [openModal]: setTrue,
  [closeModal]: setFalse,
});

export { modalStatus };
