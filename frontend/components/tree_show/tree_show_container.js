import { connect } from 'react-redux';

import { fetchTree } from '../../actions/Tree_actions';
import { selectTree } from '../../reducers/selectors';
import TreeShow from './tree_show';

const mapStateToProps = (state, { match }) => {
  const treeId = parseInt(match.params.treeId);
  const tree = selectTree(state.entities, match.params.treeId);
  return {
    treeId,
    tree
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTree: id => dispatch(fetchTree(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TreeShow);
