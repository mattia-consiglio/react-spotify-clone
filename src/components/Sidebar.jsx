import React from "react";
import {
	Button,
	Col,
	Container,
	Form,
	InputGroup,
	Nav,
	Navbar,
	Row,
} from "react-bootstrap";
import logo from "../assets/logo/logo.png";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
	const location = useLocation();
	console.log(location);

	return (
		<Col as="aside" xs={2} id="sidebar">
			<Navbar expand="md" fixed="left" className="justify-content-between">
				<Container className="flex-column align-items-start">
					<Navbar.Brand href="#home">
						<img src={logo} alt="Spotify Logo" width="131" height="40" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav>
							<ul>
								<li>
									<Link
										to="/"
										className={
											"nav-link d-flex align-items-center nav-item" +
											(location.pathname === "/" ? " active" : "")
										}
									>
										<i className="bi bi-house-door-fill"></i>&nbsp; Home
									</Link>
								</li>
								<li>
									<Link
										to="/library"
										className={
											"nav-link d-flex align-items-center nav-item" +
											(location.pathname === "/library" ? " active" : "")
										}
									>
										<i className="bi bi-book-fill"></i>&nbsp; Your Library
									</Link>
								</li>
								<li>
									<InputGroup className="mt-3">
										<Form.Control
											type="text"
											placeholder="Search"
											aria-label="Search"
										/>
										<div className="input-group-append">
											<Button
												variant="outline-secondary"
												size="sm"
												className="h-100"
											>
												GO
											</Button>
										</div>
									</InputGroup>
								</li>
							</ul>
						</Nav>
					</Navbar.Collapse>
				</Container>
				<div className="nav-btn">
					<Button className="signup-btn" variant="">
						Sign Up
					</Button>
					<Button className="login-btn" variant="">
						Login
					</Button>
					<div>
						<a href="#">Cookie Policy</a> | <a href="#"> Privacy</a>
					</div>
				</div>
			</Navbar>
		</Col>
	);
};
