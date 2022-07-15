import React, { Component } from 'react';
import axios from 'axios';

class UserService extends Component {
    //pushing to back end implementation
    submitRequest(user){         
        console.log(user);       
        //return axios.post(<URL here>);
    }
}

export default new UserService();