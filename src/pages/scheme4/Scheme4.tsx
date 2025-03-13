import { PageWrapper } from './styles';
import createEngine, { 
  DefaultLinkModel, 
  DefaultNodeModel,
  DiagramModel 
} from '@projectstorm/react-diagrams';

import {
  CanvasWidget
} from '@projectstorm/react-canvas-core';

import './style.css'

const Scheme4 = () => {

  const engine = createEngine();

  // node 1
const node1 = new DefaultNodeModel({
  name: 'Node 1',
  color: 'rgb(0,192,255)',
});
node1.setPosition(100, 100);
let port1 = node1.addOutPort('Out');

// node 2
const node2 = new DefaultNodeModel({
  name: 'Node 2',
  color: 'rgb(0,192,255)',
});
node2.setPosition(200, 200);
let port2 = node2.addOutPort('Out');

// link them and add a label to the link
const link = port1.link<DefaultLinkModel>(port2);
link.addLabel('Hello World!');

const model = new DiagramModel();
model.addAll(node1, node2, link);
engine.setModel(model);

  return (
    <PageWrapper>
      <h1>STORM React Diagrams</h1>
      <h2>License: free</h2>
      <a href="https://projectstorm.gitbook.io/react-diagrams/about-the-project/architecture-questions" target='_blank'>Docs</a>
      <a href="https://github.com/projectstorm/react-diagrams" target='_blank'>Samples</a>
<CanvasWidget className="diagram-container" engine={engine} />
    </PageWrapper>
  );
};

export default Scheme4;
