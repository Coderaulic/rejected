import $ from 'jquery';
import React, { Component } from 'react';
import imgStamp from '../img/stamp.png';
import imgRejected from '../img/rejected.png';
import imgGhosted from '../img/ghosted.jpg'
import imgNoMessages from '../img/noMessages.jpg';
import imgNoResponse from '../img/noResponse.png';
import imgBeingGhosted from '../img/being-ghosted.jpg';
import { Modal, Button, Glyphicon } from 'react-bootstrap';

import jab from '../sfx/jab.mp3';
import thump from '../sfx/thump.mp3';
import splat from '../sfx/splat.mp3';
import whack from '../sfx/whack.mp3';
import poStamp from '../sfx/post-office-stamp.mp3';
import rubberStamp from '../sfx/rubber-stamp.mp3';


// Class to represent the application details in a modal.
// Added A/D and LeftArrow/RightArrow keys to navigate prev/next easier, W/UpArrow for close modal.
// Opening/Closing of modal handled by Redux: 'onUpdateActiveCardID', sets the activeCardID back to -1 on close.
// From Card click, it sets the id to that card. This way only the active card's modal is mounted, instead of all at once.
// Not the react way to use jquery but needed for custom animation... and had fun implementing sfx...
class ApplicationDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: 0,
			maxPages: props.data.headings.length
		}
		this.next = this.next.bind(this);
		this.prev = this.prev.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.stampRejected = this.stampRejected.bind(this);
		this.SFX = [
			new Audio(jab), new Audio(thump), new Audio(splat),
			new Audio(whack), new Audio(poStamp), new Audio(rubberStamp)
		];
		this.ghostedImg = [imgNoMessages, imgNoResponse, imgBeingGhosted, imgGhosted];
	}

	componentDidMount() { document.addEventListener('keydown', this.handleKeyDown); }

	componentWillUnmount() { document.removeEventListener('keydown', this.handleKeyDown); }

	componentDidUpdate() {
		const { currentPage, maxPages } = this.state;
		const { type } = this.props.data;
		if ((currentPage === maxPages) && type[maxPages] !== 'G') { this.stampRejected(); }
	}

	handleKeyDown(event) {
		const keyDown = event.key.toLowerCase();
		if (keyDown === 'a' || keyDown === 'arrowleft') { this.prev(); }
		if (keyDown === 'd' || keyDown === 'arrowright') { this.next(); }
		if (keyDown === 'w' || keyDown === 'arrowup') { this.handleClose(); }
	}

	handleClose(event) {
		this.props.onUpdateActiveCardID(-1);
		if (event) { event.stopPropagation(); }
	}

	next() {
		const { currentPage, maxPages } = this.state;
		if (currentPage < maxPages) { this.setState({ currentPage: currentPage + 1 }); }
	}

	prev() {
		const { currentPage } = this.state;
		if (currentPage > 0) { this.setState({ currentPage: currentPage - 1 }); }
	}

	stampRejected() {
		$('.stamp').fadeIn('fast');
		$('.stamp').animate({ opacity: 1 }, 300);
	
		$('.stamp').animate({ width:434, height:387, top:57, left:100}, 600, function() {
			$('#rejection').css('opacity', '1');
			$(this).delay(500).animate({ opacity: 0, width:890, height:890, top:78, left: 100 }, 600);
			$(this).animate({ opacity: 0, width: 0, height: 0, top: 10, left: 10 }, 100);
		});
		setTimeout(()=> { this.SFX[Math.floor(Math.random() * (this.SFX.length))].play(); }, 1000);
	}

	rejectedComponent() {
		return (
			<div id='stampContainer'>
				<div id='module-01' className='module'>
					<div className='redInk'>
						<img
							alt='no img'
							id='rejection'
							src={ imgRejected }
							style={{ width: '200px', height: '220px', marginTop: '150px' }}
						/>
					</div>
					<div className={'stamp'}>
						<img
							alt='no img'
							src={ imgStamp }
							style={{ width: '100%', height:'100%', zIndex: 50, position: 'absolute' }}
						/>
					</div>
				</div>
			</div>
		);
	}
	
	ghostedComponent() {
		return (
			<div>
				<img
					alt='no img'
					className='ghosted'
					src={ this.ghostedImg[Math.floor(Math.random() * (this.ghostedImg.length))] }
				/>
			</div>
		);
	}

	get modalFooter() {
		const { currentPage, maxPages } = this.state;
		const disablePrev = (currentPage === 0);
		const disableNext = (currentPage === maxPages);
		const glyphStylePrev = { color: disablePrev ? '#d1d1e0' : '#00ff00' }
		const glyphStyleNext = { color: disableNext ? '#d1d1e0' : '#00ff00' }
		return (
			<React.Fragment>
				<Button disabled={ disablePrev } onClick={ this.prev }>
					<Glyphicon glyph='backward' style={ glyphStylePrev }></Glyphicon>
				</Button>
				<Button onClick={ this.handleClose }><strong>Close</strong></Button>
				<Button disabled={ disableNext } onClick={ this.next }>
					<Glyphicon glyph='forward' style={ glyphStyleNext }></Glyphicon>
				</Button>
			</React.Fragment>
		);
	}

	get	modalDetails() {
		const { id, activeCardID } = this.props;
		const { maxPages, currentPage } = this.state;
		const { headings, details, type } = this.props.data;
		
		// Headings + Body Details
		let headingsDetails = '';
		let correspondenceDetails = [];
		let fontFamily = null;
		if (currentPage <= maxPages - 1) {
			let key = 0;
			fontFamily = type[currentPage] === 'E' ? 'email' : 'thoughts';

			const currentDetails = Array.from(details[currentPage]);
			headingsDetails = (headings[currentPage]);
			correspondenceDetails = currentDetails.map(detail => {
				return (
					<p className={ `${fontFamily}` } key={ key++ }>
						{ detail }
						<br></br>
					</p>
				);
			});
			correspondenceDetails.pop();
			correspondenceDetails.pop();
			const signature = (
				<p className={ `${fontFamily}` } key={ key++ }>
					{ currentDetails[currentDetails.length - 2] }
					<br></br>
					{ currentDetails[currentDetails.length - 1] }
				</p>
			);
			correspondenceDetails.push(signature);
		} else {
			headingsDetails = type[maxPages] === 'G' ? 'Ghosted!' : 'Rejected!';
			correspondenceDetails = headingsDetails === 'Rejected!'
				? this.rejectedComponent() : this.ghostedComponent();
		}

		const showModal = id === activeCardID;
		let bodyStyle = { height: '500px', overflowY: 'auto' };
		if (currentPage === maxPages) { bodyStyle = null; }

		const appDetails = (
			<div className='modalContainer' onClick={ (e) => { e.stopPropagation(); }}>
				<Modal
					size='lg'
					fade='false'
					id='modal_body'
					backdrop='static'
					keyboard={ true }
					show={ showModal }
					animation={ false }
					onHide={ this.handleClose }
				>
					<Modal.Header className={`modal_header ${fontFamily}`} closeButton>
						<Modal.Title>{ headingsDetails }</Modal.Title>
					</Modal.Header>
					<Modal.Body style={ bodyStyle }>
						{ correspondenceDetails }
					</Modal.Body>
					<Modal.Footer className='modal_footer'>
						{ this.modalFooter }
					</Modal.Footer>
				</Modal>
			</div>
		);
		return appDetails;
	}

	render() {
		return this.modalDetails;
	}
}

export default ApplicationDetails;
