import React from 'react';
import { withRouter } from 'react-router-dom';

class IndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const treeId = this.props.tree.id;
    this.props.history.push(`/trees/${treeId}`);
  }

  render() {
    const { title, body, pic } = this.props.tree;
    return (
      <div
        className="tree-index-item"
        onClick={this.handleClick}
      >
        <div className="index-item-info">
          <span className="index-item-category">Title:</span>
          <span className="index-item-copy">
            {title}
          </span>
          <span className="index-item-category">Description:</span>
          <span className="index-item-copy">{body}</span>
        </div>
        <img src={pic}/>
      </div>
    );
  }
}

export default withRouter(IndexItem);
