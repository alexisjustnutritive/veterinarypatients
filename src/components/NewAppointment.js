import React, { Component } from 'react'
import Uuid from 'uuid/v4';
import PropTypes from 'prop-types';

export default class NewAppointment extends Component {
    state = {
        appointment: {
            petName: '',
            cxName: '',
            date: '',
            time: '',
            sympton: ''
        },
        error: true
    }

    onChange = ( e ) => {
        this.setState( {
            appointment: {
                ...this.state.appointment, // spreat operator
                [ e.target.name ]: e.target.value
            }
        }, () => {
            let { petName, cxName, date, time, sympton } = this.state.appointment;
            if ( petName === '' || cxName === '' || date === '' || time === '' || sympton === '' ) {
                this.setState( {
                    error: true
                } );
            } else {
                this.setState( {
                    error: false
                } );
            }
        } );
    }

    onSubmit = ( e ) => {
        e.preventDefault();

        if ( !this.state.error ) {
            console.log( 'creating appointment' );
            this.setState( {
                appointment: {
                    ...this.state.appointment,
                    id: Uuid()
                }
            }, () => {
                this.props.createNewAppointment( this.state.appointment );
                this.setState( {
                    appointment: {
                        petName: '',
                        cxName: '',
                        date: '',
                        time: '',
                        sympton: ''
                    },
                    error: true
                } );
            } );
        }
    }

    render() {
        let { error } = this.state;
        
        return (
            <div className="card my-4">
                <div className="card-body">
                    <h5 className="text-center my-4">Llene el formulario para crear nueva cita</h5>
                    <form onSubmit={ this.onSubmit } className="container">
                        <div className="form-group row align-items-center">
                            <label htmlFor="pet-name" className="col-3">Pet Name</label>
                            <input 
                                type="text"
                                name="petName" 
                                className="form-control col-9" 
                                id="pet-name" 
                                placeholder="pet name..."
                                onChange={ this.onChange }
                                value={ this.state.appointment.petName } 
                            />
                        </div>
                        <div className="form-group row align-items-center">
                            <label htmlFor="owner-name" className="col-3">Owner Name</label>
                            <input 
                                type="text" 
                                name="cxName" 
                                className="form-control col-9" 
                                id="owner-name" 
                                placeholder="owner name..." 
                                onChange={ this.onChange } 
                                value={ this.state.appointment.cxName }
                            />
                        </div>
                        <div className="form-group row">
                                <label htmlFor="" className="col-3">Date</label>
                                <input 
                                    type="date" 
                                    name="date" 
                                    className="form-control col-9" 
                                    onChange={ this.onChange } 
                                    value={ this.state.appointment.date }
                                />
                        </div>
                        <div className="form-group row">
                                <label htmlFor="" className="col-3">Time</label>
                                <input 
                                    type="time" 
                                    name="time" 
                                    className="form-control col-9" 
                                    onChange= { this.onChange } 
                                    value={ this.state.appointment.time }    
                                />
                        </div>
                        <div className="form-group row align-items-center">
                            <label htmlFor="symptom" className="col-3">Symptom</label>
                            <textarea 
                                name="sympton" 
                                id="sympton" 
                                cols="30" 
                                rows="3" 
                                className="form-control col-9" 
                                onChange={ this.onChange }
                                value={ this.state.appointment.sympton }
                            ></textarea>
                        </div>
                        <div className="form-group row mt-4 p-2">
                            <input 
                                type="submit" 
                                value="Add new appointment" 
                                className="btn btn-primary btn-block col-12" 
                                disabled= { this.state.error}
                            />
                            {
                                error ? <p className="alert alert-warning text-center my-2 col-12 alert-btn">*All field have to be set</p> : null
                            }
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

NewAppointment.propTypes = {
    createNewAppointment: PropTypes.func.isRequired
}
