import React from 'react';
import axios from "axios";

const Currency = (props) => (
	<div className="select__wrapper currency">
		<div className="select__label"><p></p></div>
		<div className="select__value"><p></p></div>

				<select
					name={props.name}
					id="currencySelect"
					value={props.selectedOption}
					onChange={props.controlFunc}
					className="select__options">
					<option value="">{props.placeholder}</option>
					{props.options.map(opt => {
						return (
							<option
								className="select__option"
								key={opt}
								value={opt}>{opt}</option>
							);
						})}
					</select>
	</div>
);

Currency.propTypes = {
	name: React.PropTypes.string.isRequired,
	title: React.PropTypes.string.isRequired,
	options: React.PropTypes.array.isRequired,
	selectedOption: React.PropTypes.string,
	controlFunc: React.PropTypes.func.isRequired,
	placeholder: React.PropTypes.string
};

export default Currency;
