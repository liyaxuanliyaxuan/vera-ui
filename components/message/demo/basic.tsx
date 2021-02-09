import { Button } from 'happy-ui';
import { Message } from 'happy-ui';
import React from 'react';

export default () => (
  <Button
    bgColor="primary"
    text="展示message"
    onClick={() => {
      Message.info('消息提示');
    }}
  />
);
