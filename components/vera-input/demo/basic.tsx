import { Button, VeraInput } from 'happy-ui';
import React, { useCallback, useRef, useState } from 'react';

function useBind() {
  const [val, setVal] = useState('');
  const onChange = useCallback(e => {
    setVal(e.target.value);
    // filter
  }, []);

  return {
    value: val,
    onChange,
  };
}

function InputDisplay() {
  const { value: value1, onChange: onChange1 } = useBind();
  const { value: value2, onChange: onChange2 } = useBind();
  return (
    <>
      <VeraInput value={value1} onChange={onChange1} />
      <VeraInput type={'password'} value={value2} onChange={onChange2} />
      <Button
        text="提交"
        onClick={() => {
          console.log(value1, value2);
        }}
      />
    </>
  );
}

export default InputDisplay;
