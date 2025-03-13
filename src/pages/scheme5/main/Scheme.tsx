// @ts-nocheck
import React, { useMemo } from 'react';

import './style.css';
import '@xyflow/react/dist/style.css';

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
  MarkerType,
  Panel,
} from '@xyflow/react';

import { NodeService } from '../data';

import { nodeTypes } from './nodeTypes'
import ButtonEdge from './ButtonEdge';
import Toolbar from '../toolbar/Toolbar';

import Sidebar from '../sidebar/Sidebar';
import { DnDProvider, useDnD } from '../DnDContext';

import DownloadButton from '../toolbar/DownloadButton';
import { setReactFlowNodes } from '@/store/redux/ractFlowSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


//default settings position and zoom of diagram
const defaultViewport = {
  x: 0, // Начальная позиция по оси X
  y: 0, // Начальная позиция по оси Y
  zoom: 0.8, // Уровень масштабирования на 10%
};

//grid settings
const snapGrid = [20, 20];

const edgeTypes = {
  button: ButtonEdge,
};

const nodeClassName = (node) => node.type;

let id = 0;
const getId = () => `dndnode_${id++}`;

// const connectionLineStyle = { stroke: '#ffff' };
// const defaultViewport = { x: 0, y: 0, zoom: 1.5 };
// const defaultEdgeOptions = {
//   animated: true,
//   type: 'smoothstep',
// };

//save diagram

//save and restore
const flowKey = 'example-flow';
const getNodeId = () => `randomnode_${+new Date()}`;

const Scheme = () => {
  //node types config
  const nodeTypesMemo = useMemo(() => (nodeTypes),[]);

  //diagram container
  const graphRef = useRef(null);

  //nodes
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  //save and restore
  const [rfInstance, setRfInstance] = useState(null);
  const [searchTerm, setSearchQuery] = useState('');

  //edges configuration (data from json)
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  //edges points coordinates
  const edgeLines = edges.map((edge) => {
    const edgeSourceNode = nodes.find((node) => node.id === edge.source);
    const edgeTargetNode = nodes.find((node) => node.id === edge.target);
    if (edgeSourceNode && edgeTargetNode) {
      return {
        id: edge.id,
        x1: edgeSourceNode.position.x + edgeSourceNode.width / 2,
        y1: edgeSourceNode.position.y + edgeSourceNode.height / 2,
        x2: edgeTargetNode.position.x + edgeTargetNode.width / 2,
        y2: edgeTargetNode.position.y + edgeTargetNode.height / 2,
      };
    }
  });

  //zoom control
  const [zoomLevel, setZoomLevel] = useState(1);
  //visible control
  const [hidden, setHidden] = useState(false);
  //dnd control
  const reactFlowWrapper = useRef(null);
  const { setViewport, screenToFlowPosition } = useReactFlow();

  //set data to nodes
  useEffect(() => {
    //set diagram dementions
    if (graphRef.current) {
      graphRef.current.style.width = '100%';
      graphRef.current.style.height = '100%';
    }

    //set new settings view position and zoom
    //setViewport({ x: 0, y: 0, zoom: 0.5 });

    //node config
    if (!searchTerm) {
      NodeService.getNodes().then((data) =>
        setNodes((nds) =>
          data.map((node) => {
            if (node.hideNode) {
              node = {
                ...node,
                hidden: true,
              };
            }

            return {
              ...node,
              width: node.width || 150,
              height: node.height || 50,
            };
          })
        )
      );
    } else if (searchTerm) {
      NodeService.getNodes().then((data) =>
        setNodes((nds) =>
          data
        //------------------------------------------------>filter nodes
            .filter((node) => node.id.toLowerCase().includes(searchTerm.toLowerCase()))
        //<------------------------------------------------filter nodes
            .map((node) => {
              if (node.hideNode) {
                node = {
                  ...node,
                  hidden: true,
                };
              }

              return {
                ...node,
                width: node.width || 150,
                height: node.height || 50,
              };
            })
        )
      );
    }
    //edge config
    NodeService.getEdges().then((data) =>
      setEdges((edg) =>
        data.map((edge) => {
          if (edge.arrowEnd) {
            edge = {
              ...edge,
              markerEnd: {
                type: MarkerType.ArrowClosed,
              },
            };
          }
          if (edge.arrowStart) {
            edge = {
              ...edge,
              markerStart: {
                type: MarkerType.ArrowClosed,
              },
            };
          }

          return edge;
        })
      )
    );
  }, [graphRef, setViewport, searchTerm]);


  const handleViewportChange = (newViewport) => {
    // Обработчик для обновления состояния области просмотра
    setViewport(newViewport);
  };

  //-------------->DnD
  const [type] = useDnD();
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      // check if the dropped element is valid
      if (!type) {
        return;
      }

      // project was renamed to screenToFlowPosition
      // and you don't need to subtract the reactFlowBounds.left/top anymore
      // details: https://reactflow.dev/whats-new/2023-11-10
      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition, type]
  );

  //<--------------DnD

  //--------------->hide/show nodes

  const idsToToggle = ['annotation-1', '1-1', '1-2', '1-3', 'e1-2', 'e1-3', 'e2-2'];

  const handleHide = (hidden) => (nodeOrEdge) => {
    if (zoomLevel > 1 && idsToToggle.includes(nodeOrEdge.id)) {
      return {
        ...nodeOrEdge,
        hidden: false,
      };
    } else if (zoomLevel > 1 && !idsToToggle.includes(nodeOrEdge.id)) {
      return {
        ...nodeOrEdge,
        hidden,
      };
    } else if (zoomLevel < 1 && idsToToggle.includes(nodeOrEdge.id)) {
      return {
        ...nodeOrEdge,
        hidden: true,
      };
    } else if (zoomLevel < 1 && !idsToToggle.includes(nodeOrEdge.id)) {
      return {
        ...nodeOrEdge,
        hidden,
      };
    }
    return {
      ...nodeOrEdge,
      hidden,
    };
  };

  //или

  // function hide(hidden) {
  //   return function(nodeOrEdge){
  //     return {
  //       ...nodeOrEdge,
  //       hidden
  //     }
  //   }
  // }

  useEffect(() => {
    setNodes((nds) => nds.map(handleHide(hidden)));
    setEdges((eds) => eds.map(handleHide(hidden)));
  }, [hidden]);

  //<---------------hide/show nodes

  //----------------> zoom control
  const handleMove = (event, viewport) => {
    setZoomLevel(viewport.zoom);
  };

  const handleZoomControl = (nodeOrEdge) => {
    // Массив ID элементов, которые нужно скрывать или показывать в зависимости от значения zoom
    const idsToToggle = ['annotation-1', '1-1', '1-2', '1-3', 'e1-2', 'e1-3', 'e2-2'];

    if (zoomLevel < 1 && idsToToggle.includes(nodeOrEdge.id)) {
      return {
        ...nodeOrEdge,
        hidden: true,
      };
    } else if (zoomLevel > 1 && idsToToggle.includes(nodeOrEdge.id)) {
      return {
        ...nodeOrEdge,
        hidden: false,
      };
    }

    // Если zoom равен 1, возвращаем элемент без изменения видимости
    return nodeOrEdge;
  };

  useEffect(() => {
    setNodes((nds) => nds.map((nodes) => handleZoomControl(nodes)));
    setEdges((eds) => eds.map((edges) => handleZoomControl(edges)));
  }, [zoomLevel]);
  //<--------------- zoom control

  //--------------------------> save and restore
  const onSave = useCallback(() => {
    if (rfInstance) {
      const flow = rfInstance.toObject();
      localStorage.setItem(flowKey, JSON.stringify(flow));
    }
  }, [rfInstance]);

  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      const flow = JSON.parse(localStorage.getItem(flowKey));

      if (flow) {
        const { x = 0, y = 0, zoom = 1 } = flow.viewport;
        setNodes(flow.nodes || []);
        setEdges(flow.edges || []);
        setViewport({ x, y, zoom });
      }
    };

    restoreFlow();
  }, [setNodes, setViewport]);

  //<-------------------------  save and restore

  const handleNodeDragStop = (_, node) => {
   // console.log(`Узел ${node.id} перемещен в координаты:`, node.position);
  };

  return (
    <>
      <Toolbar checked={hidden} onChange={(event) => setHidden(event.target.checked)} />

      <div className="dndflow">
        <Sidebar />
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            ref={graphRef}
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            //fitView //when true block
            defaultViewport={defaultViewport}
            attributionPosition="top-right"
            nodeTypes={nodeTypesMemo}
            edgeTypes={edgeTypes}
            className="overview"
            onDrop={onDrop}
            onDragOver={onDragOver}
            connectionLineType="smoothstep"
            snapToGrid={true}
            snapGrid={snapGrid}
            attributionPosition="bottom-left"
            onMove={handleMove}
            minZoom={0.1}
            maxZoom={10}
            nodes={nodes}
            onInit={setRfInstance}
            onNodeDragStop={handleNodeDragStop}
          >
            <MiniMap zoomable pannable nodeClassName={nodeClassName} />
            <Controls />
            {/* цвет и размер сетки */}
            <Background color={'lightGrey'} size={2} gap={10} />

            <Panel position="top-right">
              <button onClick={onSave}>save</button>
              <button onClick={onRestore}>restore</button>

              <input
                style={{ width: '300px' }}
                name="filter"
                type="text"
                placeholder="Поиск узлов по ID (например, id = 8)"
                value={searchTerm}
                onChange={(evt) => setSearchQuery(evt.target.value)}
              />
            </Panel>
          </ReactFlow>
        </div>
      </div>
    </>
  );
};

export default () => (
  <ReactFlowProvider>
    <DnDProvider>
      <Scheme />
    </DnDProvider>
  </ReactFlowProvider>
);
