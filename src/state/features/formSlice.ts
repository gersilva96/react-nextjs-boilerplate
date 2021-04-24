/**
 * @packageDocumentation
 * @module State/Features/Form
 * Contains the form feature.
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '~/state/store';
import { WordsOptionType } from '~/types/form';

type FormState = {
  mostUsedWords: WordsOptionType[];
};

const initialState: FormState = {
  mostUsedWords: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addMostUsedWord: (state: FormState, action: PayloadAction<WordsOptionType>) => {
      state.mostUsedWords.push(action.payload);
    },
  },
});

export const formSelector = (state: RootState): FormState => state.form;

export const { addMostUsedWord } = formSlice.actions;

export default formSlice.reducer;
