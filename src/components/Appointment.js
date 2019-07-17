import React from 'react';
import PropTypes from 'prop-types';

export const Appointment = ( { appointment, deleteAppointment } ) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5>{ appointment.petName }</h5>
                <p>{ appointment.cxName }</p>
                <p>{ appointment.date }</p>
                <p>{ appointment.time }</p>
                <p>{ appointment.sympton }</p>
                <p>{ appointment.id }</p>
                <button className="btn btn-danger" onClick={ () => deleteAppointment( appointment.id ) }>Delete x</button>
            </div>
        </div>
    );
}

Appointment.propTypes = {
    appointment: PropTypes.object.isRequired,
    deleteAppointment: PropTypes.func.isRequired
}