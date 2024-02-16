import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Sidebar } from "./components/Sidebar";

import store from "./redux/store";
import { Provider } from "react-redux";
import { Player } from "./components/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Library } from "./components/Library";
import { Home } from "./components/Home";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Container fluid>
					<Row>
						<Sidebar />
						<Col as="main" xs={12} md={9} className="offset-md-3">
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/library" element={<Library />} />
							</Routes>
						</Col>
					</Row>
				</Container>
				<Player />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
