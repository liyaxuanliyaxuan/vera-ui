import './style';

import React, { useEffect, useState } from 'react';
import t, { number, string } from 'prop-types';

import { Props } from './interface';
import cn from 'classnames';
import { render } from 'react-dom';

// TODO 添加动画

interface IToastItem {
  id?: number;
  text?: string;
  durition?: number;
  onClose?: any;
}

class ToastContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toastList: [],
    };
  }

  pushToastItem = (item: IToastItem) => {
    this.setState(pre => ({ ...pre, toastList: [...pre.toastList, item] }));
  };

  popToastItem = (id: number) => {
    this.setState(pre => ({ ...pre, toastList: pre.toastList.filter(item => item.id !== id) }));
  };

  render() {
    return this.state.toastList
      .reverse()
      .map(item => <ToastItem key={item.id} onClose={this.popToastItem} {...item} />);
  }
}

const ToastItem: React.FC<IToastItem> = ({ text, durition, onClose, id }) => {
  useEffect(() => {
    let timer = setTimeout(() => {
      onClose(id);
    }, durition);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  const classNames = cn({
    'base-message': true,
  });
  return (
    <div className={'message-container'}>
      <div className={classNames}>{text}</div>
    </div>
  );
};

export class Toast {
  public static info(text: string, durition?: number = 3000) {
    const div = document.createElement('div');
    const container = document.body.appendChild(div);
    const containerRef = render(<ToastContainer />, container);
    containerRef.pushToastItem({ id: Date.now(), text, durition, number });
  }
}

export default Toast;
