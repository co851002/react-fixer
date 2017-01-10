import React, {Component} from 'react';
import axios from "axios";
import DatePicker from './../components/Date';
import Currency from './../components/Currency';
import ResultsTable from './../components/ResultsTable';

class NewFormContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dateSelected: '',
			currencyOptions: [],
			resultsOptions: [],
			rates:{}

		};
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleClearForm = this.handleClearForm.bind(this);
		this.handleDateChange = this.handleDateChange.bind(this);
		this.handleCurrencySelect = this.handleCurrencySelect.bind(this);
		this.handleResults = this.handleResults.bind(this);
		//.rates = this.rates.bind(this);

	}

	componentDidMount() {
		const req = fetch('/react-fixer/src/assets/data.json')
					.then(result => result.json())
					.then(data => {
						//console.log(data);
						this.setState({
							dateSelected: data.dateSelected,
							currencyOptions: data.currencyOptions,
						});
					});
	}

	handleDateChange(e) {
		this.setState({ dateSelected: e.target.value }, () => this.state.dateSelected);
	}

	handleFocusDate(e){
		document.getElementById("selectDate").setAttribute("onfocus", "(this.type='date')");
		document.getElementById("selectDate").setAttribute("onblur", "(this.type='text')");
		document.getElementById("selectDate").setAttribute("min", "2000-01-03");
		let today = new Date();
		let dd = today.getDate();
		let mm = today.getMonth()+1;
		const yyyy = today.getFullYear();
		 if(dd<10){
		        dd=`0${dd}`
		    }
		    if(mm<10){
		        mm=`0${mm}`
		    }

		today = `${yyyy}-${mm}-${dd}`;
		document.getElementById("selectDate").setAttribute("max", today);

	}
	handleCurrencySelect(e) {
		this.setState({ currencySelected: e.target.value }, () => this.state.currencySelected);
	}

	handleResults(e) {
	const date = this.state.dateSelected;
	const base = this.state.currencySelected;
	const API_request = `https://api.fixer.io/${date}?base=${base}`;

	//console.log('Date is: '+date);
	//console.log('Base Rate is: '+base);
	//console.log('API Request is '+API_request);

	var th = this;
		this.serverRequest =
      axios.get(API_request)
      .then(function(result) {
        th.setState({
          rates: result.data.rates
        });
      });
	}

	handleClearForm(e) {
		e.preventDefault();
		this.setState({
			dateSelected: '',
			currencySelected: '',
			rates:{}
		});
	}

	handleFormSubmit(e) {
		e.preventDefault();
		const formPayload = {
			dateSelected: this.state.dateSelected,
			currencySelected: this.state.currencySelected,
		};

	}



	render() {
		const { rates } = this.state;

		return (
			<div className="container">

			<form className="container" onSubmit={this.handleFormSubmit}>

				<Currency
					name={'Currency'}
					title={'Currency'}
					placeholder={'Select a currency'}
					controlFunc={this.handleCurrencySelect}
					options={this.state.currencyOptions}
					selectedOption={this.state.currencySelected} />

				<DatePicker
					name={'Date'}
					title={'Date'}
					inputType={'text'}
					dateFocus={this.handleFocusDate}
					controlFunc={this.handleDateChange}
					content={this.state.dateSelected}
					placeholder={'Select a date'} />


				<div className="buttonWrapper">
					<input
						type="submit"
						className="button"
						value="Search"
						onClick={this.handleResults}/>
					<button
						className="button"
						onClick={this.handleClearForm}>Reset</button>
				</div>
			</form>

			<div className="wrapper">
				<h2>Results</h2>
				<ResultsTable
					name={'ResultsTable'}
					rates={rates}
					/>
			</div>

		</div>

		);
	}
}

export default NewFormContainer;
