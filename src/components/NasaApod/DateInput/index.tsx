/**
 * @packageDocumentation
 * @module Views/Components/NasaApod/DateInput
 * UI that has the date input.
 */

import { useState } from 'react';

import { KeyboardDatePicker } from '@material-ui/pickers';
import { useSelector } from 'react-redux';

import styles from '../index.module.scss';
import nasaApodController from '~/controller/nasaApod';
import i18n from '~/internationalization';
import { nasaApodSelector } from '~/state/features/nasaApodSlice';

const DateInput = (): JSX.Element => {
  const { date } = useSelector(nasaApodSelector);
  const [startDate, setStartDate] = useState<Date | null>(new Date(date));
  const handleDateChange = (changedDate: any) => {
    setStartDate(changedDate);
    nasaApodController.setDate(new Date(changedDate).toString());
  };

  return (
    <KeyboardDatePicker
      margin="normal"
      id="date-picker-dialog"
      label={i18n.get('NASAAPOD_SELECT_DATE')}
      format="dd/MM/yyyy"
      value={startDate}
      onChange={(fecha) => handleDateChange(fecha)}
      KeyboardButtonProps={{
        'aria-label': 'change date',
      }}
      className={styles.dateInput}
    />
  );
};

export default DateInput;
