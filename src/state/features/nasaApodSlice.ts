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
  title: string;
  copyright: string;
  explanation: string;
  loading: boolean;
};

const initialState: NasaApodState = {
  link: '',
  date: today,
  title: '',
  copyright: '-',
  explanation: '',
  loading: false,
};

const nasaApodSlice = createSlice({
  name: 'nasaApod',
  initialState,
  reducers: {
    setLink: (state: NasaApodState, action: PayloadAction<string>) => {
      state.link = action.payload;
    },
    setDate: (state: NasaApodState, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    setTitle: (state: NasaApodState, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setCopyright: (state: NasaApodState, action: PayloadAction<string>) => {
      state.copyright = action.payload;
    },
    setExplanation: (state: NasaApodState, action: PayloadAction<string>) => {
      state.explanation = action.payload;
    },
    setLoading: (state: NasaApodState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const nasaApodSelector = (state: RootState): NasaApodState => state.nasaApod;

export const {
  setLink,
  setDate,
  setTitle,
  setCopyright,
  setExplanation,
  setLoading,
} = nasaApodSlice.actions;

export default nasaApodSlice.reducer;
