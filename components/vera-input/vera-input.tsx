import './style';

import React, { Fragment } from 'react';

import { Props } from './interface';
import cn from 'classnames';
import t from 'prop-types';

const VeraInput: React.FC<Props> = ({
  children,
  style,
  className,
  placeholder = '',
  value,
  type = 'text',
  onChange,
  ref,

  ...rest
}) => {
  const classNames = cn({
    'base-input': true,
  });
  return (
    <Fragment {...rest}>
      <input
        type={type}
        onChange={onChange}
        value={value}
        ref={ref}
        className={classNames}
        placeholder={placeholder}
      ></input>
    </Fragment>
  );
};

export default VeraInput;
