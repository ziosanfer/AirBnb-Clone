import React from 'react';
import TreeIndexItem from './tree_index_item';
import { Link } from 'react-router-dom'
debugger
const TreeIndex = ({ trees }) => (
  <div>
    <Link to="/api/trees">
    <h1>Trees: </h1>
    </Link>
    {trees.map(tree => (
      <TreeIndexItem
        tree={tree}
        key={tree.id}
      />
    ))}
  </div>
);
debugger
export default TreeIndex;
