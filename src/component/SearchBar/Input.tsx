import React, { ChangeEventHandler, FocusEventHandler } from 'react';

interface Props {
  onFocus: FocusEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

function Input({ onFocus, onBlur, onChange }: Props) {
  return <input onFocus={onFocus} onBlur={onBlur} onChange={onChange} />;
}

export default Input;
