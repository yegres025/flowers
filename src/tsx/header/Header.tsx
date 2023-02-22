import React from 'react';
import './Header.css'
function Header() {
  return (
    <nav className='header_wrap'>
        <div>
      <button>Букеты</button>
      <button>Живые цветы</button>
      <button>Подарки</button>
      <button>Наборы</button>
      <button>Разное</button>
      </div>    

      <div>
      <button>Акции</button>
      <button>❤</button>
      <button>🔎</button>
      <button>корзинка</button>
      </div>
    </nav>
  );
}

export { Header }