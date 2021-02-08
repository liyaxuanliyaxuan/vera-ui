import { Button } from 'happy-ui';
import React from 'react';

export default () => (
  <Button
    bgColor="primary"
    onClick={e => {
      console.log(e.target);
    }}
    text="这是一个button"
    style={{ color: '#fff' }}
  />
);
