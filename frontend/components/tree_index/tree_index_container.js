import { connect } from 'react-redux';
import { asArray } from '../../reducers/selectors';
import TreeIndex from './tree_index';

const mapStateToProps = state => ({
  trees: asArray(state.entities),
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TreeIndex);
