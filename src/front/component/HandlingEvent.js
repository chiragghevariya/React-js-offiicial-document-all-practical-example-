import React from 'react';

class HeaderComponent extends React.Component {
    
    constructor(props){

        super(props);
        this.state ={ ToggaleOnOff: true }; 
        this.handleToggleClickEvent = this.handleToggleClickEvent.bind(this);
        this.handlePassingClickEvent = this.handlePassingClickEvent.bind(this);

    }

    handleClickEvent(){

        alert("HI");
    }
  
    handleToggleClickEvent(){

        return this.setState (state => ({

            ToggaleOnOff: !state.ToggaleOnOff

        })); 
    }

    handlePassingClickEvent(e,arg){
        e.preventDefault();
        alert(arg);
    }
    render() {

        
      return (
            <div className="element">

                <h1>Event Example</h1>   
                    <button
                        className="button"
                        onClick={this.handleClickEvent}>
                        Click To Alert
                    </button>

                    <button
                        className="button"
                        onClick={this.handleToggleClickEvent}>
                        {this.state.ToggaleOnOff == true ? 'ON' : 'OFF' }
                    </button>

                    <button
                        className="button"
                        onClick={ (e) => this.handlePassingClickEvent(e,'HI') }>
                        Passing Argument
                    </button>
            </div>
        );
    }
}

export default HeaderComponent; 