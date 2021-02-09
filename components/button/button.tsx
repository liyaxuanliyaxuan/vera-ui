import './style';

import { ButtonProps, ColorMap, SizeMap } from './interface';

import React from 'react';
import { SyntheticEvent } from 'react';
import cn from 'classnames';
import t from 'prop-types';

const fontSizes: SizeMap = {
  small: '16',
  middle: '24',
  large: '32',
};

const colors: ColorMap = {
  primary: '#1B90FF',
  warning: '#FF6766',
};

// 枚举好的做法是根据名称进行值相等的比较

const Button: React.FC<ButtonProps> = ({
  children,
  text = 'button',
  bgColor = 'primary',
  size = 'middle',
  fontColor = '#FFF',
  onClick,
  onMouseEnter,
  onMouseLeave,
  disabled = false,
  rounded = true,
  style,
  className,
  ...rest
}) => {
  const btnClassNames = cn({
    'base-btn': true,
    'btn-disabled': disabled,
    'round-btn': rounded,
    'warning-btn': bgColor === 'warning',
  });
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={btnClassNames}
      style={{
        background: colors[bgColor],
        fontSize: fontSizes[size],
        color: fontColor,
        ...style,
      }}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
