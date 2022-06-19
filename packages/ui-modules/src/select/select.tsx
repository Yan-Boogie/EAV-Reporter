import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MuiSelect, { SelectProps as MuiSelectProps, SelectChangeEvent } from '@mui/material/Select';
import { FormControl, FormControlProps } from '../formControl/formControl';
import { MenuItem, MenuItemProps } from '../menuItem';

export type SelectItem<T> = {
  value: T;
  label: string;
};

export { SelectChangeEvent };

export interface SelectProps<T extends number | string>
  extends Omit<MuiSelectProps<T>, 'autoWitdh' | 'defaultOpen' | 'native'> {
  selectLabel: string;
  menuItemProps?: MenuItemProps;
  formControlProps?: FormControlProps;
  selectItems: SelectItem<T>[];
}

export function Select<T extends number | string>(props: SelectProps<T>) {
  const {
    selectLabel, labelId, formControlProps, selectItems, menuItemProps, ...rest
  } = props;

  const itemSet = new Set(selectItems.map((el) => el.value));

  if (itemSet.size !== selectItems.length) {
    throw new Error('Items value should be identified');
  }

  return (
    <FormControl {...formControlProps}>
      <InputLabel id={labelId}>{selectLabel}</InputLabel>
      <MuiSelect labelId={labelId} autoWidth={false} defaultOpen={false} native={false} {...rest}>
        {selectItems.map((el) => (
          <MenuItem {...menuItemProps} key={el.value} value={el.value}>
            {el.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
}
