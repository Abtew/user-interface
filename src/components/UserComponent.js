import React, { Component } from 'react';
import UserService from '../services/UserService';

class UserComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            fullName: '',
            npmNum: '',
            address: '',
            phoneNum: '',
            email: ''
        }
    }

    submitRequest = (e) => {
        e.preventDefault();
        let user = {
            fullName: this.state.fullName,
            npmNum: this.state.npmNum,
            address: this.state.address,
            phoneNum: this.state.phoneNum,
            email: this.state.email
        }
        console.log(user); 
        UserService.submitRequest(user);  
            
    }

    clearHandler = (e) => {
        this.setState = {
            fullName: '',
            npmNum: '',
            address: '',
            phoneNum: '',
            email: ''
        }
    }

    changeHandler = (e) => {
        this.setState( {[e.target.name]: e.target.value} );       
        e.preventDefault();
    }
    
    render() {       
        return (
            <fieldset className="form-fieldset">
                <h3 className='form-title'>Healthcare Provider Registration Request</h3>
                <form className='submit-form'>
                    <div className='form-control'>
                        <label>First and Last Name: </label>
                        <input placeholder="First and Last Name" name="fullName" 
                            value = { this.state.value} onChange={this.changeHandler} />
                    </div>
                    <div className='form-control'>
                        <label>NPI Number: </label>
                        <input placeholder="NPI Number" name="npmNum"
                            value = { this.state.value} onChange={this.changeHandler} />
                    </div>
                    <div className='form-control'>
                        <label>Business Address: </label>
                        <input placeholder="Business Address" name="address" 
                            value = { this.state.value} onChange={this.changeHandler} />
                    </div>
                    <div className='form-control'>
                        <label>Telephone Number:</label>
                        <input placeholder="Telephone Number" name="phoneNum" 
                            value = { this.state.value} onChange={this.changeHandler} />
                    </div>
                    <div className='form-control'>
                        <label>Email Address: </label>
                        <input placeholder="Email Address" name="email" 
                            value = { this.state.value} onChange={this.changeHandler} />
                    </div>
                    <button className = "btn btn-primary" onClick={this.submitRequest}> Submit</button> 
                    <button className = "btn btn-warning" onClick={this.clearHandler} style={{marginLeft: "40px"}}> Clear</button>                    
                </form>
            </fieldset>
        );
    }
}

export default UserComponent;