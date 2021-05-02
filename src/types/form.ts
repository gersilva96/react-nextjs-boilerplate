/**
 * @packageDocumentation
 * @hidden
 * Has the types of form.
 */

export type WordsOptionType = {
  inputValue?: string;
  word: string;
};

export type ItemListType = {
  item: '';
  amount: 0;
};

export type FormValuesType = {
  email: string;
  password: string;
  range: string;
  position: string;
  languages: string[];
  date: string;
  time: string;
  datetime: string;
  include: string[];
  itemsList: ItemListType[];
  rememberme: boolean;
};

export type SetFieldValueType = (field: string, value: unknown, shouldValidate?: boolean) => void;
