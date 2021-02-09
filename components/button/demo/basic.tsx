import { Button } from 'happy-ui';
import React from 'react';

export default () => (
  <>
    <Button
      bgColor="primary"
      onClick={e => {
        console.log(e.target);
      }}
      text="按钮"
      style={{ color: '#fff' }}
    />
    <Button
      bgColor="warning"
      onClick={e => {
        console.log(e.target);
      }}
      text="警告"
    />
    <Button
      onClick={e => {
        console.log(e.target);
      }}
      disabled={true}
      text="禁用"
    />
  </>
);
