/**
 * @packageDocumentation
 * @module Views/Components/NasaApod/DateInput
 * UI that has the date input.
 */

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { nasaApodSelector } from '~/state/features/nasaApodSlice';
import nasaApodController from '~/controller/nasaApod';
import styles from '../index.scss';

const DateInput = (): JSX.Element => {
  const { date } = useSelector(nasaApodSelector);
  const [startDate, setStartDate] = useState(new Date(moment(date).format()));
  const handleChange = (newDate: Date) => {
    setStartDate(newDate);
    nasaApodController.setDate(moment(newDate).format('YYYY-MM-DD'));
  };
  return (
    <DatePicker
      dateFormat="yyyy-MM-dd"
      selected={startDate}
      todayButton="Today"
      onChange={handleChange}
      className={styles.dateInput}
    />
  );
};

export default DateInput;
