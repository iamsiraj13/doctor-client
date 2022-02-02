import React from 'react';
import Navigation from '../../shared/navigation/Navigation'
import AppoinmentHeader from '../appoinmentHeader/AppoinmentHeader';
import AvailableAppoinments from '../availableAppoinment/AvailableAppoinments';
const Appoinment = () => {


    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation/> 
            <AppoinmentHeader date={date} setDate={setDate}/>
            <AvailableAppoinments date={date}/>
        </div>
    );
};

export default Appoinment;