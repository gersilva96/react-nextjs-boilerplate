/**
 * @packageDocumentation
 * @module Views/Components/NasaApod/DateInput
 * UI that has the date input.
 */

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import { nasaApodSelector } from '~/state/features/nasaApodSlice';
import nasaApodController from '~/controller/nasaApod';
import styles from '../index.scss';

const DateInput = (): JSX.Element => {
  const { date } = useSelector(nasaApodSelector);
  const [startDate, setStartDate] = useState(date);
  const handleChange = (newDate: Date) => {
    setStartDate(newDate);
    nasaApodController.setDate(newDate);
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
