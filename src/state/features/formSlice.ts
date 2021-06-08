/**
 * @packageDocumentation
 * @module State/Features/Form
 * Contains the form feature.
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '~/state/store';
import { WordsOptionType } from '~/types/form';

export type FormStateType = {
  mostUsedWords: WordsOptionType[];
};

const initialState: FormStateType = {
  mostUsedWords: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addMostUsedWord: (state: FormStateType, action: PayloadAction<WordsOptionType>) => {
      state.mostUsedWords.push(action.payload);
    },
  },
});

export const formSelector = (state: RootState): FormStateType => state.form;

export const { addMostUsedWord } = formSlice.actions;

export default formSlice.reducer;
