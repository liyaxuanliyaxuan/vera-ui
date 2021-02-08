import { MutableRefObject, SyntheticEvent } from 'react';

export interface Props {
  placeholder?: string;
  type: 'text' | 'password';
  onChange?: (e: SyntheticEvent) => void;
  value?: string;
  style?: any;
  className?: any;
  ref?:
    | string
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null
    | undefined;
}
