import React from 'react';

const onHamburger = () => {
  const nav = document.querySelector('nav ul');
  nav.classList.toggle('slide');
};
function Header() {
  return (
    <nav>
      <div className="logo">
        <p className="title-logo">
          <i className="fa-solid fa-book" />
          Notes Apps
        </p>
      </div>

      <ul>
        <li><a href="#home">Home</a></li>
      </ul>

      <div className="menu-toggle" onClick={() => onHamburger()}>
        <input type="checkbox" />
        <span />
        <span />
        <span />
      </div>
    </nav>
  );
}

export default Header;
