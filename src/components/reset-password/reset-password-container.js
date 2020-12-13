import React from "react";

import { withRouter } from "react-router-dom";
import { authApi } from "../../api/api";
import ResetPassword from "./reset-password";

class ResetPasswordContainer extends React.Component {
  componentDidMount() {
    const resetPassword = this.props.location.pathname;
    const token = resetPassword.slice(17);
  }
  render() {
    return <ResetPassword token={this.props.location} />;
  }
}
export default withRouter(ResetPasswordContainer);
