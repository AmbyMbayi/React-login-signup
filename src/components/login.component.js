import React, {Component} from 'react';

class Login extends Component{
    render(){
        return(
            <div className="container">
                <form>
                    <h3>Login</h3>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="email" className="form-control" placeholder="enter your mail"/>
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password" className="form-control" placeholder="enter your password"/>
                    </div>
                </form>

            </div>
        )
    }
}
export default Login;