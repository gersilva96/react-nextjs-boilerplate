/**
 * @packageDocumentation
 * @module Views/Components/Form
 * UI that has the Form.
 */

import React from 'react';
import { Formik, Form, Field, FieldProps } from 'formik';
import {
  TextField,
  Button,
  CircularProgress,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@material-ui/core';
import Swal from 'sweetalert2';
import i18n from '~/internationalization';

const initialValues = { email: '', password: '', gender: '' };

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
    default:
      break;
  }
  return error;
};

const WithMaterialUI = (): JSX.Element => (
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
    {({ handleChange, handleSubmit, isSubmitting, values }) => (
      <Form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Normal inputs</FormLabel>
          <Field
            validate={(value: string) => validationFunction('email', value)}
            id="email"
            name="email"
          >
            {({ field, meta }: FieldProps) => (
              <TextField
                {...field}
                fullWidth
                label="Email"
                error={meta.touched && Boolean(meta.error)}
                variant="outlined"
                helperText={meta.touched && Boolean(meta.error) && meta.error}
                onChange={handleChange}
                value={values.email}
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
                label="Password"
                error={meta.touched && Boolean(meta.error)}
                variant="outlined"
                type="password"
                helperText={meta.touched && Boolean(meta.error) && meta.error}
                onChange={handleChange}
                value={values.password}
              />
            )}
          </Field>
        </FormControl>
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup aria-label="gender" value={values.gender} onChange={handleChange}>
            <Field type="radio" name="gender" value="female">
              {({ field }: FieldProps) => (
                <FormControlLabel {...field} control={<Radio />} label="Female" />
              )}
            </Field>
            <Field type="radio" name="gender" value="male">
              {({ field }: FieldProps) => (
                <FormControlLabel {...field} control={<Radio />} label="Male" />
              )}
            </Field>
            <Field type="radio" name="gender" value="other">
              {({ field }: FieldProps) => (
                <FormControlLabel {...field} control={<Radio />} label="Other" />
              )}
            </Field>
          </RadioGroup>
        </FormControl>
        <Button color="primary" variant="contained" fullWidth type="submit" disabled={isSubmitting}>
          {isSubmitting ? <CircularProgress size={24} /> : 'Submit'}
        </Button>
      </Form>
    )}
  </Formik>
);

export default WithMaterialUI;
