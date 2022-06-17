import React from 'react';
import MuiFormControl, { FormControlProps as MuiFormControlProps } from '@mui/material/FormControl';

export type FormControlProps = Omit<MuiFormControlProps, 'variant'>;

export function FormControl(props: FormControlProps) {
  const { children, ...rest } = props;

  return (
    <MuiFormControl variant="standard" {...rest}>
      {children}
    </MuiFormControl>
  );
}
