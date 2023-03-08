import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Dashboard } from './components/Dashboard';
import { useGetPokemonQuery } from './slice/apiSlice';

function App() {
	return (
		<Container>
			<Row className="header">
				<Col className="p-3">HEADER</Col>
			</Row>
			<Row>
				<Col className="side-panel py-4">
					All the Pokémon data you'll ever need in one place, easily accessible
					through a modern RESTful API.
				</Col>
				<Col md={10}>
					<Dashboard />
				</Col>
			</Row>
			<Row className="p-3 footer">
				<Col>FOOTER</Col>
			</Row>
		</Container>
	);
}

export default App;
