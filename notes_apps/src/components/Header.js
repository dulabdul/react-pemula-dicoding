import React from "react";
const onHamburger = () =>{
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('slide')
}
const Header = () =>{
    return (
        <>
		<nav>
			<div className="logo">
				<p className="title-logo">
					<i className="fa-solid fa-book"></i>Notes Apps
				</p>
			</div>

			<ul>
				<li><a href="#">Home</a></li>
			</ul>

			<div className="menu-toggle" onClick = {() => onHamburger()}>
				<input type="checkbox" />
				<span></span>
				<span></span>
				<span></span>
			</div>
		</nav>
        </>
    )
}

export default Header;