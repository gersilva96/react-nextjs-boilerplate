/**
 * @packageDocumentation
 * @module Views/Components/NasaApod/DateInput
 * UI that has the date input.
 */

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import nasaApodController from '~/controller/nasaApod';
import styles from '../index.scss';

const DateInput = (): JSX.Element => {
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = (date: Date) => {
    setStartDate(date);
    const formatDate = moment(date).format('YYYY-MM-DD');
    nasaApodController.setDate(formatDate);
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
