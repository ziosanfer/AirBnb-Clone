import React from 'react';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(f) {
        return e => this.setState({
            [f]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        dispatch(openModal('login'))
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="login-box">
                Login or signup!
                <div onClick={this.props.closeModal} className="close-modal">X</div>
                <div className="form">
                    <label>Username:
              <input type="text" value={this.state.username} onChange={this.update('username')} className="username-login" />
                    </label>
                    <label>Password:
              <input type="password" value={this.state.password} onChange={this.update('password')} className="password-login" />
                    </label>
                    <input type="submit" value={this.props.formType} />
                </div>
            </form>
        );
    }
}

export default withRouter(SessionForm);