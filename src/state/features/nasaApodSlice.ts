/* eslint-disable no-param-reassign */
/**
 * @packageDocumentation
 * @module State/Features/NasaApod
 * Contains the NasaApod feature.
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// import { format } from 'date-fns';
import { RootState } from '~/state/store';

// const today = format(new Date(), 'yyyy-MM-dd');
const today = new Date().toString();

export type NasaApodStateType = {
  link: string;
  date: string;
  title: string;
  copyright: string;
  explanation: string;
  loading: boolean;
};

const initialState: NasaApodStateType = {
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
    setLink: (state: NasaApodStateType, action: PayloadAction<string>) => {
      state.link = action.payload;
    },
    setDate: (state: NasaApodStateType, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    setTitle: (state: NasaApodStateType, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setCopyright: (state: NasaApodStateType, action: PayloadAction<string>) => {
      state.copyright = action.payload;
    },
    setExplanation: (state: NasaApodStateType, action: PayloadAction<string>) => {
      state.explanation = action.payload;
    },
    setLoading: (state: NasaApodStateType, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const nasaApodSelector = (state: RootState): NasaApodStateType => state.nasaApod;

export const { setLink, setDate, setTitle, setCopyright, setExplanation, setLoading } = nasaApodSlice.actions;

export default nasaApodSlice.reducer;
