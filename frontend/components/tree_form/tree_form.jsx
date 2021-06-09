import React from 'react';
import { withRouter } from 'react-router';

class TreeForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const tree = Object.assign({}, this.state, this.coords);
    this.props.createTree(tree);
  }

  render() {
    const { title, body } = this.state;
    return (
      <div className="new-bench-container">
          <h3>List Your Tree</h3>
          <form onSubmit={this.handleSubmit}>
            <label className="bench-title">Title</label>
            <input
              type="text"
              value={title}
              onChange={this.update('title')}
            />

            <label className="bench-body">Description</label>
            <input
              type="text"
              value={body}
              onChange={this.update('body')}
            />
              <button>List It</button>
          </form>
      </div>
    );
  }
}

export default withRouter(TreeForm);
