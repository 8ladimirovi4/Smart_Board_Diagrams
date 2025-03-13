//@ts-nocheck
import { Link } from "react-router-dom";
import { memo, useState,  Fragment } from 'react';
const TreeItem = ({ nodes, level = 0  }) => {
    return (
        <Fragment>
      <ul style={{ paddingLeft: `${level * 30}px` }}>
        {
        nodes.map((node) => (
          <li key={node.id}>
            <Link to={node.link} className='tree-node_link'>
            {node.name}
            </Link>
            {node.children && node.children.length > 0 && <TreeItem nodes={node.children} level={level + 1} />}
          </li>
        ))}
      </ul>
      </Fragment>
    );
  };

  export default TreeItem