//@ts-nocheck
import React, { useEffect, useState, useRef } from 'react';
import { Handle, NodeResizer, Position, useUpdateNodeInternals } from '@xyflow/react';
import { drag } from 'd3-drag';
import { select } from 'd3-selection';

export default function RotatableNode({
  id,
  sourcePosition = Position.Left,
  targetPosition = Position.Right,
  data,
}) {
  const rotateControlRef = useRef(null);
  const updateNodeInternals = useUpdateNodeInternals();
  const [rotation, setRotation] = useState(0);
  const [svgDimensions, setSvgDimensions] = useState({ width: 100, height: 50 });

  useEffect(() => {
    if (!rotateControlRef.current) {
      return;
    }

    const selection = select(rotateControlRef.current);
    const dragHandler = drag().on('drag', (evt) => {
      const dx = evt.x - 100;
      const dy = evt.y - 100;
      const rad = Math.atan2(dx, dy);
      const deg = rad * (180 / Math.PI);
      setRotation(180 - deg);
      updateNodeInternals(id);
    });

    selection.call(dragHandler);
  }, [id, updateNodeInternals, svgDimensions]);

  const handleResize = (event, params) => {
    const { width, height } = params;
    setSvgDimensions({ width, height });
  };

  return (
    <div
      style={{
        transform: `rotate(${rotation}deg)`,
        width: svgDimensions.width,
        height: svgDimensions.height,
        position: 'relative',
      }}
      className="react-flow__node rotatable-node"
    >
      <NodeResizer
        onResize={handleResize}
        minWidth={100}
        minHeight={50} 
      />
      <div ref={rotateControlRef} className={`nodrag rotatable-node__handle`} />
      <div style={{ 
        textAlign: 'center', lineHeight: `${svgDimensions.height}px`,
        width: svgDimensions.width,
        height: svgDimensions.height,
        backgroundColor: 'lightBlue'
        }}>
        {data?.label}
      </div>
      <Handle position={sourcePosition} type="source" />
      <Handle position={targetPosition} type="target" />
    </div>
  );
}
