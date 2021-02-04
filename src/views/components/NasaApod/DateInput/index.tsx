/**
 * @packageDocumentation
 * @module Views/Components/NasaApod/DateInput
 * UI that has the date input.
 */

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import moment from 'moment';
import { nasaApodSelector } from '~/state/features/nasaApodSlice';
import nasaApodController from '~/controller/nasaApod';
import styles from '../index.scss';
import i18n from '~/internationalization';

const DateInput = (): JSX.Element => {
  const { date } = useSelector(nasaApodSelector);
  const [startDate, setStartDate] = useState<Date>(new Date(moment(date).format()));
  const handleDateChange = (changedDate: MaterialUiPickersDate) => {
    const formattedDate = changedDate
      ? changedDate.format('YYYY-MM-DD')
      : moment().format('YYYY-MM-DD');
    const newDate = new Date(moment(formattedDate).format());
    setStartDate(newDate);
    nasaApodController.setDate(formattedDate);
  };

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <KeyboardDatePicker
        margin="normal"
        id="date-picker-dialog"
        label={i18n.get('NASAAPOD_SELECT_DATE')}
        format="DD/MM/yyyy"
        value={startDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
        className={styles.dateInput}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DateInput;
