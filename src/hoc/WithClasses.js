import React from 'react';
const withClasses = (WrappedComponent, className) =>{
    return props=>(
        <div className= {className}>
            <WrappedComponent/>
        </div>
    );
};

export default withClasses;