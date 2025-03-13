// @ts-nocheck
export const NodeService = {
  getNodesData() {
    return [
      {
        id: 'annotation-1',
        type: 'annotation',
        draggable: false,
        selectable: false,
        data: {
          level: 1,
          label: 'Built-in node and edge types. Draggable, deletable and connectable!',
          arrowStyle: {
            right: 0,
            bottom: 0,
            transform: 'translate(-30px,10px) rotate(-80deg)',
          },
        },
        position: { x: 800, y: 150 },
        hidden: true,
      },
      {
        id: '1-1',
        type: 'customTooltip',
        data: {
          label: 'Tooltip Node',
          tooltip: {
            label: 'I am a tooltip',
          },
        },
        position: { x: 1100, y: 100 },
        width: 100,
        height: 50,
        hidden: true,
      },
      {
        id: '1-2',
        type: 'default',
        data: {
          label: 'Default Node',
        },
        position: { x: 850, y: 300 },
        hidden: true,
      },
      {
        id: '1-3',
        type: 'output',
        data: {
          label: 'Output Node',
        },
        position: { x: 900, y: 100 },
        hidden: true,
      },
      {
        id: 'annotation-2',
        type: 'annotation',
        draggable: false,
        selectable: false,
        data: {
          level: 2,
          label: 'Sub flows, toolbars and resizable nodes!',
          arrowStyle: {
            left: 0,
            bottom: 0,
            transform: 'translate(5px, 25px) scale(1, -1) rotate(100deg)',
          },
        },
        position: { x: 220, y: 200 },
      },
      {
        id: '2-1',
        type: 'group',
        position: {
          x: 100,
          y: 250,
        },
        style: {
          backgroundColor: 'rgba(208, 192, 247, 0.2)',
        },
        width: 450,
        height: 180,
      },
      {
        id: '2-1-2',
        type: 'group',
        position: {
          x: 600,
          y: 500,
        },
        style: {
          backgroundColor: 'rgba(208, 192, 247, 0.2)',
        },
        width: 450,
        height: 500,
      },
      {
        id: '2-2',
        data: {
          label: 'Node with Toolbar',
        },
        type: 'tools',
        position: { x: 50, y: 50 },
        style: {
          width: 80,
          height: 80,
          background: 'rgb(208, 192, 247)',
        },
        parentId: '2-1',
        extent: 'parent',
      },
      {
        id: '2-3',
        type: 'resizer',
        data: {
          label: 'resizable node',
        },
        position: { x: 250, y: 50 },
        style: {
          width: 80,
          height: 80,
          background: 'rgb(208, 192, 247)',
          color: 'white',
        },
        parentId: '2-1',
        extent: 'parent',
      },
      {
        id: 'annotation-3',
        type: 'annotation',
        draggable: false,
        selectable: false,
        data: {
          level: 3,
          label: 'Nodes and edges can be anything and are fully customizable!',
          arrowStyle: {
            right: 0,
            bottom: 0,
            transform: 'translate(-35px, 20px) rotate(-80deg)',
          },
        },
        position: { x: 40, y: 570 },
      },
      {
        id: '3-2',
        type: 'textinput',
        position: { x: 150, y: 650 },
        width: 200,
        height: 150,
        data: {},
      },
      {
        id: '3-1',
        type: 'circle',
        position: { x: 350, y: 500 },
        width: 100,
        height: 100,
        data: {},
      },

      {
        id: '5',
        type: 'zoom',
        data: {
          content: 'Zoom to toggle content and placeholder',
        },
        position: { x: 600, y: 100 },
      },
      {
        id: '6',
        type: 'zoom',
        data: { content: 'this is a node with some lines of text in it' },
        position: { x: 600, y: 200 },
      },
      {
        id: '7',
        type: 'zoom',
        data: { content: 'this is another node with some more text' },
        position: { x: 600, y: 300 },
      },
      {
        id: '8',
        type: 'textNode',
        data: { content: 'this is another node with some more text' },
        position: { x: 90, y: 830 },
      },
      {
        id: '9',
        type: 'imageNode',
        data: {
          image: {
            url: 'https://www.shutterstock.com/image-vector/image-icon-600nw-211642900.jpg',
            height: 200,
            width: 300,
          },
        },
        position: { x: 1000, y: 1700 },
        hideNode: false, //defenition at setNodes hook (Scheme.tsx)
        height: 200,
        width: 300,
      },
      {
        id: '10',
        type: 'websiteNode',
        data: {
          height: 500,
          width: 500,
        },

        position: { x: 300, y: 1100 },
        hideNode: false, //defenition at setNodes hook (Scheme.tsx)
        height: 500,
        width: 500,
      },
      {
        id: '11',
        type: 'progressNode',
        position: { x: 100, y: 950 },
        width: 100,
        height: 100,
        data: { label: "Task Progress", progress: 50 },
      },
      {
        id: "12",
        type: "dropdownNode",
        position: { x:1300, y: 2000 },
        data: { 
          defaultValue: "Опция 1",
          options: ["Опция 1", "Опция 2", "Опция 3"] 
        },
      },
      {
        id: "13",
        type: "tableNode",
        position: { x:100, y: 2200 },
        width: 300,
        height: 200,
        data: { 
          columns: ['Имя', 'Фамилия', 'Возраст'],
          rows: [
            ['Иван', 'Иванов', '30'],
            ['Петр', 'Петров', '25'],
          ],
        },
      },
      {
        id: "14",
        type: "userSvgNode",
        position: { x:100, y: 50 },
        style:{zIndex: 2},
        parentId: '2-1-2',
        extent: 'parent',
      },
      {
        id: "15",
        type: "userSvgNode",
        position: { x:100, y: 250 },
        style:{zIndex: 2},
        parentId: '2-1-2',
        extent: 'parent',
      },
      {
        id: "16",
        type: "userSvgNode",
        position: { x:100, y: 400 },
        parentId: '2-1-2',
        extent: 'parent',
        style:{zIndex: 1},
      },
      {
        id: "17",
        type: "userSvgNode",
        position: { x:1200, y: 700 },
      },
      {
        id: "18",
        type: "treeNode",
        width: 250,
        height: 200,
        position: { x:1200, y: 400 },
        data:{
          tree: [
            {
              id: 1,
              name: 'Root link',
              link: '/',
              children: [
                {
                  id: 2,
                  name: 'Child link',
                  link: '/scheme4',
                  children: [
                    {
                      id: 3,
                      name: 'Child 1.1 link',
                      link: '/scheme4',
                    },
                    {
                      id: 4,
                      name: 'Child 1.2 link',
                      link: '/scheme4',
                    },
                  ],
                },
                {
                  id: 5,
                  name: 'Child 2 link',
                  link: '/scheme4',
                },
              ],
            },
          ]
        }
      },
      {
        id: "19",
        type: "rotatableNode",
        data: { label: 'Rotate Me!' },
        width: 100,
        height: 50,
        position: { x:900, y: 400 },
      },
      {
        id: "20",
        type: "graphNode",
        position: { x: 1320, y: 160 },
        data: {
          label: "Scatter Plot",
          chartType: "scatter",
          chartData: {
            datasets: [
              {
                label: "Точки",
                data: [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }],
                backgroundColor: "rgb(255, 99, 132)",
              },
            ],
          },
        },
      },
      {
        id: "21",
        type: "graphNode",
        position: { x: 1620, y: 160 },
        data: {
          label: "Bar Chart",
          chartType: "bar",
          chartData: {
            labels: ["Янв", "Фев", "Мар"],
            datasets: [
              {
                label: "Продажи",
                data: [30, 50, 80],
                backgroundColor: "rgb(53, 162, 235)",
              },
            ],
          },
        },
      },
      {
        id: "22",
        type: "graphNode",
        position: { x: 1920, y: 160 },
        data: {
          label: "Pie Chart",
          chartType: "pie",
          chartData: {
            labels: ["Красный", "Синий", "Желтый"],
            datasets: [
              {
                data: [40, 30, 30],
                backgroundColor: ["rgb(255, 99, 132)", "rgb(53, 162, 235)", "rgb(255, 205, 86)"],
              },
            ],
          },
        },
      },
    ];
    
  },
  getEdgesData() {
    return [
      {
        id: 'e1-2',
        source: '1-1',
        target: '1-2',
        label: 'edge',
        type: 'smoothstep',
      },
      {
        id: 'e1-3',
        source: '1-1',
        target: '1-3',
        animated: true,
        label: 'animated edge',
      },
      {
        id: 'e2-2',
        source: '1-2',
        target: '2-2',
        type: 'smoothstep',
        label: 'edge marktype',
        arrowEnd: true,
      },
      {
        id: 'e2-3',
        source: '2-2',
        target: '2-3',
        type: 'smoothstep',
        arrowEnd: true,
      },
      {
        id: 'e3-3',
        source: '2-3',
        sourceHandle: 'a',
        target: '3-2',
        type: 'button',
        animated: true,
        style: { stroke: 'rgb(158, 118, 255)', strokeWidth: 2 },
      },
      {
        id: 'e3-4',
        source: '2-3',
        sourceHandle: 'b',
        target: '3-1',
        type: 'button',
        style: { strokeWidth: 2 },
      },

      {
        id: 'e5-2',
        source: '5',
        target: '6',
        animated: true,
      },
      {
        id: 'e5-3',
        source: '6',
        target: '7',
        animated: true,
      },
      {
        id: 'e8-11',
        source: '8',
        target: '11',
        label: 'edge',
        arrowEnd: true, //defenition at setEdges hook (Scheme.tsx)
        arrowStart: true, //defenition at setEdges hook (Scheme.tsx)
        // markerEnd: {
        //   type: 'arrowclosed',
        //   color: 'black',
        // },
        // markerStart: {
        //   type: 'arrowclosed',
        //   color: 'black',
        // },
        type: 'smoothstep',
      },
      {
        id: 'e11-10',
        source: '11',
        target: '10',
        label: 'edge',
        arrowEnd: true, //defenition at setEdges hook (Scheme.tsx)
        arrowStart: true, //defenition at setEdges hook (Scheme.tsx)
        type: 'smoothstep',
      },
      {
        id: 'e10-9',
        source: '10',
        target: '9',
        label: 'edge',
        arrowEnd: true, //defenition at setEdges hook (Scheme.tsx)
        arrowStart: true, //defenition at setEdges hook (Scheme.tsx)
        type: 'smoothstep',
      },
      {
        id: 'e9-12',
        source: '9',
        target: '12',
        label: 'edge',
        arrowEnd: true, //defenition at setEdges hook (Scheme.tsx)
        arrowStart: true, //defenition at setEdges hook (Scheme.tsx)
        type: 'smoothstep',
      },
      {
        id: 'e12-13',
        source: '12',
        target: '13',
        label: 'edge',
        arrowEnd: true, //defenition at setEdges hook (Scheme.tsx)
        arrowStart: true, //defenition at setEdges hook (Scheme.tsx)
        type: 'smoothstep',
      },
    ];
  },

  getSideBarNodesData() {
    return [
      {
        id: 'sidebarRect',
        type: 'customTooltip',
        data: {
          label: 'Tooltip Node',
          tooltip: {
            label: 'I am a sidebar tooltip',
          },
        },
        position: { x: 250, y: 5 },
      },
    ];
  },
  getNodes() {
    return Promise.resolve(this.getNodesData());
  },
  getEdges() {
    return Promise.resolve(this.getEdgesData());
  },
  getSideBarNode() {
    return Promise.resolve(this.getSideBarNodesData);
  },
};
