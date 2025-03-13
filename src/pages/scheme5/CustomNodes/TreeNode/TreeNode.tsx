// @ts-nocheck
import { Fragment, memo, useState } from 'react';
import { Handle, Position, NodeResizer } from '@xyflow/react';
import { treeData } from './data'
import TreeItem from './TreeItem';

function TreerNode({ data }) {
     const [svgDimensions, setSvgDimensions] = useState({ width: '200', height: '250' });
     
     const handleResize = (event, params) => {
        const {width, height} = params
        setSvgDimensions({ width, height});
      };

      const { tree } = data
  return (
    <div className="tree-node">
      <h1>Tree Node</h1>
    <TreeItem nodes={tree}/>
     <NodeResizer
        minWidth={250}  
        minHeight={200} 
        onResize={handleResize} 
      />
    </div>
  );
}

export default memo(TreerNode);
