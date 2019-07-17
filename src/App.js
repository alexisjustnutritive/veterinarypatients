import React from 'react';
import './bootstrap.min.css';

// components
import { Header } from './components/Header';
import NewAppointment from './components/NewAppointment';
import {AppointmentContainer} from './components/AppointmentContainer';	

class App extends React.Component {

	state = {
		appointments: []
	}

	deleteAppointment = ( id ) => {
		console.log( id );
		// copy the state first
		let stateCopy = [ ...this.state.appointments ];
		let newAppointmentList = stateCopy.filter( element => {
			return element.id !== id;
		} );
		this.setState( {
			appointments: newAppointmentList
		} );
	}

	createNewAppointment = ( appointment ) => {
		this.setState( {
			appointments: [...this.state.appointments, appointment]
		} );
	}

	componentDidMount() {
		const appointmentsLs = JSON.parse( localStorage.getItem( 'appointments' ) );
		
		console.log( appointmentsLs );
		if ( appointmentsLs ) {
			this.setState( {
				appointments: appointmentsLs
			} );
		}
	}

	componentDidUpdate() {
		localStorage.setItem( 'appointments', JSON.stringify( this.state.appointments ) );
	}

  	render() {
		return (
			<div className="container">
				<Header title="Pets Clinic Appoitments" />
				<NewAppointment createNewAppointment={ this.createNewAppointment } />
				<AppointmentContainer className="mt-4" appointments={ this.state.appointments } deleteAppointment={ this.deleteAppointment }/>
			</div>
		);
  	}
}

export default App;
