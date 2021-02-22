/**
 * @packageDocumentation
 * @module Views/Components/Form
 * UI that has the Form.
 */

import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import {
  Button,
  LinearProgress,
  MenuItem,
  FormControlLabel,
  Typography,
  Grid,
} from '@material-ui/core';
import MuiTextField from '@material-ui/core/TextField';
import { TextField, Switch } from 'formik-material-ui';
import { TimePicker, DatePicker, DateTimePicker } from 'formik-material-ui-pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Autocomplete, AutocompleteRenderInputParams } from 'formik-material-ui-lab';
import Box from '@material-ui/core/Box';
import { top100Films } from './data';
import i18n from '~/internationalization';

import styles from './index.scss';

const FormComponent = (): JSX.Element => {
  interface Values {
    email: string;
  }

  const ranges = [
    {
      value: 'None',
    },
    {
      value: '0-20',
    },
    {
      value: '21-50',
    },
    {
      value: '51-100',
    },
  ];

  const emptyItemList = {
    item: '',
    amount: 0,
  };
  return (
    <div className={styles.mainContainer}>
      <Formik
        initialValues={{
          email: '',
          nombre: 'John Doe',
          password: '',
          select: 'None',
          tags: [],
          rememberMe: true,
          date: new Date(),
          time: new Date(),
          dateTime: new Date(),
          toggle: [],
          autocomplete: [],
          freeSoloMultiple: [],
          itemsList: [emptyItemList],
        }}
        validate={(values) => {
          const errors: Partial<Values> = {};
          if (!values.email) {
            errors.email = i18n.get('FORM_REQUIRED');
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = i18n.get('FORM_EMAIL_INVALID');
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            // eslint-disable-next-line no-alert
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
      >
        {({ submitForm, isSubmitting, errors, values }) => (
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Form>
              <Box margin={1}>
                <Field
                  component={TextField}
                  inputProps={{ style: { fontSize: 25 } }}
                  inputlabelprops={{ style: { fontSize: 18 } }}
                  name="email"
                  type="email"
                  label={i18n.get('FORM_EMAIL')}
                  helperText={i18n.get('FORM_EMAIL_HELPER')}
                />
              </Box>
              <Box margin={1}>
                <Field
                  component={TextField}
                  inputProps={{ style: { fontSize: 25 } }}
                  inputlabelprops={{ style: { fontSize: 18 } }}
                  type="password"
                  label={i18n.get('FORM_PASSWORD')}
                  helperText={i18n.get('FORM_PASSWORD_HELPER')}
                  name="password"
                />
              </Box>
              <Box margin={1}>
                <FormControlLabel
                  control={
                    <Field
                      component={Switch}
                      inputProps={{ style: { fontSize: 25 } }}
                      inputlabelprops={{ style: { fontSize: 18 } }}
                      type="checkbox"
                      name="rememberMe"
                    />
                  }
                  label={i18n.get('FORM_SWITCH')}
                />
              </Box>
              <Box margin={1}>
                <Field
                  component={TextField}
                  type="text"
                  name="select"
                  select
                  variant="standard"
                  label={i18n.get('FORM_SELECTOR')}
                  helperText={i18n.get('FORM_SELECTOR_HELPER')}
                  margin="normal"
                  inputlabelprops={{
                    shrink: true,
                  }}
                >
                  {ranges.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </Field>
              </Box>

              <Box margin={1}>
                <Field component={TimePicker} name="time" label={i18n.get('FORM_TIME')} />
              </Box>

              <Box margin={1}>
                <Field component={DatePicker} name="date" label={i18n.get('FORM_DATE')} />
              </Box>
              <Box margin={1}>
                <Field
                  component={DateTimePicker}
                  name="dateTime"
                  label={i18n.get('FORM_DATE_TIME')}
                />
              </Box>

              <Box margin={1}>
                <Field
                  name="autocomplete"
                  // multiple ----> In case you want to allow multiple selections
                  component={Autocomplete}
                  options={top100Films}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  getOptionLabel={(option: any) => option.title}
                  style={{ width: 300 }}
                  renderInput={(params: AutocompleteRenderInputParams) => (
                    <MuiTextField {...params} label={i18n.get('FORM_AUTOCOMPLETE')} />
                  )}
                />
              </Box>
              {isSubmitting && <LinearProgress />}

              <FieldArray name="itemsList">
                {({ push, remove }) => (
                  <React.Fragment>
                    <Grid item>
                      <Typography variant="body2">{i18n.get('FORM_ITEM_LIST')}</Typography>
                    </Grid>

                    {values.itemsList.map((_, index) => (
                      <Grid container item key={index} spacing={1}>
                        <Grid item container spacing={2} xs={6}>
                          <Grid item xs={4}>
                            <Field
                              fullWidth
                              name={`itemsList.${index}.item`}
                              component={TextField}
                              label={i18n.get('FORM_ITEM')}
                            />
                          </Grid>
                          <Grid item xs={2}>
                            <Field
                              fullWidth
                              name={`itemsList.${index}.amount`}
                              component={TextField}
                              type="number"
                              label={i18n.get('FORM_AMOUNT')}
                            />
                          </Grid>
                          <Grid item xs>
                            <Button
                              disabled={isSubmitting}
                              variant="contained"
                              onClick={() => remove(index)}
                            >
                              {i18n.get('FORM_DELETE_BUTTON')}
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    ))}

                    <Grid item>
                      {typeof errors.itemsList === 'string' ? (
                        <Typography color="error">{errors.itemsList}</Typography>
                      ) : null}
                    </Grid>

                    <Grid item>
                      <Button
                        disabled={isSubmitting}
                        variant="contained"
                        onClick={() => push(emptyItemList)}
                      >
                        {i18n.get('FORM_ADD_BUTTON')}
                      </Button>
                    </Grid>
                  </React.Fragment>
                )}
              </FieldArray>

              <Box margin={1}>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  onClick={submitForm}
                >
                  {i18n.get('FORM_SUBMIT_BUTTON')}
                </Button>
              </Box>
            </Form>
          </MuiPickersUtilsProvider>
        )}
      </Formik>
    </div>
  );
};

export default FormComponent;
