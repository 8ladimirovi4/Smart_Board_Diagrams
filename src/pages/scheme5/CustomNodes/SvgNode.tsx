// @ts-nocheck
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { Handle, Position } from '@xyflow/react';
import './style.css';

function SvgNode({ data, isConnectable }) {
  useEffect(() => {
    gsap.to('.svg-node svg', {});
  }, []);

  return (
    <div className="svg-node-container">
      <div className="svg-node">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <polygon points="50,0 100,50 50,100 0,50" fill="lightblue" />
        </svg>

        {/* Точки соединения */}
        <Handle type="target" position={Position.Top} style={{ left: '50%', top: 0 }} isConnectable={isConnectable} />
        <Handle
          type="source"
          position={Position.Right}
          style={{ left: '100%', top: '50%' }}
          isConnectable={isConnectable}
        />
        <Handle
          type="target"
          position={Position.Bottom}
          style={{ left: '50%', top: '100%' }}
          isConnectable={isConnectable}
        />
        <Handle type="source" position={Position.Left} style={{ left: 0, top: '50%' }} isConnectable={isConnectable} />
      </div>
    </div>
  );
}

export default SvgNode;
