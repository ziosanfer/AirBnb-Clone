import { connect } from 'react-redux';

import { createTree } from '../../actions/tree_actions';
import TreeForm from './tree_form';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
  createTree: tree => dispatch(createTree(tree))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TreeForm);
