import React from 'react';
import { Link } from 'react-router-dom';

const TreeShow = ({ tree, treeId, fetchTree }) => {
  const trees = {
    [treeId]: tree
  };

  return (
    <div className="single-tree-show">
      <div className="single-tree-map">
        <Link to="/">Back to trees index</Link>
        <treeMap
          trees={trees}
          treeId={treeId}
          singletree={true}
          fetchtree={fetchTree}
        />
      </div>
      <div className="right-half tree-details">
        <treeDetail tree={tree} />
      </div>
    </div>
  );
};

export default TreeShow;
