import React from 'react';

class FormComponent extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            'email':'',
            'password':''
        };

        this.handleChangeEvent = this.handleChangeEvent.bind(this);

    }

    handleChangeEvent(event){

        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]:value
        });

        console.log(this.state);
    }
    render(){

        return (
                <div className="element">
                    <h1>Form</h1>
                    <div className='row'>
                        <div className="col-md-6">   
                            <form>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" value={this.state.email} onChange={this.handleChangeEvent} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" value={this.state.password} onChange={this.handleChangeEvent}s className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>                    
                </div>
        );
    }
    
}

export default FormComponent;  