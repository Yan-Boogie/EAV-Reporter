import {
  useState, useImperativeHandle, forwardRef, memo,
} from 'react';
import { Select, SelectProps, SelectChangeEvent } from 'ui-modules';

export { SelectProps };

export type SelectFieldProps = Omit<SelectProps<string>, 'value' | 'onChange'>;

export type RefProps = any;

const SelectField = forwardRef<RefProps, SelectFieldProps>((props, ref) => {
  const [value, setValue] = useState<string>('');

  useImperativeHandle(ref, () => ({
    getValue: () => value,
  }));

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return <Select {...props} value={value} onChange={handleChange} />;
});

export default memo(SelectField, () => true);
