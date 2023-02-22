import React from 'react';
import { nanoid } from 'nanoid';
import './leftSpace.css';
import { sortPrice } from '../../../ts/objects/objects';

function LeftSpace() {
  return (
    <div className='left_space_wrap'>
      <div className='left_space_btn'>
        <button>Bce <br /> цветы</button>
        <button>Bce <br /> подарки</button>
        <button>Букеты <br /> из конфет</button>
        <button>Цветы <br /> в стекле</button>
        <button>Разное</button>
        <button>Сертификаты</button>
      </div>
      <select>
        {sortPrice.map((item) => (
          <option key={nanoid()}>{item}</option>
        ))}
      </select>

      <select>
        {sortPrice.map((item) => (
          <option key={nanoid()}>{item}</option>
        ))}
      </select>

    </div>
  );
}

export { LeftSpace };
