import React, { Component } from 'react';
import Card from './Card';

// CardList component that represents a collection of Company Cards.
class CardList extends Component {
	render() {
		const { companies } = this.props;
		const cardsArray = companies.map(company => {
			return(
				<Card
					id={ company.id }
					key={ company.id }
					name={ company.name }
					logo={ company.logo }
					data={ company.data }
				/>
			);
		});
		if (!cardsArray.length) { return <div className='not_found'>No results found by that name.</div>; }
		return (cardsArray);
	}
}

export default CardList;
