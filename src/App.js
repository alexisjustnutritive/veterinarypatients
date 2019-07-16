import React from 'react';
import './bootstrap.min.css';

// components
import { Header } from './components/Header';
import NewAppointment from './components/NewAppointment';

class App extends React.Component {

	state = {
		appointments: []
	}

	createNewAppointment = ( appointment ) => {
		console.log( 'new appointment created', appointment );
		this.setState( {
			appointments: [...this.state.appointments, appointment]
		} );
	}

  	render() {
		return (
			<div className="container">
				<Header title="Pets Clinic Appoitments" />
				<NewAppointment createNewAppointment={ this.createNewAppointment } />
			</div>
		);
  	}
}

export default App;
