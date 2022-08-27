import React from 'react';
import './Help.scss';

export default function Help(props) {
    const { showHelp } = props;
    const close = () => {
        return showHelp(false);
    }
  return (
    <div className='help'>
        <div className="close" onClick={close}></div>
        <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual?"</p>
    </div>
  )
}
