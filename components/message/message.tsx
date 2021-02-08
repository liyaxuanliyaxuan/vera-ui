import './style';

import { Props } from './interface';
import React from 'react';
import cn from 'classnames';
import { render } from 'react-dom';
import t from 'prop-types';

const Message: React.FC<Props> = ({ children, style, className, text, ...rest }) => {
  const classNames = cn({
    'base-message': true,
  });
  return (
    <div className={classNames} style={style} {...rest}>
      {text}
    </div>
  );
};
// TODO 添加动画
class message {
  public static info(text: string): void {
    const div = document.createElement('div');
    div.setAttribute('id', 'message-container');
    const container = document.body.appendChild(div);
    render(<Message text={text} />, container);
    setTimeout(() => {
      document.body.removeChild(container);
    }, 3000);
  }
}

export default message;
