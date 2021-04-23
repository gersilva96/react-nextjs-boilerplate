/**
 * @packageDocumentation
 * @module Views/Components/Form
 * UI that has the Form.
 */

import React, { useState, Fragment } from 'react';
import { Formik, Form, Field, FieldArray, FieldProps } from 'formik';
import {
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  CircularProgress,
  FormControl,
  FormLabel,
  FormControlLabel,
  FormHelperText,
  RadioGroup,
  FormGroup,
  Radio,
  Checkbox,
  Select,
  MenuItem,
  InputLabel,
  IconButton,
  Switch,
  Grid,
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
  KeyboardDateTimePicker,
} from '@material-ui/pickers';
import {
  Send as SendIcon,
  Warning as WarningIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import moment from 'moment';
import DateMomentAdapter from '@date-io/moment';
import Swal from 'sweetalert2';
import { noop } from 'lodash';
import i18n from '~/internationalization';
import styles from './index.scss';

const validationFunction = (field: string, value: string): string | undefined => {
  let error;
  switch (field) {
    case 'email':
      if (!value) {
        error = i18n.get('FORM_EMAIL_REQUIRED');
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = i18n.get('FORM_EMAIL_INVALID');
      }
      break;
    case 'password':
      if (!value) {
        error = i18n.get('FORM_PASSWORD_REQUIRED');
      } else if (value.length < 8) {
        error = i18n.get('FORM_PASSWORD_INVALID');
      }
      break;
    case 'range':
      if (value === '') {
        error = 'Debe seleccionar un rango';
      }
      break;
    case 'position':
      if (value === '') {
        error = 'La posición es requerida';
      }
      break;
    case 'languages':
      if (value.length < 1) {
        error = 'Debe seleccionar al menos un lenguaje';
      }
      break;
    case 'date':
      if (
        !/^(?:(?:31(\/)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(
          value,
        )
      ) {
        error = 'Formato de fecha incorrecto';
      }
      break;
    case 'time':
      if (!/^(((([0-1][0-9])|(2[0-3])):?[0-5][0-9]))$/.test(value)) {
        error = 'Formato de hora incorrecto';
      }
      break;
    case 'datetime':
      if (
        !/^(?:(?:31(\/)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2}) (((([0-1][0-9])|(2[0-3])):?[0-5][0-9]))$/.test(
          value,
        )
      ) {
        error = 'Formato de fecha y hora incorrecto';
      }
      break;
    default:
      break;
  }
  return error;
};

const filter = createFilterOptions<WordsOptionType>();

interface WordsOptionType {
  inputValue?: string;
  word: string;
}

const words: WordsOptionType[] = [];

const emptyItemList = {
  item: '',
  amount: 0,
};

const initialValues = {
  email: '',
  password: '',
  range: '',
  position: '',
  languages: [],
  date: moment().format('DD/MM/YYYY'),
  time: moment().format('HH:mm'),
  datetime: moment().format('DD/MM/YYYY HH:mm'),
  include: [],
  itemsList: [emptyItemList],
};

const FormComponent = (): JSX.Element => {
  const [showingPassword, setShowingPassword] = useState<boolean>(false);
  const [date, setDate] = useState<Date | null>(new Date(moment().format()));
  const [time, setTime] = useState<Date | null>(new Date(moment().format()));
  const [dateTime, setDateTime] = useState<Date | null>(new Date(moment().format()));

  const handleShowingPassword = (): void => {
    setShowingPassword(!showingPassword);
  };

  const handleDateChange = (dateToChange: Date | null, setFieldValue: any) => {
    setDate(dateToChange);
    setFieldValue('date', moment(dateToChange).format('DD/MM/YYYY'), true);
  };

  const handleTimeChange = (timeToChange: Date | null, setFieldValue: any) => {
    setTime(timeToChange);
    setFieldValue('time', moment(timeToChange).format('HH:mm'), true);
  };

  const handleDateTimeChange = (dateTimeToChange: Date | null, setFieldValue: any) => {
    setDateTime(dateTimeToChange);
    setFieldValue('datetime', moment(dateTimeToChange).format('DD/MM/YYYY HH:mm'), true);
  };

  const handleIncludeChange = (includeArray: (WordsOptionType | string)[], setFieldValue: any) => {
    noop(setFieldValue);
    const includeWords = includeArray.map((word) => (typeof word === 'string' ? word : word.word));
    setFieldValue('include', includeWords);
  };

  const handleResetForm = () => {
    setShowingPassword(false);
    setDate(new Date(moment().format()));
    setTime(new Date(moment().format()));
    setDateTime(new Date(moment().format()));
  };

  return (
    <div className={styles.mainContainer} data-testid="form-container">
      <Typography className={styles.title} variant="h4" align="center">
        {i18n.get('FORM_TITLE')}
      </Typography>
      <Card className={styles.container}>
        <CardContent>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                Swal.fire({
                  icon: 'info',
                  text: JSON.stringify(values, null, 2),
                });
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              handleChange,
              handleSubmit,
              isSubmitting,
              values,
              errors,
              touched,
              setFieldValue,
              resetForm,
            }) => (
              <Form
                onSubmit={handleSubmit}
                onReset={() => {
                  resetForm();
                  handleResetForm();
                }}
              >
                <MuiPickersUtilsProvider utils={DateMomentAdapter}>
                  <FormControl className={styles.formBox}>
                    <FormLabel className={styles.formLabel}>Normal inputs</FormLabel>
                    <Field
                      validate={(value: string) => validationFunction('email', value)}
                      id="email"
                      name="email"
                    >
                      {({ field, meta }: FieldProps) => (
                        <TextField
                          {...field}
                          fullWidth
                          className={styles.formElement}
                          label="Email"
                          error={meta.touched && Boolean(meta.error)}
                          helperText={meta.touched && Boolean(meta.error) && meta.error}
                          onChange={handleChange}
                          value={values.email}
                          variant="outlined"
                          InputProps={{
                            endAdornment: meta.touched && Boolean(meta.error) && (
                              <WarningIcon color="error" />
                            ),
                          }}
                        />
                      )}
                    </Field>
                    <Field
                      validate={(value: string) => validationFunction('password', value)}
                      id="password"
                      name="password"
                    >
                      {({ field, meta }: FieldProps) => (
                        <TextField
                          {...field}
                          fullWidth
                          className={styles.formElement}
                          label="Password"
                          error={meta.touched && Boolean(meta.error)}
                          type={showingPassword ? 'text' : 'password'}
                          helperText={meta.touched && Boolean(meta.error) && meta.error}
                          onChange={handleChange}
                          value={values.password}
                          variant="outlined"
                          InputProps={{
                            endAdornment: [
                              meta.touched && Boolean(meta.error) && (
                                <WarningIcon color="error" key="error" />
                              ),
                              <IconButton
                                aria-label="show-password"
                                key="showPassword"
                                onClick={handleShowingPassword}
                              >
                                {showingPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                              </IconButton>,
                            ],
                          }}
                        />
                      )}
                    </Field>
                    <FormControl variant="outlined" className={styles.formElement}>
                      <InputLabel id="range-label">Range</InputLabel>
                      <Field
                        validate={(value: string) => validationFunction('range', value)}
                        id="range"
                        name="range"
                      >
                        {({ field, meta }: FieldProps) => (
                          <Fragment>
                            <Select
                              {...field}
                              onChange={handleChange}
                              error={meta.touched && Boolean(meta.error)}
                              value={values.range}
                              labelId="range-label"
                              variant="outlined"
                              label="Range"
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value="1-20">1-20</MenuItem>
                              <MenuItem value="21-50">21-50</MenuItem>
                              <MenuItem value="51-100">51-100</MenuItem>
                            </Select>
                            {Boolean(touched.range) && Boolean(errors.range) && (
                              <FormHelperText error>{errors.range}</FormHelperText>
                            )}
                          </Fragment>
                        )}
                      </Field>
                    </FormControl>
                  </FormControl>
                  <div className={styles.formRow}>
                    <FormControl className={(styles.formBox, styles.formBoxDivided)}>
                      <FormLabel className={styles.formLabel}>Position</FormLabel>
                      <RadioGroup
                        aria-label="position"
                        value={values.position}
                        onChange={handleChange}
                      >
                        <Field
                          type="radio"
                          name="position"
                          value="frontend"
                          validate={(value: string) => validationFunction('position', value)}
                        >
                          {({ field }: FieldProps) => (
                            <FormControlLabel
                              {...field}
                              control={<Radio color="primary" />}
                              label="Frontend"
                            />
                          )}
                        </Field>
                        <Field
                          type="radio"
                          name="position"
                          value="backend"
                          validate={(value: string) => validationFunction('position', value)}
                        >
                          {({ field }: FieldProps) => (
                            <FormControlLabel
                              {...field}
                              control={<Radio color="primary" />}
                              label="Backend"
                            />
                          )}
                        </Field>
                        <Field
                          type="radio"
                          name="position"
                          value="other"
                          validate={(value: string) => validationFunction('position', value)}
                        >
                          {({ field }: FieldProps) => (
                            <FormControlLabel
                              {...field}
                              control={<Radio color="primary" />}
                              label="Other"
                            />
                          )}
                        </Field>
                      </RadioGroup>
                      {Boolean(touched.position) && Boolean(errors.position) && (
                        <FormHelperText error>{errors.position}</FormHelperText>
                      )}
                    </FormControl>
                    <FormControl className={(styles.formBox, styles.formBoxDivided)}>
                      <FormLabel className={styles.formLabel}>Languages</FormLabel>
                      <FormGroup aria-label="languages" role="group" onChange={handleChange}>
                        <Field
                          type="checkbox"
                          name="languages"
                          value="javascript"
                          validate={(value: string) => validationFunction('languages', value)}
                        >
                          {({ field }: FieldProps) => (
                            <FormControlLabel
                              {...field}
                              control={<Checkbox color="primary" checked={field.checked} />}
                              label="JavaScript"
                            />
                          )}
                        </Field>
                        <Field
                          type="checkbox"
                          name="languages"
                          value="go"
                          validate={(value: string) => validationFunction('languages', value)}
                        >
                          {({ field }: FieldProps) => (
                            <FormControlLabel
                              {...field}
                              control={<Checkbox color="primary" checked={field.checked} />}
                              label="Go"
                            />
                          )}
                        </Field>
                        <Field
                          type="checkbox"
                          name="languages"
                          value="cpp"
                          validate={(value: string) => validationFunction('languages', value)}
                        >
                          {({ field }: FieldProps) => (
                            <FormControlLabel
                              {...field}
                              control={<Checkbox color="primary" checked={field.checked} />}
                              label="C++"
                            />
                          )}
                        </Field>
                      </FormGroup>
                      {Boolean(touched.languages) && Boolean(errors.languages) && (
                        <FormHelperText error>{errors.languages}</FormHelperText>
                      )}
                    </FormControl>
                  </div>
                  <FormControl className={styles.formBox}>
                    <FormLabel className={styles.formLabel}>
                      Date, Time and DateTime inputs
                    </FormLabel>
                    <Field
                      id="date"
                      name="date"
                      validate={(value: string) => validationFunction('date', value)}
                    >
                      {({ field, meta }: FieldProps) => (
                        <Fragment>
                          <KeyboardDatePicker
                            {...field}
                            className={styles.formElement}
                            inputVariant="outlined"
                            invalidDateMessage={meta.error}
                            variant="dialog"
                            format="DD/MM/yyyy"
                            id="datepicker"
                            label="Date picker"
                            value={date}
                            onChange={(fecha) => {
                              handleDateChange(fecha, setFieldValue);
                            }}
                            KeyboardButtonProps={{
                              'aria-label': 'change date',
                            }}
                          />
                        </Fragment>
                      )}
                    </Field>
                    <Field
                      id="time"
                      name="time"
                      validate={(value: string) => validationFunction('time', value)}
                    >
                      {({ field, meta }: FieldProps) => (
                        <Fragment>
                          <KeyboardTimePicker
                            {...field}
                            className={styles.formElement}
                            ampm={false}
                            inputVariant="outlined"
                            invalidDateMessage={meta.error}
                            variant="dialog"
                            format="HH:mm"
                            id="timepicker"
                            label="Time picker"
                            value={time}
                            onChange={(hora) => {
                              handleTimeChange(hora, setFieldValue);
                            }}
                            KeyboardButtonProps={{
                              'aria-label': 'change time',
                            }}
                          />
                        </Fragment>
                      )}
                    </Field>
                    <Field
                      id="datetime"
                      name="datetime"
                      validate={(value: string) => validationFunction('datetime', value)}
                    >
                      {({ field, meta }: FieldProps) => (
                        <Fragment>
                          <KeyboardDateTimePicker
                            {...field}
                            className={styles.formElement}
                            ampm={false}
                            inputVariant="outlined"
                            invalidDateMessage={meta.error}
                            variant="dialog"
                            format="DD/MM/yyyy HH:mm"
                            id="datetimepicker"
                            label="DateTime picker"
                            value={dateTime}
                            onChange={(fechahora) => {
                              handleDateTimeChange(fechahora, setFieldValue);
                            }}
                            KeyboardButtonProps={{
                              'aria-label': 'change datetime',
                            }}
                          />
                        </Fragment>
                      )}
                    </Field>
                  </FormControl>
                  <FormControl className={styles.formBox}>
                    <Field id="include" name="include">
                      {() => (
                        <Autocomplete
                          autoComplete
                          autoHighlight
                          multiple
                          id="include"
                          options={words}
                          onChange={(e, includeArray) => {
                            noop(e);
                            handleIncludeChange(includeArray, setFieldValue);
                          }}
                          getOptionLabel={(option) => {
                            // Value selected with enter, right from the input
                            if (typeof option === 'string') {
                              return option;
                            }
                            // Add "xxx" option created dynamically
                            if (option.inputValue) {
                              return option.inputValue;
                            }
                            // Regular option
                            return option.word;
                          }}
                          filterOptions={(options, params) => {
                            const filtered = filter(options, params);
                            // Suggest the creation of a new value
                            if (params.inputValue !== '') {
                              filtered.push({
                                inputValue: params.inputValue,
                                word: params.inputValue,
                              });
                            }

                            return filtered;
                          }}
                          filterSelectedOptions
                          freeSolo
                          clearOnBlur
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              variant="outlined"
                              label="Palabras a incluir"
                              placeholder="Agregar"
                            />
                          )}
                        />
                      )}
                    </Field>
                  </FormControl>
                  <FormControl className={styles.formBox}>
                    <FormLabel className={styles.formLabel}>{i18n.get('FORM_ITEM_LIST')}</FormLabel>
                    <FieldArray name="itemsList">
                      {({ push, remove }) => (
                        <Fragment>
                          {values.itemsList.map((_, index) => (
                            <Grid
                              container
                              justify="space-between"
                              alignItems="center"
                              spacing={1}
                              key={index}
                              className={styles.formElement}
                            >
                              <Grid item xs={6}>
                                <Field name={`itemsList.${index}.item`}>
                                  {() => (
                                    <TextField
                                      fullWidth
                                      size="small"
                                      variant="outlined"
                                      label={i18n.get('FORM_ITEM')}
                                    />
                                  )}
                                </Field>
                              </Grid>
                              <Grid item xs={4}>
                                <Field name={`itemsList.${index}.amount`}>
                                  {() => (
                                    <TextField
                                      fullWidth
                                      size="small"
                                      variant="outlined"
                                      type="number"
                                      label={i18n.get('FORM_AMOUNT')}
                                    />
                                  )}
                                </Field>
                              </Grid>
                              <Grid item xs={2}>
                                <IconButton
                                  size="small"
                                  disabled={isSubmitting}
                                  onClick={() => remove(index)}
                                >
                                  <DeleteIcon color="error" />
                                </IconButton>
                              </Grid>
                            </Grid>
                          ))}
                          <Grid container justify="flex-start">
                            <Grid item xs={5}>
                              <Button
                                disabled={isSubmitting}
                                variant="outlined"
                                color="primary"
                                onClick={() => push(emptyItemList)}
                              >
                                {i18n.get('FORM_ADD_BUTTON')}
                              </Button>
                            </Grid>
                          </Grid>
                        </Fragment>
                      )}
                    </FieldArray>
                  </FormControl>
                  <FormControl className={styles.formBox}>
                    <Field id="rememberme" name="rememberme" type="checkbox">
                      {({ field }: FieldProps) => (
                        <FormControlLabel
                          label="Remember me"
                          control={
                            <Switch
                              {...field}
                              checked={field.checked}
                              onChange={handleChange}
                              color="primary"
                              inputProps={{ 'aria-label': 'remember me checkbox' }}
                            />
                          }
                        />
                      )}
                    </Field>
                  </FormControl>
                  <div className={styles.buttonBox}>
                    <Button variant="contained" type="reset" disabled={isSubmitting}>
                      Reset
                    </Button>
                    <Button
                      color="primary"
                      variant="contained"
                      type="submit"
                      disabled={isSubmitting}
                      endIcon={!isSubmitting && <SendIcon />}
                    >
                      {isSubmitting ? <CircularProgress size={24} /> : 'Submit'}
                    </Button>
                  </div>
                </MuiPickersUtilsProvider>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
};

export default FormComponent;
