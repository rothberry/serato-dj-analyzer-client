import React, { useState } from "react"
import './Nav.css'
import { NavLink } from "react-router-dom"

const Nav = () => {
	const [active, setActive] = useState("home")
	const pendingFunc = ({ isActive, isPending }) =>
		isPending ? "pending" : isActive ? "active" : ""
	return (
		<div className="navbar">
			<NavLink to={"/"} className={pendingFunc}>
				Home
			</NavLink>
			<NavLink to={"/upload"} className={pendingFunc}>
				Upload
			</NavLink>
		</div>
	)
}

export default Nav
