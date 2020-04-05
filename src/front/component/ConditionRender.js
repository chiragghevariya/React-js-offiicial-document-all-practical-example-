import React from 'react';
import Login from './Login';
import Register from './Register';

class ConditionRender extends React.Component {
    
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="element">
                <h1>Conditional Rendering</h1>
                {this.props.isLoggedIn == false ? <Login /> : <Register /> }  
            </div>
        );
    }
}

export default ConditionRender; 