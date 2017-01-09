import React from 'react';

const DatePicker = (props) => (
	<div className="select__wrapper date">
		<div className=""><p></p></div>
		<div className="select__value date__value"><p></p></div>
			<div className="select__options">
				<input
					className="select__option"
					id="selectDate"
					onFocus={props.dateFocus}
					name={props.date}
					type={props.inputType}
					value={props.content}
					onChange={props.controlFunc}
					placeholder={props.placeholder} />
			</div>
	</div>
);

DatePicker.propTypes = {
	inputType: React.PropTypes.oneOf(['text', 'date']).isRequired,
	title: React.PropTypes.string,
	name: React.PropTypes.string,
	controlFunc: React.PropTypes.func.isRequired,
	content: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number,
	]).isRequired,

	placeholder: React.PropTypes.string,

};



export default DatePicker;
