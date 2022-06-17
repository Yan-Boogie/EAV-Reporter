import React from 'react';
import MuiTextField, { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';

export type TextFieldProps = Omit<MuiTextFieldProps, 'variant'>;

export function TextField(props: TextFieldProps) {
  const { ...rest } = props;

  return <MuiTextField variant="standard" {...rest} />;
}
