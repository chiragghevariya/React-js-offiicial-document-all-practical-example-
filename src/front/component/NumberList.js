import React from 'react';

class NumberList extends React.Component {
    
    constructor(props){
        super(props);
    }

    render(){

        const numberData = this.props.number;
        const elemetLi = numberData.map((numberData)=>
                <li>{numberData}</li>
        );
        
        return (
            <div className="element">
                        <h1>Listing</h1>    
                        <ul>{elemetLi}</ul>              
            </div>
    
            
        );
    }
    
}

export default NumberList;  