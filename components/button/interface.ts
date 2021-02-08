export type Color = 'primary' | 'warning';
export type ColorMap = Record<Color, string>;
export type Size = 'small' | 'middle' | 'large';
export type SizeMap = Record<Size, string>;

import { SyntheticEvent } from 'react';

export interface ButtonProps {
  bgColor?: 'primary' | 'warning';
  fontColor?: string;
  size?: 'small' | 'middle' | 'large';
  text?: string;
  onClick?: (e: SyntheticEvent) => void;
  onMouseEnter?: (e: SyntheticEvent) => void;
  onMouseLeave?: (e: SyntheticEvent) => void;
  disabled?: boolean;
  rounded?: boolean;
  style?: any;
  className: string[] | string;
}
