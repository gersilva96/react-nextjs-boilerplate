/* eslint-disable no-param-reassign */
/**
 * @packageDocumentation
 * @module State/Features/NasaApod
 * Contains the NasaApod feature.
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import moment from 'moment';
import { RootState } from '~/state/store';

const today = moment().format('YYYY-MM-DD');

type NasaApodState = {
  link: string;
  date: string;
  loading: boolean;
};

const initialState: NasaApodState = {
  link: '',
  date: today,
  loading: false,
};

const nasaApodSlice = createSlice({
  name: 'nasaApod',
  initialState,
  reducers: {
    setImage: (state: NasaApodState, action: PayloadAction<string>) => {
      state.link = action.payload;
    },
    setDate: (state: NasaApodState, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    setLoading: (state: NasaApodState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const nasaApodSelector = (state: RootState): NasaApodState => state.nasaApod;

export const { setImage, setDate, setLoading } = nasaApodSlice.actions;

export default nasaApodSlice.reducer;
