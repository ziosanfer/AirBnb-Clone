import * as APIUtil from '../util/tree_api_util'

export const RECEIVE_TREES = 'RECEIVE_TREES';
export const RECEIVE_TREE = 'RECEIVE_TREE';

export const receiveTrees = Trees => ({
  type: RECEIVE_TREES,
  Trees,
});

export const receiveTree= ({ tree }) => ({
  type: RECEIVE_TREE,
  tree,
});

export const fetchTrees = () => dispatch => (
  APIUtil.fetchTrees().then(tree => (
    dispatch(receiveTree(tree))
  ))
);

export const fetchTree = id => dispatch => (
  APIUtil.fetchTree(id).then(payload => (
    dispatch(receiveTree(payload))
  ))
);

export const createTree = tree => dispatch => (
  APIUtil.createTree(tree).then(tree => (
    dispatch(receiveTree(tree))
  ))
);
