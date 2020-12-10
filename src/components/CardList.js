import React from 'react';
import Card from './Card';

const CardComponents = ({ robots }) => {
	const cardAray = robots.map((user, i) => {
		return (
			<Card
				key={robots[i].id}
				id={robots[i].id}
				name={robots[i].name}
				emai={robots[i].email}
			/>
		);
	});

	return <div className="container">{cardAray}</div>;
};

export default CardComponents;
