// @ts-nocheck

import './style.css';
import './xy-theme.css';

import { useRef, useCallback, useState, useEffect } from 'react';
import {
  ReactFlow,
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  ReactFlowProvider,
  useReactFlow,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import { MarkerType } from '@xyflow/react';
import { NodeService } from './data';

import AnnotationNode from './CustomNodes/AnnotationNode';
import ToolbarNode from './CustomNodes/ToolbarNode';
import ResizerNode from './CustomNodes/ResizerNode';
import CircleNode from './CustomNodes/CircleNode';
import TextNode from './CustomNodes/TextNode';
import ButtonEdge from './main/ButtonEdge';
import Toolbar from './toolbar/Toolbar';
import Scheme from './main/Scheme';

import Sidebar from './sidebar/Sidebar';
import { DnDProvider, useDnD } from './DnDContext';

import ZoomNode from './CustomNodes/ZoomNode';

import DownloadButton from './toolbar/DownloadButton';
import ButtonComponent from '@/components/customButton/ButtonComponent';
import { v4 } from 'uuid';

const Scheme5 = () => {
  const [schemes, setSchemes] = useState([<Scheme key={v4()} />]);

  const handleAddScheme = () => {
    setSchemes((items) => [...items, <Scheme key={v4()} />]);
  };

  const handleRemoveScheme = () => {
    if (schemes.length == 1) return;

    setSchemes((items) => items.slice(0, items.length - 1));
  };

  return (
    <>
      <div style={{ paddingLeft: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexDirection: 'column' }}>
          <h1>React Flow</h1>
          <h2>License: Base free</h2>
          <a href="https://reactflow.dev/examples/overview" target="_blank">
            Docs
          </a>
          <a href="https://reactflow.dev/examples/nodes/stress" target="_blank">
            Stress test
          </a>
        </div>

        <div style={{ display: 'flex', width: '100%', height: '50px', gap: '10px', marginBottom: '10px' }}>
          <div>
            <ButtonComponent label={'Add scheme'} onClick={handleAddScheme} />
          </div>
          <div>
            <ButtonComponent label={'Remove scheme'} onClick={handleRemoveScheme} />
          </div>
        </div>
      </div>
      <div style={{ height: '700px' }}>{schemes && schemes.map((scheme) => scheme)}</div>
    </>
  );
};

export default Scheme5;
