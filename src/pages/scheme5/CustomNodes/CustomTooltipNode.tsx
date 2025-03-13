import { useState } from 'react';
import { Node, NodeProps, NodeToolbar, NodeToolbarProps, Handle, Position } from '@xyflow/react';
import { BaseNode } from '@/components/react_flow/base-node';

export type TooltipNodeType = Node<{
  label: string;
  tooltip?: {
    label: string;
    position?: NodeToolbarProps['position'];
  };
}>;

export function CustomTooltipNode({ data, selected }: NodeProps<TooltipNodeType>) {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleFocus = () => setTooltipVisible(true);

  const handleBlur = () => setTooltipVisible(false);

  return (
    <div style={{ border: '1px solid black', borderRadius: '5px' }}>
      <BaseNode
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        selected={selected}
        tabIndex={0}
      >
        <NodeToolbar
          isVisible={isTooltipVisible || selected}
          className="rounded-sm bg-primary p-2 text-blue-500"
          position={data.tooltip?.position}
          tabIndex={1}
        >
          {data.tooltip?.label}
        </NodeToolbar>
        <div>{data.label}</div>
        <Handle type="target" position={Position.Top} />
        <Handle type="source" position={Position.Bottom} />
      </BaseNode>
    </div>
  );
}
