import React from 'react';
import { Link } from 'react-router';


const treeDetail = ({ tree }) => {
  return (
    <div>
      <ul className="tree-list">
        <img className="index-image" src={tree.pic}/>
        <li>Title: {tree.title}</li>
        <li>Description: {tree.body}</li>
      </ul>
    </div>
  );
};

export default treeDetail;
