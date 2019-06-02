import React, { Component } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { setActiveCardID } from './actions';
import { connect } from 'react-redux';
import ApplicationDetails from './ApplicationDetails';

// Card component that represents a Company Card.
class Card extends Component {
	constructor(props) {
		super(props);
		this.state = { viewed: false };
		this.handleOpen = this.handleOpen.bind(this);
	}

	handleOpen() {
		this.setState({ viewed: true });
		this.props.onUpdateActiveCardID(this.props.id);
	}

	render() {
		const { id, name, logo, activeCardID } = this.props;

		// mark cards that have been viewed by changing frame color.
		const hasBeenSelected = (this.state.viewed) ? 'red' : 'blue';
		const style =`tc pa3 ba b--${ hasBeenSelected } dib br3 pa3 ma2 grow bw2 shadow-5`;

		// only construct modal when selected.
		const detailsComponent = (id === activeCardID) ? <ApplicationDetails { ...this.props } /> : null;
		const toolTip = <Tooltip id={ id }><strong>{ name }</strong></Tooltip>;

		return (
			<div id='card' className={ style } onClick={ this.handleOpen }>
				<OverlayTrigger delayShow={ 300 } placement='bottom' overlay={ toolTip }>
					<img className='card_img' src={ process.env.PUBLIC_URL + logo } alt='no logo found.' />
				</OverlayTrigger>
				{ detailsComponent }
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { activeCardID: state.updateActiveCardID.activeCardID }
}

const mapDispatchToProps = (dispatch) => {
	return { onUpdateActiveCardID: (newID) => dispatch(setActiveCardID(newID)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
