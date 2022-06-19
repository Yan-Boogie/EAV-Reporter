import {
  useState, useImperativeHandle, forwardRef, ChangeEvent, memo,
} from 'react';
import { TextField, TextFieldProps } from 'ui-modules';

export type InputFieldProps = Omit<TextFieldProps, 'value' | 'onChange'>;

export type RefProps = any;

const InputField = forwardRef<RefProps, InputFieldProps>((props, ref) => {
  const [value, setValue] = useState<string>('');

  useImperativeHandle(ref, () => ({
    getValue: () => value,
  }));

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return <TextField {...props} value={value} onChange={handleChange} />;
});

export default memo(InputField, () => true);
