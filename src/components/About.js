import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
// import AppContext from '../context/AppState';

const About = () => {
    const applicationContext = useContext(AppContext);
    console.log(applicationContext);
    return (
        <div>
            <h1>This is about component with name {applicationContext.name}</h1>
        </div>
    )
}

export default About;