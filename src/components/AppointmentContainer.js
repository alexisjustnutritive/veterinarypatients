import React from 'react';
import PropTypes from 'prop-types';

// components
import { Appointment } from './Appointment';

export const AppointmentContainer = ( { appointments, deleteAppointment } ) => {
    return (
        <div>
            { appointments.length > 0 ? <h3 className="text-center mb-4">Manage Appointments</h3> : <p>*No appointments</p> }
            
            <div className="card-deck">
                {
                    appointments.map( ( appointment ) => {
                        return (
                            <Appointment 
                                key={ appointment.id } 
                                appointment={ appointment }
                                deleteAppointment={ deleteAppointment }
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

AppointmentContainer.propTypes = {
    appointments: PropTypes.array.isRequired,
    deleteAppointment: PropTypes.func.isRequired
}