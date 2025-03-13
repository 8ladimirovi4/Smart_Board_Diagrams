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
  const [svgDimensions, setSvgDimensions] = useState({ width: 240, height: 252 });

  const handleResize = (newWidth, newHeight) => {
    setSvgDimensions({ width: newWidth, height: newHeight });
    updateNodeInternals(id);
  };

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
  }, [id, updateNodeInternals]);

  return (
    <div
      style={{
        transform: `rotate(${rotation}deg)`,
        width: svgDimensions.width,
        height: svgDimensions.height,
        position: 'relative', // Добавлено для правильного позиционирования NodeResizer
      }}
      className="react-flow__node rotatable-node"
    >
      <div ref={rotateControlRef} className={`nodrag rotatable-node__handle`} />
      <NodeResizer
        onResize={handleResize}
        minWidth={100} // Минимальная ширина
        minHeight={100} // Минимальная высота
      />
      <div>{data?.label}</div>
      <Handle position={sourcePosition} type="source" />
      <Handle position={targetPosition} type="target" />
    </div>
  );
}
