//@ts-nocheck
import React, { useEffect, useState, memo } from 'react';
import { Handle, Position, NodeProps } from '@xyflow/react';

type CustomNodeProps = NodeProps & {
  data: {
    label: string;
    progress: number;
  };
};

const ProgressNode = ({ data }: CustomNodeProps) => {
  const [progressBar, setProgressBar] = useState(data.progress);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressBar((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 10;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [data.counter]);

  return (
    <div className="progress-node-container">
      <div className="progress-node-title">{data.label}</div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progressBar}%` }} />
      </div>
      <Handle type="source" position={Position.Bottom} />
      <Handle type="target" position={Position.Top} />
    </div>
  );
};

export default ProgressNode;
