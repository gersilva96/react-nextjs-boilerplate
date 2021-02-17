/**
 * @packageDocumentation
 * @module Views/Components/Form
 * UI that has the Form.
 */

import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress, MenuItem, FormControlLabel } from '@material-ui/core';
import MuiTextField from '@material-ui/core/TextField';
import { TextField, Switch } from 'formik-material-ui';
import { TimePicker, DatePicker, DateTimePicker } from 'formik-material-ui-pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Autocomplete, AutocompleteRenderInputParams } from 'formik-material-ui-lab';
import Box from '@material-ui/core/Box';
import { top100Films } from './data';

import styles from './index.scss';

const FormComponent = (): JSX.Element => {
  interface Values {
    email: string;
  }

  const ranges = [
    {
      value: 'none',
      label: 'None',
    },
    {
      value: '0-20',
      label: '0 to 20',
    },
    {
      value: '21-50',
      label: '21 to 50',
    },
    {
      value: '51-100',
      label: '51 to 100',
    },
  ];

  return (
    <div className={styles.mainContainer}>
      <Formik
        initialValues={{
          email: '',
          nombre: 'John',
          apellido: 'Doe',
          password: '',
          select: 'none',
          tags: [],
          rememberMe: true,
          date: new Date(),
          time: new Date(),
          dateTime: new Date(),
          toggle: [],
          autocomplete: [],
          freeSoloMultiple: [],
        }}
        validate={(values) => {
          const errors: Partial<Values> = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
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
        {({ submitForm, isSubmitting, touched, errors }) => (
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Form>
              <Box margin={1}>
                <Field
                  component={TextField}
                  inputProps={{ style: { fontSize: 25 } }}
                  inputlabelprops={{ style: { fontSize: 18 } }}
                  name="email"
                  type="email"
                  label="Email"
                  helperText="Please Enter Email"
                />
              </Box>
              <Box margin={1}>
                <Field
                  component={TextField}
                  inputProps={{ style: { fontSize: 25 } }}
                  inputlabelprops={{ style: { fontSize: 18 } }}
                  name="nombre"
                  type="text"
                  label="Nombre"
                  helperText="Please Enter Nombre"
                />
              </Box>
              <Box margin={1}>
                <Field
                  component={TextField}
                  inputProps={{ style: { fontSize: 25 } }}
                  inputlabelprops={{ style: { fontSize: 18 } }}
                  name="apellido"
                  type="text"
                  label="Apellido"
                  helperText="Please Enter Apellido"
                />
              </Box>
              <Box margin={1}>
                <Field
                  component={TextField}
                  inputProps={{ style: { fontSize: 25 } }}
                  inputlabelprops={{ style: { fontSize: 18 } }}
                  type="password"
                  label="Password"
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
                  label="Remember Me"
                />
              </Box>
              <Box margin={1}>
                <Field
                  component={TextField}
                  type="text"
                  name="select"
                  label="With Select"
                  select
                  variant="standard"
                  helperText="Please select Range"
                  margin="normal"
                  inputlabelprops={{
                    shrink: true,
                  }}
                >
                  {ranges.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Field>
              </Box>

              <Box margin={1}>
                <Field component={TimePicker} name="time" label="Time" />
              </Box>

              <Box margin={1}>
                <Field component={DatePicker} name="date" label="Date" />
              </Box>
              <Box margin={1}>
                <Field component={DateTimePicker} name="dateTime" label="Date Time" />
              </Box>

              <Box margin={1}>
                <Field
                  name="autocomplete"
                  multiple
                  component={Autocomplete}
                  options={top100Films}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  getOptionLabel={(option: any) => option.title}
                  style={{ width: 300 }}
                  renderInput={(params: AutocompleteRenderInputParams) => (
                    <MuiTextField
                      {...params}
                      error={touched.autocomplete && !!errors.autocomplete}
                      helperText={touched.autocomplete && errors.autocomplete}
                      label="Autocomplete"
                      variant="outlined"
                    />
                  )}
                />
              </Box>
              {isSubmitting && <LinearProgress />}

              <Box margin={1}>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  onClick={submitForm}
                >
                  Submit
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
