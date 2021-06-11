import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(f) {
    return e => this.setState({
      [f]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit} className="login-box">
           <div onClick={this.props.closeModal} className="close-modal">X</div>
           Login or signup!
          <div className="form">
            <label>Username:
              <input type="text" value={this.state.username} onChange={this.update('username')} className="username-login"/>
            </label>
            <br/>
            <label>Password:
              <input type="password" value={this.state.password} onChange={this.update('password')} className="password-login"/>
            </label>
            <br/>
            <input type="submit" value={this.props.formType} />
          </div>
        </form>
    );
  }
}

export default withRouter(SessionForm);
