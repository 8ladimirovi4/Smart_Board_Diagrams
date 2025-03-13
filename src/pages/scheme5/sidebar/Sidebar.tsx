// @ts-nocheck
import { useDnD } from '../DnDContext';
import './style.css';

export default () => {
  const [_, setType] = useDnD();

  const onDragStart = (event, nodeType) => {
    setType(nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
      <div className="description">You can drag these nodes to the pane on the right.</div>
      <div className="svg-node-container" onDragStart={(event) => onDragStart(event, 'svgNode')} draggable>
        <div className="svg-node">
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            <polygon points="50,0 100,50 50,100 0,50" fill="lightblue" />
          </svg>
        </div>
      </div>
      <div className="dndnode text" onDragStart={(event) => onDragStart(event, 'textNode')} draggable>
        TextUpdaterNode
      </div>
      <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'customTooltip')} draggable>
        Output Node
      </div>
    </aside>
  );
};
