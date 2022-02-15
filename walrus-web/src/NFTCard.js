import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// const props = { title: "hola" };
function NFTCard(props) {
	return (
		<Card key={props.key} style={{ maxWidth: "18rem" }}>
			<Card.Img variant="top" src={ props.url } />
			<Card.Body>
				<Card.Title>{ props.title }</Card.Title>
				<Card.Text>
					{props.description}
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default NFTCard;