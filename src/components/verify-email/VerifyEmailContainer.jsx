import React from 'react';
import Login from '../user-login/user-login';
import { withRouter, useHistory } from 'react-router-dom';
import { authApi } from '../../api/api';

class VerifyEmailContainer extends React.Component {
    
    componentDidMount() {
        const verify = this.props.location('/login')
        const token = verify.slice(8);
        const history = useHistory();

        authApi.verify(token);
        localStorage.setItem("token", token);

        // authApi.verifyMe(verify)
        history.replace('/login');
    }
    render() {
        return <Login />
    }
}
export default withRouter(VerifyEmailContainer)