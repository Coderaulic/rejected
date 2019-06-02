import React from 'react';

// Simple component to allow props.children to be scrollable
const Scroll = (props) => {
	return (
		<div className='scroll'>
			{ props.children }
		</div>
	);
}

export default Scroll;
